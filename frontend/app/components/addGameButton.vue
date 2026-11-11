<script setup lang="ts">
import { useConsoleFilter } from '~/composables/consoleFilter.ts'
import { PlayStatus, getStatusNames } from '~/types/playStatus.ts'

const { consoles } = useConsoleFilter()

const platformValue = ref('')
const statusValue = ref('')
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
      <UForm>
        <div class="flex flex-row gap-5">
          <div class="flex flex-col gap-3 pl-5">
            <UFormField label="Name">
              <UInput
                class="w-50"
                placeholder="Enter name"
              />
            </UFormField>

            <UFormField label="Platform">
              <USelectMenu
                v-model="platformValue"
                :items="consoles"
                placeholder="Select Platform"
                class="w-50"
              />
            </UFormField>

            <UFormField label="Status">
              <USelectMenu
                v-model="statusValue"
                :items="getStatusNames()"
                placeholder="Select Status"
                class="w-50"
              />
            </UFormField>

            <UFormField label="Rating">
              <RatingDisplay
                :rating="20"
                :selectable="true"
              />
            </UFormField>
          </div>

          <div class="pl-5 pr-5 pt-2 pb-2">
            <img
              src="/images/placeholder.jpg"
              width="50%"
              class="rounded-lg object-cover h-full w-auto"
            />
          </div>
        </div>

        <div class="absolute top-75 right-7">
          <UButton
            label="Add"
            color="secondary"
            class="hover:cursor-pointer"
          />
        </div>
      </UForm>
    </template>
  </UModal>
</template>
