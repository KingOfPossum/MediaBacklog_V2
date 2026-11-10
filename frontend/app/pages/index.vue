<script setup lang="ts">
import { useGames } from '~/data/games.ts'

const { games, loadGames } = useGames()

definePageMeta({
  layout: 'main-layout'
})

await loadGames()
console.log('GAMES: ', games.value)
</script>

<template>
  <GameView />
</template>
