<script setup lang="ts">
import { gamesFilter } from '~/composables/gamesFilter.ts'

const { filteredGames } = gamesFilter()
</script>

<template>
  <UContainer class="flex flex-col bg-accented rounded-lg p-5">
    <GameViewHeader />
    <div class="grid grid-cols-4 gap-x-5 gap-y-5 auto-rows-max overflow-y-auto flex-1 p-6">
      <div
        v-for="game in filteredGames"
        :key="game.id"
      >
        <GameCard :game="game" />
      </div>
    </div>
  </UContainer>
</template>
