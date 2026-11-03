<script setup lang="ts">
import { PlayStatus } from '~/types/playStatus.ts'

defineProps<{ status: PlayStatus }>()
const colors = ['error', 'warning', 'success', 'info']

const getPaddingForStatus = (status: PlayStatus) => {
  switch (status) {
    case PlayStatus.Completed:
      return 'pl-5'
    case PlayStatus.Started:
      return 'pl-8  '
    case PlayStatus.NotPlayed:
      return 'pl-5'
    case PlayStatus.Aborted:
      return 'pl-7'
    default:
      return 'pl-5'
  }
}

const getStatusName = (status: PlayStatus) => {
  return PlayStatus[status].replace(/([a-z])([A-Z])/g, '$1 $2')
}
</script>

<template>
  <UBadge
    :label="getStatusName(status)"
    :color="colors[status]"
    variant="subtle"
    class="font-bold rounded-xl"
    :class="getPaddingForStatus(status)"
  />
</template>
