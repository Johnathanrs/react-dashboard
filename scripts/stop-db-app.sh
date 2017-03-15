#!/bin/bash
. ./pass-prompt.sh

if [[ $? > 0 ]] ; then
     echo "Password prompt failed. Exiting..."
     exit  
else
     echo "Password prompt succeeded. Continuing..."
fi

echo "Stopping MongoDB Database..."
echo $password | sudo -S killall mongod
echo "MongoDB termination sent."

echo "Stopping Backend..."
echo $password | sudo -S killall node
echo "Backend termination sent."

echo "Stopping Frontend..."
echo $password | sudo -S killall npm
echo "Frontend termination sent."

