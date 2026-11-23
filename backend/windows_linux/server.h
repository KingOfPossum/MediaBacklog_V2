#ifndef SERVER_H
#define SERVER_H

#ifdef __cplusplus
extern "C" {
#endif

char *get_new_game_func(char *json);
char *remove_game_func(char *json);

char *get_game_func(char *request);
char *get_library_func(char *request);
char *clear_database_func(char *request);
char *get_igdb_game_func(char *request);

void server();

#ifdef __cplusplus
}
#endif

#endif