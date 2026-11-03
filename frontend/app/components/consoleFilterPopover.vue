<script setup lang="ts">
import { useConsoleFilter } from '~/composables/consoleFilter'

const { consoles, activatedConsoles, checkAllConsoles, uncheckAllConsoles } = useConsoleFilter()
</script>

<template>
  <div>
    <UPopover arrow>
      <UButton label="Console" />

      <template #content>
        <div class="pl-2 pt-2 pr-5 pb-2">
          <UCheckboxGroup
            v-model="activatedConsoles"
            :items="consoles"
          />
          <div class="flex flex-row gap-3 pt-2">
            <UButton
              label="All"
              :onclick="checkAllConsoles"
            />
            <UButton
              label="None"
              :onclick="uncheckAllConsoles"
            />
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
