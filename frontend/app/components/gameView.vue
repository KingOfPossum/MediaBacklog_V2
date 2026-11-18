<script setup lang="ts">
import { useGamesFilter } from '~/composables/gamesFilter.ts'
import { useGames } from '~/data/games.ts'

const { filteredGames } = useGamesFilter()
const { loadGames } = useGames()

onMounted(async () => {
  await loadGames()

  setInterval(async () => {
    await loadGames()
  }, 10000)
})
</script>

<template>
  <UContainer class="flex flex-col bg-accented rounded-lg p-5 relative">
    <GameViewHeader />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5 auto-rows-max overflow-y-auto scrollbar-gutter-both scrollbar-thumb-gray-400 flex-1 p-6">
      <div
        v-for="game in filteredGames"
        :key="game.id"
      >
        <GameCard :game="game" />
      </div>
    </div>
    <div class="absolute bottom-10 right-10">
      <AddGameModal />
    </div>
  </UContainer>
</template>
