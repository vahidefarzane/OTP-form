<script setup>
import { ref, computed, onUnmounted, onMounted } from 'vue'

const props = defineProps({
  duration: {
    type: Number,
    default: 180
  }
})

const timer = ref(0)
let interval = null

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
    }
  }, 1000)
}
onUnmounted(() => {
  if (interval) clearInterval(interval)
})
onMounted(() => {
  startTimer(props.duration)
})
</script>

<template>
  <span class="timer">زمان باقی مانده {{ formattedTime }}</span>
</template>

<style lang="scss" scoped>
.timer {
  color: var(--primary-500);
  font-size: 0.875rem;
  font-weight: 500;

  line-height: 1.75rem;
}
</style>
