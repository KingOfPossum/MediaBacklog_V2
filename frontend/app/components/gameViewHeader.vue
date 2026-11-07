<script setup lang="ts">
import { TimeFilterPopover } from '#components'
</script>

<template>
  <div class="flex flex-row gap-50">
    <div class="mb-5 flex flex-row gap-5">
      <ConsoleFilterPopover />
      <StatusFilterPopover />
      <TimeFilterPopover />
    </div>
    <div>
      <GameViewSearchBar />
    </div>
  </div>
</template>
