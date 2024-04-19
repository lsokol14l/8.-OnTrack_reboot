<template>
  <nav class="sticky bottom-0 z-10 bg-white flex">
    <ul class="flex items-center justify-around border-t flex-grow">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :icon="icon"
        :page="page"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @click="emit('navigate', page)"
      />
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavItem from './NavItem.vue'
import { NAV_ITEMS } from '../constants.js'
import { isPageValid } from '../validators.js'

defineProps({
  currentPage: {
    type: String,
    required: true,
    validator: isPageValid
  }
})

const emit = defineEmits({
  navigate: isPageValid
})
</script>

<style scoped></style>
