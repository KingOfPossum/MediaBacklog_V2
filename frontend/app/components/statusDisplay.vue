<script setup lang="ts">
import { PlayStatus } from '~/types/playStatus.ts'

defineProps<{ status: PlayStatus }>()
const colors = ['error', 'warning', 'success', 'info']

const getStatusName = (status: PlayStatus) => {
  return PlayStatus[status].replace(/([a-z])([A-Z])/g, '$1 $2')
}
</script>

<template>
  <UBadge
    :color="colors[status]"
    variant="subtle"
    class="font-bold rounded-xl justify-center max-w-30"
  >
    <span class="text-center w-full">
      {{ getStatusName(status) }}
    </span>
  </UBadge>
</template>
