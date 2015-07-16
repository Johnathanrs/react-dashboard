#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <curl/curl.h>
#include <curl/easy.h>
#include <curl/types.h>
 
 
size_t static write_callback_func (void *buffer, size_t size, size_t nmemb, void *userp);
 
 
int main (int argc, char*argv[], char*envp[])
{
  CURL *curl;
  CURLcode res;
  char *response;
 
 
  char url[255];
 
 
  if (argc > 1) {
    strcpy(url, argv[1]);
  }
  curl = curl_easy_init();
  if (curl) {
    curl_easy_setopt(curl, CURLOPT_NOPROGRESS, 0);
    curl_easy_setopt(curl, CURLOPT_URL, url);
    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_callback_func);
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);
 
 
    res = curl_easy_perform(curl);
    if (res != CURLE_OK) {
      fprintf(stderr, "curl_easy_perform() failed: %s\n", curl_easy_strerror(res));
    }  
    curl_easy_cleanup(curl);
  }
 
 
  printf("%s", response);
 
 
  printf("\n");
 
 
  return 0;
}