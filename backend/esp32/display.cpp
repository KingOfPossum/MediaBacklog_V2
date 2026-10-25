#include <Arduino.h>
#include <string.h>
#include <LiquidCrystal_I2C.h>
#include "display.h"
#include "simple_queue.h"
#include "clock.h"

LiquidCrystal_I2C lcd(0x27,20,4);
TaskHandle_t display_thread;

int ready = 0;

queue *display_queue;

static void display_loop(void *params);
static void scrolling_text(char *txt);

void start_display() {
  display_queue = create_queue();

  lcd.init();
  lcd.backlight();
  
  
  // Create thread for display loop
  xTaskCreatePinnedToCore(
    display_loop,
    "Display Thread",
    10000,
    NULL,
    1,
    &display_thread,
    1
  );
}

static void display_loop(void *params) {
  while(1) {
    if(is_empty(display_queue) && ready) {
      char *time_str = get_current_time();
      if(time_str != NULL) {
        scrolling_text(time_str);
      }
    }
    else {
      print_queue(display_queue);

      char *txt = pop(display_queue);

      if(txt != NULL) {
        printf("Now showing text: %s\n",txt);

        scrolling_text(txt);
      }
    }

    delay(10);
  }
}

void is_ready() {
  ready = 1;
}

void clear_screen() {
  lcd.clear();
}

static void scrolling_text(char *txt) {
  int len = strlen(txt);
  
  if(len > 16) {
    int start_index = 0;

    while(start_index < len + 1) {
      lcd.setCursor(0,0);

      for(int i = 0;i < 16;i++) {
        int char_index = start_index + i;

        if(char_index < len) {
          lcd.write(txt[char_index]);
        }
        else {
          lcd.write(' ');
        }
      }

      start_index++;
      delay(200);
    }
  }
  else {
    lcd.setCursor(0,0);

    for(int i = 0;i < len;i++) {
      lcd.write(txt[i]);
    }
    delay(1000);
    lcd.clear();
  }
}

void queue_txt(char *txt) {
  append(display_queue, txt);
}