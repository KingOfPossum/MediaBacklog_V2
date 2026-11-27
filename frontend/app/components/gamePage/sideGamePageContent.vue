<script setup lang="ts">
import UpdateGameModal from '~/components/gamePage/updateGameModal.vue'
import DeleteGameModal from '~/components/gamePage/deleteGameModal.vue'
import TimesToBeatDisplay from '~/components/gamePage/timesToBeatDisplay.vue'
import GameUserInfo from '~/components/gamePage/gameUserInfo.vue'
import MetacritcScoreDisplay from "~/components/gamePage/metacritcScoreDisplay.vue";

const props = defineProps<{ game: Game }>()
</script>

<template>
  <div class="h-full flex flex-col gap-8 justify-between">
    <div class="flex flex-col gap-8">
      <div class="rounded-2xl flex h-72 items-center justify-center overflow-hidden p-2 mx-8">
        <img
          :src="game.img ?? '/placeholder.png'"
          :alt="game.name"
          class="h-full object-cover aspect-3/4 rounded-lg shadow-md"
          @error="() => { this.src='/images/placeholder.jpg' }"
        />
      </div>
      <div class="flex flex-col gap-7">
        <GameUserInfo :game="game" />
        <TimesToBeatDisplay :game="game" />
        <MetacritcScoreDisplay />
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <UpdateGameModal :game="game" />
      <DeleteGameModal :game-id="game.id" />
    </div>
  </div>
</template>
