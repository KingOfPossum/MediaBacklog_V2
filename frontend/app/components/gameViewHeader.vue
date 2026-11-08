<script setup lang="ts">
import { TimeFilterPopover } from '#components'
</script>

<template>
  <div class="flex flex-row gap-45">
    <div class="mb-5 flex flex-row gap-5">
      <span class="pt-1">Filter: </span>
      <ConsoleFilterPopover />
      <StatusFilterPopover />
      <TimeFilterPopover />
    </div>
    <div>
      <GameViewSearchBar />
    </div>
  </div>
</template>
