<script setup lang="ts">
defineProps<{ consoles: object }>()

const normalizeConsole = (console: string) => {
  return console.replace(' ', '')
}
</script>

<template>
  <div class="flex flex-row gap-1">
    <div
      v-for="console in consoles"
      class="size-8"
    >
      <img :src="`/consoleIcons/${normalizeConsole(console)}.svg`">
    </div>
  </div>
</template>
