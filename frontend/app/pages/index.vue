<script setup lang="ts">
import { useGames } from '~/data/games.ts'

const { games, loadGames } = useGames()

definePageMeta({
  layout: 'main-layout'
})

const repeatLoadingGames = () => {
  onMounted(async () => {
    console.log('Trying to load games...')
    await loadGames()

    setInterval(async () => {
      console.log('Trying to load games...')
      await loadGames()
      console.log('GAMES: ', games.value)
    }, 30000)
  })
}

repeatLoadingGames()
</script>

<template>
  <GameView />
</template>
