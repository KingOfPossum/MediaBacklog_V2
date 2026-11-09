<script setup lang="ts">
import { useTimeSort } from '~/composables/timeSort.ts'

const { sortTimeAscending } = useTimeSort()
const currentIcon = computed(() => {
  return sortTimeAscending.value ? 'cil:sort-ascending' : 'cil:sort-descending'
})

const toggleAscending = () => {
  sortTimeAscending.value = !sortTimeAscending.value
}
</script>

<template>
  <div>
    <UButton
      label="Duration"
      :icon="currentIcon"
      @click="toggleAscending"
    />
  </div>
</template>
