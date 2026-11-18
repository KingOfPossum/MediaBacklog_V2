<script setup lang="ts">
defineProps<{ time: number }>()
</script>

<template>
  <UBadge
    variant="subtle"
    :color="time > 0 ? 'primary' : 'error'"
    class="relative rounded-xl font-bold max-w-30 justify-center"
  >
    <UIcon
      name="akar-icons:clock"
      class="absolute left-2 w-4 h-4"
    />
    <span class="text-center truncate w-full px-5">
      {{ time > 0 ? `${time} hours` : 'N/A' }}
    </span>
  </UBadge>
</template>
