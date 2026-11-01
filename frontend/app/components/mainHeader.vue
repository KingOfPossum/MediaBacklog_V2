<script setup lang="ts">
import { searchBar } from '~/composables/searchBar.ts'

const { searchQuery } = searchBar()
</script>

<template>
  <UHeader>
    <template #default>
      <UInput
        v-model="searchQuery"
        icon="akar-icons:search"
        placeholder="search..."
      />
    </template>
  </UHeader>
</template>
