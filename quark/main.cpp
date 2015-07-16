/* Author: Avnish C. Patel
 * 
 * 
 * 
 */
#include<iostream>
#include"strings.h"

#include "curl_easy.h"

#define MIN_ARGS 2

using curl::curl_easy;

/* Forward Declarations */
void usage(); 

int main (int argc, char** argv)
{
  // parse args
  if (argc < MIN_ARGS) 
    usage();
  
  // curl test
  curl_easy easy;
  easy.add(curl_pair<CURLoption,string>(CURLOPT_URL,"http://www.google.com") );
  easy.add(curl_pair<CURLoption,long>(CURLOPT_FOLLOWLOCATION,1L) );
  
  easy.perform();
  
  return 0;
}

void usage()
{
  std::cout << USAGE_MESSAGE << std::endl;

  std::cout << USAGE_DESCRIPTION << std::endl;
  
  std::cout << "Options:" << std::endl;
  std::cout << USAGE_OPTIONS << std::endl;

  std::cout << "Commands:" << std::endl;
  std::cout << USAGE_COMMANDS << std::endl;

  std::cout << USAGE_HELP_MESSAGE << std::endl;
}


