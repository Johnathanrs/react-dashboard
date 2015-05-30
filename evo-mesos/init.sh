#!/bin/bash
#Get Hadoop Environment Variables
source ~/.bash_profile
 
#Determine Container IP Address
int=`ifconfig | egrep 'eth[0-9]{3,5}' | awk '{print $1}'`
ip=`ifconfig $int | grep 'inet addr' | awk '{print $2}' | cut -d':' -f 2`
echo "IP is $ip"
 
 
#Alias container to host (so other's know where to go)
if [[ -z "$HOSTID" ]]; then
	echo "Pass HOSTID to container"
	exit 1;
else
 
	#Bind Consul Agent via Host Consul
	/sbin/consul agent -join $HOSTID -data-dir=/tmp/ -config-dir=/opt/consul/var -bind $ip >> /var/log/consul 2>&1 &
 
	echo "Registering Infoblox Host Record:"
	#ARecord/usr/bin/curl -k -u fk:pass -H "Content-Type: application/json" -X POST https://disthost-ib.apple.com/wapi/v1.0/record:a -d '{ "name": '\""$HOSTNAME".gcsarch.apple.com\"', "ipv4addr": '\""$ip"\"', "view": "internal"}'
	/usr/bin/curl -k -u fk:pass -H "Content-Type: application/json" -X POST https://disthost-ib.apple.com/wapi/v1.0/record:host -d '{"ipv4addrs":[{"configure_for_dhcp":false,"ipv4addr": '\""$ip"\"'}],"name": '\""$HOSTNAME".gcsarch.apple.com\"',"view": "internal"}'
	printf "\n"
fi
 
#A little time between transactions (precautionary, probably not needed)
sleep 3
 
#######STORAGE (OBJECT)######
if [[ -z "$BUCKET" ]]; then
        echo "No S3 Bucket identified. Continuing..."
else
        echo "S3 Bucket identified..."
BUCKET=`echo $BUCKET | tr '[:lower:]' '[:upper:]'`
mkdir -p /gcs/data/$BUCKET
pushd /gcs/data/$BUCKET
s3cmd get --recursive s3://$BUCKET/
fi
 
#######STORAGE (GIT)######
if [[ -z "$REPO" ]]; then
        echo "No Git Repo identified. Continuing..."
else
        echo "Git Repo identified..."
mkdir -p /ngs/app
pushd /ngs/app/
git clone $REPO
 
#set environmental varialbe to $gitdir
fi
 
#Register your service
 
#Pass to user space
#su - $HDFS_USER -c /usr/bin/exec-hadoop.sh
/usr/bin/app-exec.sh
