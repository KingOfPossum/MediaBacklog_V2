<script setup lang="ts">
const props = defineProps<{ game: Game }>()

</script>

<template>
  <div class="max-w-full min-w-0">
    <h1 class="font-bold">
      Times to Beat:
    </h1>
    <div class="bg-blue-500 rounded-lg p-2">
      <div class="flex flex-row flex-wrap gap-2">
        <div class="bg-blue-950 rounded-lg p-2">
          <h2 class="text-xs truncate">
            Main Story
          </h2>
          <p class="text-center">
            {{ game.mainStoryLength > 0 ? game.mainStoryLength + 'h' : 'N/A' }}
          </p>
        </div>
        <div class="bg-blue-950 rounded-lg p-2">
          <h2 class="text-xs truncate">
            Main + Extra
          </h2>
          <p class="text-center">
            {{ game.mainExtraLength > 0 ? game.mainExtraLength + 'h' : 'N/A' }}
          </p>
        </div>
        <div class="bg-blue-950 rounded-lg p-2">
          <h3 class="text-xs truncate">
            Completionist
          </h3>
          <p class="text-center">
            {{ game.completionistLength > 0 ? game.completionistLength + 'h' : 'N/A' }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
