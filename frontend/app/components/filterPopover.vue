<script setup lang="ts">
const props = defineProps<{ label: string, items: string[] }>()
const activatedItems = defineModel<string[]>('activatedItems', { required: true })

const checkAll = () => {
  activatedItems.value = [...props.items]
}

const uncheckAll = () => {
  activatedItems.value = []
}
</script>

<template>
  <div>
    <UPopover arrow>
      <UButton
        :label="label"
        class="hover:cursor-pointer"
      />

      <template #content>
        <div class="pl-2 pt-2 pr-5 pb-2">
          <UCheckboxGroup
            v-model="activatedItems"
            :items="items"
          />
          <div class="flex flex-row gap-3 pt-2">
            <UButton
              label="All"
              :onclick="checkAll"
            />
            <UButton
              label="None"
              :onclick="uncheckAll"
            />
          </div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
