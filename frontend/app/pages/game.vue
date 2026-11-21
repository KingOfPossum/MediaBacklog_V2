<script setup lang="ts">
import { useGames } from '~/data/games.ts'

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
      @click="navigateTo('/')"
      class="absolute"
    />
    <UContainer
      class="bg-accented rounded-lg p-5 flex flex-col gap-5 h-full w-full"
    >
      <div class="flex flex-row flex-1 items-start justify-between gap-5">
        <div class="flex flex-col gap-5 flex-1">
          <h1 class="underline font-bold text-2xl">
            {{ game.name ?? ' ' }}
          </h1>
          <UContainer class="bg-blue-950 rounded-lg outline outline-black flex flex-col gap-2 p-2">
            <h1 class="font-bold uppercase text-center">
              Description
            </h1>
            <p>{{ game.summary }}</p>
          </UContainer>
          <div>
            <h1 class="font-bold">
              Available on:
            </h1>
            <div>
              <ConsolesDisplay :consoles="game.platforms" />
            </div>
            <div>
              <h1 class="font-bold">
                Genres:
              </h1>
              <div class="flex flex-row gap-2">
                <div v-for="genre in game.genres" class="outline rounded-lg p-1">
                  {{ genre }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-8">
          <div class="h-70">
            <img
              :src="game.img ?? '/placeholder.png'"
              class="w-auto h-full rounded-lg mt-5 items-start"
              onerror="this.src='/images/placeholder.jpg'"
            />
          </div>
          <div>
            <div>
              <StatusDisplay :status="game.status" />
            </div>
            <UButton label="Change Status" @click="console.log(game)"/>
          </div>
          <div v-if="game.status === PlayStatus.Completed" class="flex flex-col gap-4">
            <div>
              <h1>
                Added on:
              </h1>
              <p>
                {{ game.date }}
              </p>
            </div>
            <div>
              <h1 class="items-start">
                Your Rating:
              </h1>
              <RatingDisplay :rating="game.rating" />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
