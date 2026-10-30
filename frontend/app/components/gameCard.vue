<script setup lang="ts">
import type { Game } from '~/types/game'

defineProps<{ game: Game }>()
</script>

<template>
  <UCard
    :title="game.name"
    class="hover:scale-110 transition-transform duration-400 h-full"
  >
    <div class="flex flex-row gap-2">
      <div class="h-40 flex-1">
        <img
          :src="game.img"
          :alt="game.name"
          width="50%"
          class="rounded-lg object-cover h-full w-auto"
        >
      </div>
      <div class="flex-1">
        <div>
          <div class="mb-10 text-sm">
            <span>Consoles:</span>
          </div>
          <div class="text-sm">
            <span>Time to finish:</span>
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
