#!/bin/bash
./pass-prompt.sh
echo "Stopping MongoDB Database..."
echo $password | sudo -S killall mongod
echo "MongoDB termination sent."

echo "Stopping Backend..."
echo $password | sudo -S killall node
echo "Backend termination sent."

echo "Stopping Frontend..."
echo $password | sudo -S killall npm
echo "Frontend termination sent."

