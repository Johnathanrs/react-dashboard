#!/bin/bash
exec ./pass-prompt.sh
echo
#echo "Done. Password=$password"

echo "Stopping Backend..."
echo $password | sudo -S killall node
echo "Backend termination sent."

echo "Stopping Frontend..."
echo $password | sudo -S killall npm
echo "Frontend termination sent."

