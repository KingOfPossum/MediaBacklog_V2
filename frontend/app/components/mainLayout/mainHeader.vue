<script setup lang="ts">
import { searchBar } from '~/composables/searchBar.ts'

const { searchQuery } = searchBar()
</script>

<template>
  <UHeader
    :ui="{
      container: 'max-w-none px-4 sm:px-6'
    }"
  >
    <template #title>
      <div class="flex items-center gap-3">
        <img src="/ProfilePicture.svg" class="w-20 h-20" />
        <span>Media Backlog</span>
      </div>
    </template>

    <template #default>
      <UInput
        v-model="searchQuery"
        icon="andrsrxn:search"
        placeholder="search..."
      />
    </template>
  </UHeader>
</template>
