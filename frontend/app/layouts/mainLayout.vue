<script setup lang="ts">
import MainSidebar from '~/components/mainSidebar.vue'
import MainHeader from '~/components/mainHeader.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <MainHeader />
    <div class="flex flex-1 p-6">
      <MainSidebar />
      <slot />
    </div>
  </div>
</template>
