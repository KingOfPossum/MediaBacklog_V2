#include <stdio.h>
#include <string.h>
#include "api.h"
#include "server.h"
#include "igdb_wrapper.h"
#include "databaseManager.h"

static void bind_requests();

void server() {
  bind_requests();
  
  #if defined(ESP32) || defined(ESP_PLATFORM)
    start_server(80);
  #else
    start_server(1234);
  #endif
}

static void bind_requests() {
  bind_get_request("/getGame", get_game_func);
  bind_get_request("/getLibrary", get_library_func);
  bind_get_request("/clearDatabase", clear_database_func);
  bind_get_request("/IGDBGame", get_igdb_game_func);

  bind_post_request("/newGame", get_new_game_func);
  bind_post_request("/removeGame", remove_game_func);
}

char *get_new_game_func(char *json) {
  printf("-----------Adding new Game--------\n");
  
  char game_name[128];
  char platform[128];
  char status[128];
  int rating;
  char date[128];

  sscanf(json,"{\"game\":\"%[^\"]\",\"platform\":\"%[^\"]\",\"status\":\"%[^\"]\",\"rating\":%d,\"date\":\"%[^\"]\"}",game_name,platform,status,&rating,date);
  
  printf("Searching for game: %s (%s) (Added on %s)...\n",game_name,platform,date);
  
  IGDBEntry new_game = getGame(game_name,platform);
 
  APILibraryGameEntry library_game = add_game_to_library(game_name, platform, status, rating, date, new_game);
  print_APILibraryGameEntry(library_game);  
  
  char *returned_json = APILibraryGameEntry_to_json(library_game);
  
  free_entry(&new_game);
  free_APILibraryGameEntry(&library_game);
  
  printf("----------------------------------\n\n");
  
  return returned_json;
}
  
char *remove_game_func(char *json) {
  printf("--------Removing Game-------------\n");

  int library_id;

  sscanf(json, "{\"library_id\":%d}", &library_id);

  printf("Removing Game (ID:%d) ...\n", library_id);

  remove_game_from_library(library_id);

  printf("----------------------------------\n\n");

  return strdup("{\"msg\":\"Game deleted!\"}");  
}

char *get_game_func(char *request) {
  char *game_name = get_query_param(request, "name");
  char *game_platform = get_query_param(request, "platform");
  printf("Lookup for game %s (%s) in database...\n",game_name, game_platform);
  
  APILibraryGameEntry game = get_game_from_library_by_name(game_name);
  
  char *json = APILibraryGameEntry_to_json(game);
  
  free_APILibraryGameEntry(&game);
  
  printf("%s\n",json);
  
  return json;
}
  
char *get_library_func(char *request) {
  APILibrary library = get_library();
  
  char *json = APILibrary_to_json(library);
  
  free_APILibrary(&library);
  
  return json;  
}

char *clear_database_func(char *request) {
  clear_database();

  return strdup("{\"msg\": \"Database cleared\"}");
}

char *get_igdb_game_func(char *request) {
  char *game_name = get_query_param(request, "name");
  char *platform = get_query_param(request,"platform");

  IGDBEntry igdb_game = getGame(game_name, platform);
  
  char *json = IGDBEntry_to_json(igdb_game);

  free_entry(&igdb_game);

  return json;
}