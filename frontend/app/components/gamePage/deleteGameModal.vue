<script setup lang="ts">
import { useGames } from '~/data/games.ts'

const { games } = useGames()

const props = defineProps<{ gameId: number }>()
const toast = useToast()

const open = ref(false)

const game = games.value.find((g: Game) => g.id === props.gameId)

const removeGame = async () => {
  const result = await makeHTTPPOSTRequest('removeGame', { library_id: props.gameId })
  if (result['msg'] === 'Game deleted!') {
    navigateTo('/')
    toast.add({
      title: 'Success!',
      description: `Successfully removed ${game.name}!`,
      color: 'primary',
      duration: 3000
    })
  } else {
    open.value = false
    toast.add({
      title: 'Error',
      description: 'Something went wrong!',
      icon: 'bx:error',
      color: 'red',
      duration: 3000
    })
  }
}
</script>

<template>
  <UModal :open="open">
    <UButton
      label="Delete Game"
      color="error"
      icon="ep:delete-filled"
      class="rounded-full"
      @click="open=true"
    />

    <template #content>
      <div class="flex flex-col m-5">
        <div class="text-center">
          <h1>
            Do you really want to delete this game?
          </h1>
          <span class="font-bold">{{ game.name ?? 'N/A' }}</span>
        </div>
        <div class="flex flex-row justify-around ">
          <UButton
            icon="at-icons:checkmark"
            color="primary"
            @click="removeGame"
          />
          <UButton
            icon="akar-icons:cross"
            color="error"
            @click="open=false"
          />
        </div>
      </div>
    </template>
  </UModal>
</template>

<style scoped>

</style>
