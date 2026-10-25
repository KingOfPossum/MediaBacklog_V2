#include <stdlib.h>
#include <stdio.h>
#include "simple_queue.h"

queue *create_queue() {
  queue *q = (queue *)malloc(sizeof(queue));
  
  if(q != NULL) {
    q->head = NULL;
    q->tail = NULL;
  }
  
  return q;
}

void append(queue *q, char *new_elem) {
  node *new_node = (node *)malloc(sizeof(node));
  new_node->elem = new_elem;
  new_node->next = NULL;

  if(q->tail == NULL) {
    q->head = new_node;
    q->tail = new_node;
  }
  else {
    q->tail->next = new_node;
    q->tail = new_node;
  }
}

char *pop(queue *q) {
  if(q->head == NULL) {
    return NULL;
  }

  node *old_head = q->head;
  char *elem = old_head->elem;

  q->head = old_head->next;

  if(q->head == NULL) {
    q->tail = NULL;
  }

  free(old_head);
  return elem;
}

int is_empty(queue *q) {
  if(q->head) {
    return 0;
  }
  return 1;
}

void free_queue(queue *q) {
  node *current = q->head;
  
  while(current != NULL) {
    node *next = current->next;
    free(current);
    current = next;
  }
  
  free(q);
}

void print_queue(queue *q) {
  node *tmp = q->head;

  while(tmp) {
    printf("%s",tmp->elem);
    if(tmp->next) {
      printf(" -> ");
    }
    tmp = tmp->next;
  }

  printf("\n");
}