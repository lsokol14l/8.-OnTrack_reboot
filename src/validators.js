import { NAV_ITEMS, HOUR_IN_DAY, MIDNIGHT_HOUR, BUTTON_TYPES } from './constants'

export const isPageValid = (page) => {
  return Object.keys(NAV_ITEMS).includes(page)
}
export const isButtonTypeValid = (type) => {
  return BUTTON_TYPES.includes(type)
}
export const isSelectValueValid = (value) => {
  return isNotEmptyString(value) || isNumber(value) || isNull(value)
}
export const isTimelineItemValid = (hour) => {
  return isHourValid(hour)
}
export const validateSelectOptions = (options) => {
  return options.every(isSelectOptionValid)
}
export const validateTimelineItems = (timelineItems) => {
  return timelineItems.every(isTimelineItemValid)
}
export const isUndefinedOrNull = (value) => {
  return isUndefined(value) || isNull(value)
}
export const isNumberOrNull = (value) => {
  return isNumber(value) || isNull(value)
}
export const isHourValid = (hour) => {
  return isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOUR_IN_DAY - 1)
}
export const isActivityValid = ({ id, name, secondsToComplete }) => {
  return [isNotEmptyString(name), isNumber(secondsToComplete), isNotEmptyString(id)].every(Boolean)
}
export const validateActivities = (activities) => {
  return activities.every(isActivityValid)
}
const isSelectOptionValid = ({ value, label }) => {
  return (isNumber(value) || isNotEmptyString(value)) && isNotEmptyString(label)
}
export const isNull = (value) => {
  return value === null
}
export const isNaN = (value) => {
  return isNaN(value)
}
export const isUndefined = (value) => {
  return value === undefined
}
const isNumber = (value) => {
  return typeof value === 'number'
}
const isString = (value) => {
  return typeof value === 'string'
}
const isBetween = (value, min, max) => {
  return value >= min && value <= max
}
const isNotEmptyString = (value) => {
  return isString(value) && value.length > 0
}
