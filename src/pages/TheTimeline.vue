<script setup>
import {
  validateTimelineItems,
  validateSelectOptions,
  validateActivities,
  isTimelineItemValid,
  isActivityValid,
  isNull
} from '../validators'
import TimelineItem from '../components/TimelineItem.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  },
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimelineItems
  },
  activitySelectOptions: {
    required: true,
    type: Array,
    validator: validateSelectOptions
  }
})

const emit = defineEmits({
  setTimelineItemActivity({ timelineItem, activity }) {
    return [isTimelineItemValid(timelineItem), isNull(activity) || isActivityValid(activity)].every(
      Boolean
    )
  }
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimelineItem
        :activities="activities"
        v-for="timelineItem in timelineItems"
        :key="timelineItem.hour"
        :timeline-item="timelineItem"
        :activity-select-options="activitySelectOptions"
        @select-activity="emit('setTimelineItemActivity', { timelineItem, activity: $event })"
      />
    </ul>
  </div>
</template>
