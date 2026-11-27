<script setup lang="ts">
const props = defineProps<{ game: Game }>()
</script>

<template>
  <div>
    <h2>User:</h2>
    <div class="outline  rounded-lg p-2">
      <div class="flex flex-row gap-4">
        <h2>Status:</h2>
        <StatusDisplay :status="game.status" />
      </div>
      <div class="flex flex-row gap-5">
        <h1>
          Rating:
        </h1>
        <RatingDisplay
          v-if="game.status === PlayStatus.Completed"
          :rating="game.rating"
        />
        <p v-else>
          N/A
        </p>
      </div>
      <div class="flex flex-row gap-5">
        <h1>
          Added:
        </h1>
        <p>
          {{ game.date }}
        </p>
      </div>
    </div>
  </div>
</template>
