#ifndef SIMPLE_QUEUE_H
#define SIMPLE_QUEUE_H

typedef struct node {
  char *elem;
  struct node *next;
} node;

typedef struct queue {
  node *head;
  node *tail;
} queue;

queue *create_queue();
void append(queue *q, char *new_elem);
char *pop(queue *q);
int is_empty(queue *q);

void print_queue(queue *q);
void free_queue(queue *q);

#endif