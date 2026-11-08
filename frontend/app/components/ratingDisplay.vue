<script setup lang="ts">
defineProps<{ rating: number }>()

const getRatingIcon = (gameRating: number, iconNum: number) => {
  const lowerBounds = (iconNum - 1) * 5
  const upperBounds = iconNum * 5

  if (gameRating - 1 < lowerBounds) {
    return '/ratingIcons/star_empty.svg'
  }

  if (gameRating - 1 >= upperBounds) {
    return '/ratingIcons/star_full.svg'
  }

  switch ((gameRating - 1) % 5) {
    case 1:
      return '/ratingIcons/star_one_quarter.svg'
    case 2:
      return '/ratingIcons/star_half.svg'
    case 3:
      return '/ratingIcons/star_three_quarter.svg'
    case 4:
      return '/ratingIcons/star_full.svg'
    default:
      return '/ratingIcons/star_empty.svg'
  }
}
</script>

<template>
  <div class="flex flex-row">
    <img
      v-for="i in 5"
      :key="i"
      :src="getRatingIcon(rating, i)"
    />
  </div>
</template>
