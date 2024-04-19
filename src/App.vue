<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'
import { ref, computed } from 'vue'
import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constants'
import {
  normalizePageHash,
  generateTimelineItems,
  generateSelectOptions,
  generateActivities
} from './functions'

const goTo = (page) => {
  currentPage.value = page
}

const timelineItems = generateTimelineItems()

const currentPage = ref(normalizePageHash())

const activities = ref(generateActivities())

const activitySelectOptions = computed(() =>
  generateSelectOptions(activities.value)
)

const deleteActivity = (activity) => {
  activities.value.splice(activities.value.indexOf(activity), 1)
}

const createActivity = activity => {
  activities.value.push(activity)
}
</script>

<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex flex-grow flex-col">
    <TheTimeline
      v-show="currentPage === PAGE_TIMELINE"
      :timeline-items="timelineItems"
      :activity-select-options="activitySelectOptions"
    />
    <TheActivities
      v-show="currentPage === PAGE_ACTIVITIES"
      :activities="activities"
      @delete-activity="deleteActivity($event)"
      @create-activity="createActivity($event)"
    />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>

<style scoped></style>
