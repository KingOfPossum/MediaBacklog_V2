<script setup lang="ts">
const props = defineProps<{ rating: number, selectable?: boolean }>()

const emit = defineEmits<{
  (e: 'update:rating', value: number): void
}>()

const hoverRating = ref<number | null>(null)

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

const showSelectedRating = (iconNum: number) => {
  const current = hoverRating.value ?? props.rating
  return getRatingIcon(current, iconNum)
}

const handleStarClick = (i: number) => {
  emit('update:rating', i * 5)
}
</script>

<template>
  <div>
    <div
      v-if="selectable"
      class="flex flex-row"
      @mouseleave="hoverRating=null"
    >
      <img
        v-for="i in 5"
        :key="i"
        :src="showSelectedRating(i)"
        alt=""
        class="hover:scale-120 transition-transform"
        @mouseenter="hoverRating = i * 5"
        @click="handleStarClick(i)"
      >
    </div>
    <div
      v-else
      class="flex flex-row"
    >
      <img
        v-for="i in 5"
        :key="i"
        :src="getRatingIcon(rating, i)"
      >
    </div>
  </div>
</template>
