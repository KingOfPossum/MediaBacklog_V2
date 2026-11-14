<script setup lang="ts">
import { useGamesFilter } from '~/composables/gamesFilter.ts'
import { useDateSort } from '~/composables/dateSort.ts'

const { filterType } = useGamesFilter()
const { sortDateAscending } = useDateSort()

const currentIcon = computed(() => {
  return sortDateAscending.value ? 'cil:sort-ascending' : 'cil:sort-descending'
})

const toggleAscending = () => {
  if (filterType.value === 'date') {
    sortDateAscending.value = !sortDateAscending.value
  }
  filterType.value = 'date'
}
</script>

<template>
  <div>
    <UButton
      label="Date"
      :icon="currentIcon"
      :color="filterType === 'date' ? 'primary' : 'secondary'"
      class="hover:cursor-pointer"
      @click="toggleAscending"
    />
  </div>
</template>
