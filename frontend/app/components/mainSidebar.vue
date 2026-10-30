<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-home'
  },
  {
    label: 'Games',
    icon: 'i-lucide-gamepad-2',
    children: [
      {
        label: 'Library'
      },
      {
        label: 'Backlog'
      }
    ]
  },
  {
    label: 'Books',
    icon: 'i-lucide-book',
    children: [
      {
        label: 'Library'
      },
      {
        label: 'Backlog'
      }
    ]
  }
])
</script>

<template>
  <div>
    <USidebar
      side="left"
      :ui="{
        gap: 'h-[calc(100%-var(--ui-header-height))]',
        container:
          'absolute top-(--ui-header-height) bottom-0 h-[calc(100%-var(--ui-header-height))]'
      }"
    >
      <template #default>
        <UNavigationMenu
          orientation="vertical"
          :items="items"
          :ui="{
            item: 'first:mb-20 mb-10',
            linkLabel: 'text-xl',
            linkLeadingIcon: 'size-6',
            linkTrailingIcon: 'size-6'
          }"
        />
      </template>

      <template #footer>
        <UAvatar
          icon="i-lucide:circle-user-round"
          size="2xl"
        />
        <span class="pl-10">Profile</span>
      </template>
    </USidebar>
  </div>
</template>
