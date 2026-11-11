<script setup lang="ts">

</script>

<template>
  <UModal
    title="Add Game"
    :transition="true"
    :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }"
  >
    <UButton
      label="+"
      class="hover:cursor-pointer size-20"
      :ui="{ label: 'ml-6 text-lg' }"
    />

    <template #body>
      <ServerPlaceholder class="h-48 m-4" />
    </template>
  </UModal>
</template>
