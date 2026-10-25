#include <Arduino.h>
#include <time.h>
#include "clock.h"

const char *ntp_server = "pool.ntp.org";
const long gmt_offset_sec = 3600;
const int daylight_offset_sec = 3600;

time_t current_time;

void init_time() {
  current_time = time(NULL);

  configTime(gmt_offset_sec, daylight_offset_sec, ntp_server);

  struct tm timeinfo;
  while(!getLocalTime(&timeinfo)) {
    delay(100);
  }
}

char *get_current_time() {
  static char time_str[255] = {0};

  struct tm timeinfo;
  if(getLocalTime(&timeinfo)) {      
    snprintf(time_str, sizeof(time_str), "%02d:%02d", timeinfo.tm_hour, timeinfo.tm_min);
    return time_str;
  }

  return NULL;
}