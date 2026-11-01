<script setup lang="ts">
import MainSidebar from '~/components/mainSidebar.vue'
import MainHeader from '~/components/mainHeader.vue'
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden">
    <MainHeader />
    <div class="flex flex-1 p-6 overflow-hidden">
      <MainSidebar />
      <slot />
    </div>
  </div>
</template>
