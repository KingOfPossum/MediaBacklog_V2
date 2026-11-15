<script setup lang="ts">
import { useConsoleFilter } from '~/composables/consoleFilter.ts'
import { getStatusNames } from '~/types/playStatus.ts'
import { useGamesFilter } from '~/composables/gamesFilter.ts'
import { useDateSort } from '~/composables/dateSort.ts'

const { consoles } = useConsoleFilter()
const { filterType } = useGamesFilter()
const { sortDateAscending } = useDateSort()

const toast = useToast()

const nameValue = ref('')
const platformValue = ref('')
const statusValue = ref('')
const gameRating = ref(1)

const image = ref('/images/placeholder.jpg')

let timeoutID = -1

const open = ref(false)

const resetFields = () => {
  nameValue.value = ''
  platformValue.value = ''
  statusValue.value = ''
  gameRating.value = 1
}

const onSubmit = async () => {
  console.log('Submitting...')
  if (nameValue.value === '' || platformValue.value === '' || statusValue.value === '') {
    console.log('Need to fill in all required fields')
    toast.add({
      title: 'Error',
      description: 'Need to fill in all required fields',
      icon: 'bx:error',
      color: 'red',
      duration: 3000
    })
  } else {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const currentDate = year + '-' + month + '-' + day
    const data = {
      game: nameValue.value,
      platform: platformValue.value,
      status: statusValue.value,
      rating: gameRating.value,
      date: currentDate
    }
    await makeHTTPPOSTRequest('newGame', data)
    open.value = false
    filterType.value = 'date'
    sortDateAscending.value = false
  }
}

const checkForEndOfInput = () => {
  console.log('KeyDown')
  if (timeoutID !== -1) {
    clearTimeout(timeoutID)
  }
  timeoutID = setTimeout(async () => {
    console.log('Input finished')
    const response = await makeHTTPGETRequest('IGDBGame', { name: nameValue.value })

    if (response['igdb_id'] !== -1 && nameValue.value !== '' && response['cover_url'] != '(null)') {
      image.value = response['cover_url']
    } else {
      image.value = '/images/placeholder.jpg'
    }

    console.log(response)
  }, 500)
}
</script>

<template>
  <UModal
    v-model:open="open"
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
      @click="resetFields"
    />

    <template #body>
      <UForm
        @submit="onSubmit"
      >
        <div class="flex flex-row gap-5">
          <div class="flex flex-col gap-3 pl-5">
            <UFormField
              label="Name"
              required
            >
              <UInput
                v-model="nameValue"
                class="w-50"
                placeholder="Enter name"
                @keydown="checkForEndOfInput"
              />
            </UFormField>

            <UFormField
              label="Platform"
              required
            >
              <USelectMenu
                v-model="platformValue"
                :items="consoles"
                placeholder="Select Platform"
                class="w-50"
              />
            </UFormField>

            <UFormField
              label="Status"
              required
            >
              <USelectMenu
                v-model="statusValue"
                :items="getStatusNames()"
                placeholder="Select Status"
                class="w-50"
              />
            </UFormField>

            <UFormField label="Rating">
              <RatingDisplay
                v-model:rating="gameRating"
                :selectable="true"
              />
            </UFormField>

            <div class="absolute top-75 right-7">
              <UButton
                type="submit"
                label="Add"
                color="secondary"
                class="hover:cursor-pointer"
              />
            </div>
          </div>

          <div class="pl-5 pr-5 pt-2 pb-2">
            <img
              id="addGameImage"
              :src="image"
              width="50%"
              class="rounded-lg object-cover h-full w-auto"
            >
          </div>
        </div>
      </UForm>
    </template>
  </UModal>
</template>
