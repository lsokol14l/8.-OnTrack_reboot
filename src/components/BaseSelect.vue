<template>
  <BaseButton @click="select(null)" :type="BUTTON_TYPE_NEUTRAL">
    <XMarkIcon class="h-8 w-8" />
  </BaseButton>
  <select
    class="w-full truncate rounded bg-gray-100 px-2 py-1 text-2xl"
    @change="select($event.target)"
  >
    <!--+$event.target.value == Number($event.target.value) --->

    <option :selected="isNotSelected" disabled value="">
      {{ placeholder }}
    </option>
    <option
      v-for="option in props.options"
      :key="String(option)"
      :value="option"
      :selected="option === props.selected"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseButton from './BaseButton.vue'
import {
  validateSelectOptions,
  isUndefinedOrNull,
  isSelectValueValid
} from '../validators.js'
import { computed } from 'vue'
import { BUTTON_TYPE_NEUTRAL } from '../constants.js'
import { normalizeSelectValue } from '../functions.js'

const props = defineProps({
  selected: Number || String,
  placeholder: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  select: isSelectValueValid
})

const isNotSelected = computed(() => isUndefinedOrNull(props.selected))

const select = (value) => {
  emit('select', normalizeSelectValue(value))
}
</script>
