<script setup lang="ts">
import FilterPopover from '~/components/gameView/filterComponents/filterPopover.vue'

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
