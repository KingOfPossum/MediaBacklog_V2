<script setup lang="ts">

</script>

<template>
  <div>
    <UPopover>
      <UButton label="Rating" />

      <template #content>
        <div class="w-46 p-1">
          <div class="flex flex-row items-center gap-2">
            <RatingDisplay :rating="20" />
            <span>-</span>
            <RatingDisplay :rating="25" />
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
