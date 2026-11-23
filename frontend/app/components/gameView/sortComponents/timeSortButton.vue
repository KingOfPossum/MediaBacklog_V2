<script setup lang="ts">
import { useTimeSort } from '~/composables/timeSort.ts'
import { useGamesFilter } from "~/composables/gamesFilter.ts";

const { filterType } = useGamesFilter()
const { sortTimeAscending } = useTimeSort()

const currentIcon = computed(() => {
  return sortTimeAscending.value ? 'cil:sort-ascending' : 'cil:sort-descending'
})

const toggleAscending = () => {
  if (filterType.value === 'time') {
    sortTimeAscending.value = !sortTimeAscending.value
  }
  filterType.value = 'time'
}
</script>

<template>
  <div>
    <UButton
      label="Duration"
      :icon="currentIcon"
      :color="filterType === 'time' ? 'primary' : 'secondary'"
      class="hover:cursor-pointer"
      @click="toggleAscending"
    />
  </div>
</template>
