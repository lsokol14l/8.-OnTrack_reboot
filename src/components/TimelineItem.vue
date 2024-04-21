<script setup>
import {
  isActivityValid,
  isTimelineItemValid,
  validateSelectOptions,
  validateActivities,
  isNull
} from '../validators'
import BaseSelect from './BaseSelect.vue'
import TimelineHour from './TimelineHour.vue'

const emit = defineEmits({
  selectActivity(activity) {
    return isNull(activity) || isActivityValid(activity)
  }
})

const props = defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  },
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimelineItemValid
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const findActivity = (id) => props.activities.find((activity) => activity.id === id)

const selectActivity = (id) => {
  emit('selectActivity', findActivity(id) ? findActivity(id) : null)
}
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 px-4 py-10">
    <TimelineHour :hour="timelineItem.hour" />
    <BaseSelect
      placeholder="Rest"
      :selected="timelineItem.activityId"
      :options="activitySelectOptions"
      @select="selectActivity($event)"
    />
  </li>
</template>
