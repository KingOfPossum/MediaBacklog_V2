<script setup lang="ts">
import {getStatusNames, PlayStatus} from '~/types/playStatus.ts'

const props = defineProps<{ game: Game }>()

const open = ref(false)

const statusValue = ref(PlayStatus[props.game.status])
const ratingValue = ref(props.game.rating)

const onSubmit = () => {
  const data = {
    id: props.game.id,
    status: statusValue.value,
    rating: statusValue.value === PlayStatus[PlayStatus.Completed] ? ratingValue.value : 0
  }
  makeHTTPPOSTRequest('/updateGame', data)
  open.value = false
}

console.log(getStatusNames())
</script>

<template>
  <UModal
    v-model="open"
    title="Edit Game"
    :transition="true"
    :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full'
    }"
  >
    <UButton
      label="Edit entry"
      icon="akar-icons:edit"
    />

    <template #body>
      <UForm
        @submit="onSubmit"
      >
        <div class="flex flex-row gap-5">
          <div class="flex flex-col gap-3 pl-5">
            <UFormField
              label="Name"
            >
              <UInput
                :default-value="props.game.name"
                class="w-50"
                disabled
              />
            </UFormField>

            <UFormField
              label="Platform"
            >
              <USelectMenu
                :default-value="props.game.consoles[0]"
                class="w-50"
                disabled
              />
            </UFormField>

            <UFormField
              label="Status"
            >
              <USelectMenu
                v-model="statusValue"
                :items="getStatusNames()"
                class="w-50"
              />
            </UFormField>

            <div class="h-8">
              <UFormField
                v-if="statusValue === PlayStatus[PlayStatus.Completed]"
                label="Rating"
              >
                <RatingDisplay
                  v-model:rating="ratingValue"
                  :selectable="true"
                />
              </UFormField>
            </div>

            <div class="absolute top-75 right-7">
              <UButton
                type="submit"
                label="Update"
                color="secondary"
                class="hover:cursor-pointer"
              />
            </div>
          </div>

          <div class="pl-5 pr-5 pt-2 pb-2">
            <img
              id="addGameImage"
              :src="props.game.img"
              width="50%"
              class="rounded-lg object-cover h-full w-auto"
            >
          </div>
        </div>
      </UForm>
    </template>
  </UModal>
</template>
