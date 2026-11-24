<script setup lang="ts">
import UpdateGameModal from '~/components/gamePage/updateGameModal.vue'
import DeleteGameModal from '~/components/gamePage/deleteGameModal.vue'

const props = defineProps<{ game: Game }>()
</script>

<template>
  <div class="h-full flex flex-col gap-8 justify-between">
    <div>
      <div class="h-70">
        <img
          :src="game.img ?? '/placeholder.png'"
          class="w-auto h-full rounded-lg mt-5 items-start"
          onerror="this.src='/images/placeholder.jpg'"
        />
      </div>
      <div class="mt-5 flex flex-col gap-5">
        <div class="flex flex-col items-center">
          <StatusDisplay :status="game.status" />
        </div>
        <div class="text-center">
          <h1>
            Added on:
          </h1>
          <p>
            {{ game.date }}
          </p>
        </div>
        <div
          v-if="game.status === PlayStatus.Completed"
          class="flex flex-col gap-4"
        >
          <div class="flex flex-col items-center">
            <h1 class="items-start">
              Your Rating:
            </h1>
            <RatingDisplay :rating="game.rating" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <UpdateGameModal :game="game" />
      <DeleteGameModal :game-id="game.id" />
    </div>
  </div>
</template>
