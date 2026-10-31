<script setup lang="ts">
import type { Game } from '~/types/game'
import PlayTimeDisplay from "~/components/playTimeDisplay.vue";

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
          id="game_cover"
          :src="game.img"
          width="50%"
          class="rounded-lg object-cover h-full w-auto"
          onerror="this.src='/images/placeholder.jpg'"
        >
      </div>
      <div class="flex-1">
        <div class="flex flex-col gap-5 text-sm italic">
          <div>
            <span>Consoles:</span>
          </div>
          <div class="flex flex-col gap-1">
            <span>Duration:</span>
            <PlayTimeDisplay :time="game.playTime"/>
          </div>
          <div class="flex flex-col gap-1">
            <span>Status:</span>
            <StatusDisplay :status="game.status" />
          </div>
        </div>
      </div>
    </div>
  </UCard>
</template>
