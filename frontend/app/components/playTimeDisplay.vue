<script setup lang="ts">
defineProps<{ time: number }>()
</script>

<template>
  <UBadge
    :label="time > 0 ? `${time} hours` : 'No information'"
    :color="time > 0 ? 'primary' : 'error'"
    variant="subtle"
    icon="akar-icons:clock"
    class="rounded-xl font-bold"
  />
</template>
