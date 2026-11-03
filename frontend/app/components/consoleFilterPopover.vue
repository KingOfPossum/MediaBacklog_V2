<script setup lang="ts">
const items = ref(['PC', 'PS1', 'PS2', 'PS3', 'PS4', 'PS5', 'PSP', 'PSVita', 'NES', 'SNES', 'N64','GameCube', 'Wii', 'Wii U', 'Switch', 'Switch 2', 'GameBoy', 'GameBoy Advance', 'DS', '3DS', 'XBOX', 'XBOX 360', 'XBOX One', 'XBOX Series X'])
const value = ref(['PC', 'PS1', 'PS2', 'PS3', 'PS4', 'PS5', 'PSP', 'PSVita', 'NES', 'SNES', 'N64','GameCube', 'Wii', 'Wii U', 'Switch', 'Switch 2', 'GameBoy', 'GameBoy Advance', 'DS', '3DS', 'XBOX', 'XBOX 360', 'XBOX One', 'XBOX Series X'])

const checkAllConsoles = () => {
  value.value = []
  items.value.forEach((item) => {
    value.value.push(item)
  })
}

const uncheckAllConsoles = () => {
  value.value = []
}
</script>

<template>
  <div>
    <UPopover arrow>
      <UButton label="Console" />

      <template #content>
        <div class="pl-2 pt-2 pr-5 pb-2">
          <UCheckboxGroup
            v-model="value"
            :items="items"
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
