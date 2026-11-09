<script setup lang="ts">
import { TimeFilterPopover, RatingFilterPopover } from '#components'
</script>

<template>
  <div class="flex flex-row gap-33">
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
      <RatingSortButton />
    </div>
  </div>
</template>
