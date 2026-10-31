<script setup lang="ts">
defineProps<{ time: number }>()
</script>

<template>
  <UBadge
    :label="`${time} hours`"
    variant="subtle"
    icon="akar-icons:clock"
    class="rounded-xl font-bold"
  />
</template>
