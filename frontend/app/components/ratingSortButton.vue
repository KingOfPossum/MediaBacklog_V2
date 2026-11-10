<script setup lang="ts">
import { useRatingSort } from '~/composables/ratingSort'
import { useGamesFilter } from '~/composables/gamesFilter'

const { filterType } = useGamesFilter()
const { sortRatingAscending } = useRatingSort()

const currentIcon = computed(() => {
  return sortRatingAscending.value ? 'cil:sort-ascending' : 'cil:sort-descending'
})

const toggleAscending = () => {
  if (filterType.value === 'rating') {
    sortRatingAscending.value = !sortRatingAscending.value
  }
  filterType.value = 'rating'
}
</script>

<template>
  <div>
    <UButton
      label="Rating"
      :icon="currentIcon"
      :color="filterType === 'rating' ? 'primary' : 'secondary'"
      @click="toggleAscending"
    />
  </div>
</template>
