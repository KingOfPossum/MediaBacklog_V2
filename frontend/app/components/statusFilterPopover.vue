<script setup lang="ts">
import { useStatusFilter } from '~/composables/statusFilter.ts'

const { allStatus, activatedStatus } = useStatusFilter()
</script>

<template>
  <FilterPopover
    v-model:activated-items="activatedStatus"
    :items="allStatus"
    label="Status"
  />
</template>
