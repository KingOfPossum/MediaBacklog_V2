#include <string.h>
#include <stdlib.h>
#include "utils.h"

char *clean_json(char *input) {
  if(input == NULL) {
    return strdup("");
  }

  int len = strlen(input);
  char *clean_str = calloc(len * 2 + 1, sizeof(char));
  int j = 0;

  for(int i = 0;i < len;i++) {
    if(input[i] == '\n') {
      clean_str[j++] = '\\';
      clean_str[j++] = 'n';
    }
    else if(input[i] == '"') {
      clean_str[j++] = '\\';
      clean_str[j++] = '"';
    }
    else if(input[i] == '\r') {
      clean_str[j++] = '\\';
      clean_str[j++] = 'r';
    }
    else if(input[i] == '\t') {
      clean_str[j++] = '\\';
      clean_str[j++] = 't';
    }
    else {
      clean_str[j++] = input[i];
    }
  }
  clean_str[j] = '\0';

  return clean_str;
}