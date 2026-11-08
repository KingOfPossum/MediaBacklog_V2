<script setup lang="ts">
import type { Game } from '~/types/game'
import PlayTimeDisplay from '~/components/playTimeDisplay.vue'
import ConsolesDisplay from '~/components/consolesDisplay.vue'
import RatingDisplay from "~/components/ratingDisplay.vue";

defineProps<{ game: Game }>()
</script>

<template>
  <UCard
    :title="game.name"
    class="hover:scale-110 hover:cursor-pointer transition-transform duration-400 delay-50 h-full"
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
        <div class="ml-3  ">
          <RatingDisplay :rating="game.rating" />
        </div>
      </div>
      <div class="flex-1">
        <div class="flex flex-col gap-1 text-sm italic">
          <div class="flex flex-col gap-1">
            <span>Consoles:</span>
            <ConsolesDisplay :consoles="game.consoles" />
          </div>
          <div class="flex flex-col gap-1">
            <span>Duration:</span>
            <PlayTimeDisplay :time="game.playTime" />
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
