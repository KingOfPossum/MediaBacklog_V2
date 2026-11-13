<script setup lang="ts">
import { useGamesFilter } from '~/composables/gamesFilter.ts'

const { filteredGames } = useGamesFilter()
</script>

<template>
  <UContainer class="flex flex-col bg-accented rounded-lg p-5">
    <GameViewHeader />
    <div class="grid grid-cols-4 gap-x-5 gap-y-5 auto-rows-max overflow-y-auto scrollbar-gutter-both scrollbar-thumb-gray-400 flex-1 p-6">
      <div
        v-for="game in filteredGames"
        :key="game.id"
      >
        <GameCard :game="game" />
      </div>
    </div>
    <div class="absolute top-185 right-15">
      <AddGameModal />
    </div>
  </UContainer>
</template>
