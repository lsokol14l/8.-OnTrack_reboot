<script setup>
import { validateActivities, isActivityValid, isNumber } from '../validators'
import ActivityItem from '../components/ActivityItem.vue'
import TheActivityForm from '../components/TheActivityForm.vue'
import TheActivitiesEmptyState from '../components/TheActivitiesEmptyState.vue'

defineProps({
  activities: {
    required: true,
    type: Array,
    validator: validateActivities
  }
})

const emit = defineEmits({
  setActivitySecondsToComplete({ activity, secondsToComplete }) {
    return [isActivityValid(activity), isNumber(secondsToComplete)].every(Boolean)
  },
  createActivity: isActivityValid,
  deleteActivity: isActivityValid
})

const setSecondsToComplete = (activity, secondsToComplete) => {
  emit('setActivitySecondsToComplete', { activity, secondsToComplete })
}
</script>

<template>
  <div class="flex grow flex-col">
    <ul v-if="activities.length" class="grow divide-y">
      <ActivityItem
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        @delete="emit('deleteActivity', activity)"
        @set-seconds-to-complete="setSecondsToComplete(activity, $event)"
      />
    </ul>
    <TheActivitiesEmptyState v-else />
    <TheActivityForm @submit="emit('createActivity', $event)" />
  </div>
</template>
