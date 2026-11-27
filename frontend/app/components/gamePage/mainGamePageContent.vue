<script setup lang="ts">
const props = defineProps<{ game: Game }>()
</script>

<template>
  <div class="h-full flex flex-col gap-5 flex-1">
    <h1 class="underline font-bold text-2xl">
      {{ game.name }}
    </h1>
    <UContainer class="bg-blue-950 rounded-lg outline outline-black flex flex-col gap-2 p-2">
      <h1 class="font-bold uppercase text-center">
        Description
      </h1>
      <p>{{ game.summary }}</p>
    </UContainer>
    <div class="flex flex-row justify-between">
      <div>
        <h1 class="font-bold">
          Available on:
        </h1>
        <div>
          <ConsolesDisplay :consoles="game.platforms" />
        </div>
      </div>
      <div>
        <h1 class="font-bold">
          Genres:
        </h1>
        <div class="flex flex-row gap-2">
          <div
            v-for="genre in game.genres"
            class="outline rounded-lg p-1"
          >
            {{ genre }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
