<script setup>
import { ref, computed, onUnmounted, onMounted, watch } from 'vue'

const timer = ref(0)
let interval = null
const props = defineProps({
  duration: {
    type: Number,
    default: 10
  },
  startTime: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['timerFinished'])

const formattedTime = computed(() => {
  const minutes = Math.floor(timer.value / 60)
  const seconds = timer.value % 60
  return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
})
const startTimer = (duration) => {
  if (interval) clearInterval(interval)
  timer.value = duration

  interval = setInterval(() => {
    if (timer.value > 0) {
      timer.value--
    } else {
      clearInterval(interval)
      emit('timerFinished')
    }
  }, 1000)
}
watch(
  () => props.startTime,
  (newVal) => {
    if (newVal) {
      startTimer(props.duration)
    }
  }
)
onUnmounted(() => {
  if (interval) clearInterval(interval)
})
onMounted(() => {
  startTimer(props.duration)
})
</script>

<template>
  <div class="timer-wrapper">
    <span class="timer">زمان باقی مانده {{ formattedTime }}</span>
  </div>
</template>

<style lang="scss" scoped>
.timer {
  &-wrapper {
    display: flex;
    height: 3rem;
    padding: 0.5rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
  color: var(--primary-500);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.75rem;
}
</style>
