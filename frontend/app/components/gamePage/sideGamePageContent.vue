<script setup lang="ts">
import UpdateGameModal from '~/components/gamePage/updateGameModal.vue'
import DeleteGameModal from '~/components/gamePage/deleteGameModal.vue'
import TimesToBeatDisplay from '~/components/gamePage/timesToBeatDisplay.vue'
import GameUserInfo from '~/components/gamePage/gameUserInfo.vue'

const props = defineProps<{ game: Game }>()
</script>

<template>
  <div class="h-full flex flex-col gap-8 justify-between">
    <div>
      <div class="flex flex-col h-70 items-center">
        <img
          :src="game.img ?? '/placeholder.png'"
          class="w-auto h-full rounded-lg mt-5"
          onerror="this.src='/images/placeholder.jpg'"
        />
      </div>
    </div>
    <div class="mt-5 flex flex-col gap-5">
      <GameUserInfo :game="game" />
      <TimesToBeatDisplay :game="game" />
    </div>
    <div class="flex flex-col gap-2">
      <UpdateGameModal :game="game" />
      <DeleteGameModal :game-id="game.id" />
    </div>
  </div>
</template>
