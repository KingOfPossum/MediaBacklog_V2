<script setup lang="ts">
import { useConsoleFilter } from '~/composables/consoleFilter'

const { consoles, activatedConsoles } = useConsoleFilter()
</script>

<template>
  <FilterPopover
    v-model:activated-items="activatedConsoles"
    label="Console"
    :items="consoles"
  />
</template>
