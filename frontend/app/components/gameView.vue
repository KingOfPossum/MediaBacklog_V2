<script setup lang="ts">
import { games } from '~/data/testGames.ts'
</script>

<template>
  <UContainer class="flex flex-col bg-accented rounded-lg p-5">
    <div class="grid grid-cols-4 gap-x-5 gap-y-5 overflow-y-auto flex-1 p-6">
      <div
        v-for="game in games"
        :key="game.id"
      >
        <GameCard :game="game" />
      </div>
    </div>
  </UContainer>
</template>
