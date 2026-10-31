<script setup lang="ts">
import { PlayStatus } from '~/types/playStatus.ts'

defineProps<{ status: PlayStatus }>()
const colors = ["error","warning","success","info"]

const getStatusName = (status: PlayStatus) => {
  let name = PlayStatus[status]
  return name.replace(/([a-z])([A-Z])/g, '$1 $2')
}
</script>

<template>
  <UBadge
    :label="getStatusName(status)"
    :color="colors[status]"
    variant="subtle"
    class="font-bold rounded-xl"
  />
</template>
