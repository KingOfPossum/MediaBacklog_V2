<script setup lang="ts">
import { useGames } from '~/data/games.ts'
import SideGamePageContent from '~/components/gamePage/sideGamePageContent.vue'
import MainGamePageContent from '~/components/gamePage/mainGamePageContent.vue'

definePageMeta({
  layout: 'main-layout'
})

const { games } = useGames()

const route = useRoute()
const id = computed(() => Number(String(route.query.id ?? '')))

const game = computed(() => {
  return games.value.find((g: Game) => g.id === id.value) ?? undefined
})
</script>

<template>
  <div class="h-full w-full relative">
    <UButton
      icon="i-lucide-arrow-left"
      class="absolute"
      @click="navigateTo('/')"
    />
    <UContainer
      class="bg-accented rounded-lg p-5 flex flex-col gap-5 h-full w-full"
    >
      <div class="flex flex-row flex-1 items-start justify-between gap-5">
        <MainGamePageContent :game="game" />
        <SideGamePageContent :game="game" />
      </div>
    </UContainer>
  </div>
</template>
