<script setup lang="ts">
import ConsoleFilterPopover from '~/components/gameView/filterComponents/consoleFilterPopover.vue'
import StatusFilterPopover from '~/components/gameView/filterComponents/statusFilterPopover.vue'
import TimeFilterPopover from '~/components/gameView/filterComponents/timeFilterPopover.vue'
import RatingFilterPopover from '~/components/gameView/filterComponents/ratingFilterPopover.vue'

import DateSortButton from '~/components/gameView/sortComponents/dateSortButton.vue'
import RatingSortButton from '~/components/gameView/sortComponents/ratingSortButton.vue'
import TimeSortButton from '~/components/gameView/sortComponents/timeSortButton.vue'
</script>

<template>
  <div class="flex flex-row gap-28">
    <div class="mb-5 flex flex-row gap-5">
      <span class="pt-1">Filter: </span>
      <ConsoleFilterPopover />
      <StatusFilterPopover />
      <TimeFilterPopover />
      <RatingFilterPopover />
    </div>
    <div>
      <GameViewSearchBar />
    </div>
    <div class="mb-5 flex flex-row gap-5">
      <span class="pt-1">Sort: </span>
      <DateSortButton />
      <RatingSortButton />
      <TimeSortButton />
    </div>
  </div>
</template>
