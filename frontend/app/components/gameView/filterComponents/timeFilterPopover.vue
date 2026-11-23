<script setup lang="ts">
import { useTimeFilter } from '~/composables/timeFilter.ts'

const { timeRange } = useTimeFilter()
</script>

<template>
  <div>
    <UPopover arrow>
      <UButton
        label="Time"
        class="hover:cursor-pointer"
      />

      <template #content>
        <div class="w-33">
          <div class="p-2">
            <USlider
              v-model="timeRange"
              class="mt-2"
              :min="0"
              :max="50"
              :step="5"
            />
          </div>
          <div class="ml-4 pb-2 flex flex-row gap-6 text-sm">
            <div class="size-5">
              <span>{{ timeRange[0] + 'h' }}</span>
            </div>
            <div>
              <span>-</span>
            </div>
            <div class="w-15">
              <span>{{ timeRange[1] === 50 ? '> 50h' : timeRange[1] + 'h' }}</span>
            </div>
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
