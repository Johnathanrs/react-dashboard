#!/bin/awk -f
BEGIN {
 RS="{";
 FS=",";
}
{
  node=$1
  issue=$6
  n=split(node,array,":");
  node_id=gsub("\"","",array[2]);
  print array[2];
}
