#!/bin/bash
./pass-prompt.sh
echo
#echo "Done. Password=$password"

echo "Starting MongoDB Database..."
echo $password | sudo -S mongod --config /usr/local/etc/mongod.conf &
echo "MongoDB executed."

echo "Running Backend in the background..."
node latest/evoluteData/evoluteData.js &
echo "Backend initiated."

echo "Starting Frontend in the background..."
pushd latest/frontend && npm run dev &
pushd ..
echo "Frontend initiated."
