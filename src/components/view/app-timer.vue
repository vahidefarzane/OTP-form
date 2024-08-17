<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { useTimerStore } from '../../stores/timerStore'

const timerStore = useTimerStore()

// const minutes = ref(2)
// const secondes = ref(10)

onUnmounted(() => {
  clearInterval()
})
onMounted(() => {
  startTimer()
})
const startTimer = () => {
  setInterval(() => {
    if (timerStore.timer.seconds <= 0) {
      timerStore.timer.seconds = 0
    } else {
      timerStore.timer.seconds--
    }
  }, 1000)
}
</script>

<template>
  <div>زمان باقی مانده {{ timerStore.timer.seconds - 1 }} :00</div>
</template>

<style></style>
