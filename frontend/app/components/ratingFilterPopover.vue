<script setup lang="ts">
import { useRatingFilter } from '~/composables/ratingFilter.ts'

const { minRating, maxRating } = useRatingFilter()
</script>

<template>
  <div>
    <UPopover>
      <UButton
        label="Rating"
        class="hover:cursor-pointer"
      />

      <template #content>
        <div class="w-46 p-1">
          <div class="flex flex-row items-center gap-2">
            <RatingDisplay
              v-model:rating="minRating"
              :selectable="true"
            />
            <span>-</span>
            <RatingDisplay
              v-model:rating="maxRating"
              :selectable="true"
            />
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
