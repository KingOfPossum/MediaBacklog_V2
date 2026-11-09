<script setup lang="ts">
import { useRatingSort } from '~/composables/ratingSort'

const { sortAscending } = useRatingSort()
const currentIcon = computed(() => {
  return sortAscending.value ? 'cil:sort-ascending' : 'cil:sort-descending'
})

const toggleAscending = () => {
  sortAscending.value = !sortAscending.value
}
</script>

<template>
  <div>
    <UButton
      label="Rating"
      :icon="currentIcon"
      @click="toggleAscending"
    />
  </div>
</template>
