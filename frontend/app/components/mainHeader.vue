<script setup lang="ts">
import { searchBar } from '~/composables/searchBar.ts'

const { searchQuery } = searchBar()
</script>

<template>
  <UHeader>
    <template #default>
      <UInput
        v-model="searchQuery"
        icon="andrsrxn:search"
        placeholder="search..."
      />
    </template>
  </UHeader>
</template>
