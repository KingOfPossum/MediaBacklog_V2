#include <Arduino.h>
#include <LittleFS.h>

#include <stdlib.h>

#include <esp32_wifi.h>
#include "databaseManager.h"
#include "server.h"
#include "display.h"
#include "clock.h"

void setup() {
  Serial.begin(115200);
  
  start_display();

  Serial.printf("----------------WiFi--------------\n");

  queue_txt("Connecting WiFi...");
  connect_wifi();
  queue_txt("WiFi connected!");

  Serial.printf("----------------------------------\n\n");

  init_time();
  queue_txt("Initialize Backend...");

  if(!LittleFS.begin(true)) {
    Serial.println("Error while mounting filesystem");
    return;
  }

  Serial.printf("--------------Database------------\n");

  init_database("/littlefs/database.db");

  Serial.printf("----------------------------------\n\n");

  is_ready();

  Serial.printf("--------------Server--------------\n");

  server();

  Serial.printf("----------------------------------\n\n");

  close_database();
}

void loop() {
  delay(10);
}