<script setup lang="ts">
import UpdateGameModal from '~/components/gamePage/updateGameModal.vue'
import DeleteGameModal from '~/components/gamePage/deleteGameModal.vue'

const props = defineProps<{ game: Game }>()
</script>

<template>
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
    </div>
    <div
      v-if="game.status === PlayStatus.Completed"
      class="flex flex-col gap-4"
    >
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
    <div class="flex flex-col gap-2">
      <UpdateGameModal :game="game" />
      <DeleteGameModal :game-id="game.id" />
    </div>
  </div>
</template>
