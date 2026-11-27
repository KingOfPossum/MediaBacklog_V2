<script setup lang="ts">
import { useGames } from '~/data/games.ts'
import SideGamePageContent from '~/components/gamePage/sideGamePageContent.vue'
import MainGamePageContent from '~/components/gamePage/mainGamePageContent.vue'

const { games } = useGames()

const route = useRoute()
const id = computed(() => Number(String(route.query.id ?? '')))

const game = computed(() => {
  const val = games.value.find((g: Game) => g.id === id.value) ?? undefined
  if (val) {
    return val
  } else {
    navigateTo('/')
    return undefined
  }
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
      <div class="flex flex-row flex-1 divide-black divide-x-4 items-start justify-between">
        <MainGamePageContent
          :game="game"
          class="pr-5"
        />
        <SideGamePageContent
          :game="game"
          class="pl-5"
        />
      </div>
    </UContainer>
  </div>
</template>
