import { PAGE_TIMELINE, HOUR_IN_DAY, MIDNIGHT_HOUR, SECONDS_IN_HOUR } from './constants.js'
import { isPageValid, isNull, isNaN } from './validators.js'

export const normalizePageHash = () => {
  const page = window.location.hash.slice(1)
  if (isPageValid(page)) {
    return page
  }
  window.location.hash = PAGE_TIMELINE

  return PAGE_TIMELINE
}
export const generateActivities = () => {
  return ['Coding', 'Training', 'Studing'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours * SECONDS_IN_HOUR
  }))
}
export const generateTimelineItems = () => {
  const timelineItems = []
  for (let i = MIDNIGHT_HOUR; i < HOUR_IN_DAY; i++) {
    timelineItems.push({ hour: i })
  }
  return timelineItems
}
export const generateSelectOptions = (activities) => {
  return activities.map((activity) => ({
    value: activity.id,
    label: activity.name
  }))
}
export const id = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}
export const normalizeSelectValue = (value) => {
  return isNull(value) || isNaN(value) ? value : +value
}
