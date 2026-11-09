<script setup lang="ts">
import { useRatingSort } from '~/composables/ratingSort'

const { sortRatingAscending } = useRatingSort()
const currentIcon = computed(() => {
  return sortRatingAscending.value ? 'cil:sort-ascending' : 'cil:sort-descending'
})

const toggleAscending = () => {
  sortRatingAscending.value = !sortRatingAscending.value
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
