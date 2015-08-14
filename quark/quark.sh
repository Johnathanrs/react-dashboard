#!/bin/bash
set -e
#set -v
#set -x 
PROGNAME=$(basename $0)

die() {
    echo "$PROGNAME: $*" >&2
    exit 1
}

usage() 
{
  if [ "$*" != "" ] ; then
    echo "Error: $*"
  fi

  cat << EOF

Usage: $PROGNAME [COMMAND] [OPTIONS ...]

Commands:
  deploy          Run an application using specified JSON configuration file      
  destroy         Destroy a currently running app
  restart         Gracefully restart a currently running app
  scale           Adjust the number of instances (+ or -)
  apps            List currently running apps
  services        List currently registered services

Options:
  -h, --help      display this usage message and exit
  -f, --file      JSON configuration file
  -s, --scale     specify number of instances to start
EOF
  exit 1
}

CONSUL_URL='localhost:8500/v1/'
CONSUL_FL='agent/force-leave/'
CONSUL_CRIT='health/state/critical'

clean_up_errant_nodes()
{
  #get critical node ids
  CRIT_IDS=`http $CONSUL_URL$CONSUL_CRIT | ./parseJSON.awk` 
  
  printf %s "$CRIT_IDS" | while read -r node_id
  do
    #Force node to left state
    if [ -n "$node_id" ] ; then
      echo $CONSUL_URL$CONSUL_FL$node_id
      #http $CONSUL_URL$CONSUL_FL$node_id > /dev/null
    fi
  done
}

REMOTE_HOST="evo3.evolute.io:8080/v2/apps"

SCALE_UP=true
NUM_INSTANCES=0

COMMAND="0"
# Check command
case $1 in
  deploy)
    COMMAND="1";
    http POST $2  
    ;;
  destroy)
    COMMAND="2";
    ;;
  restart)
    ;;
  scale)
    #Check sign to scale up or down and set number to scale by
    SIGN=`echo $3 | cut -c 1`;
    if [ $SIGN = "-" ] ; then 
      SCALE_UP=false
      NUM_INSTANCES=`echo $3 | cut -c 2-`;
      echo "Number of instances is $NUM_INSTANCES";
    elif [ $SIGN = "+" ] ; then
      SCALE_UP=true
      NUM_INSTANCES=`echo $3 | cut -c 2-`;
    else
      NUM_INSTANCES=$3; 
    fi

    # Get current instances
    RESPONSE=`http GET $REMOTE_HOST/$2 | jsonlint | grep instances | awk {'print $2'} | rev | cut -c2- | rev`;
    echo "The number of current instances of $2 is $RESPONSE";

    #Calculate number of instances to post
    if [ "$SCALE_UP" = true ] ; then
      REQUEST_INSTANCES=`expr $RESPONSE + $NUM_INSTANCES`;
    else
      REQUEST_INSTANCES=`expr $RESPONSE - $NUM_INSTANCES`;
    fi
    
    #Error-check
    if [ $REQUEST_INSTANCES -lt 1 ] ; then
      REQUEST_INSTANCES=0
    fi
    
    echo "Requested Instances = $REQUEST_INSTANCES" 
    RES=`http -v PUT $REMOTE_HOST\/$2 instances:=$REQUEST_INSTANCES | grep deploymentID`
    if [ -z "$RES" ] ; then
      echo "Scaling successful"
    else
      echo "Scaling unsuccessful"
    fi
    ;;
  apps)
    ID_LIST=`http $REMOTE_HOST | jsonlint | grep id | awk {'print $2;'} | cut -b 2- | rev | cut -b 3- | rev`;
    echo $ID_LIST;
    while read ID
    do 
      APP_URL=$REMOTE_HOST$ID;
      echo $APP_URL;
      /usr/bin/http GET $APP_URL;
    done < /tmp/ids
    ;;
  services)
    case $2 in
      list)
        ;;
      cleanup)
        clean_up_errant_nodes
        ;;
    esac
esac

while getopts ":h" opt; do
  case $opt in
    h)
      usage
      ;;
    \?)
      echo "Not supported: -$OPTARG" >&2
      ;;
  esac
done
 
