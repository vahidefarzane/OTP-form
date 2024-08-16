<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

// const minutes = ref(2)
const secondes = ref(60)
const intervalID = ref(false)
// const timer = computed(() => {
//   return minutes.value * 60 + secondes.value
// })
// const timer = ref(minutes.value * 60 + secondes.value)

onUnmounted(() => {
  clearInterval()
})
onMounted(() => {
  startTimer()
})
const startTimer = () => {
  if (!intervalID.value) {
    intervalID.value = setInterval(() => {
      secondes.value--
    }, 1000)
  }

  //   let data = value.split(':')
  //   let minutes = data[0]
  //   let secondes = data[1]
  //   if (minutes < 10) {
  //     minutes = '0' + minutes
  //   }
  //   if (secondes < 10) {
  //     secondes = '0' + secondes
  //   }
  //   return minutes + ':' + secondes
}
</script>

<template>
  <div>زمان باقی مانده {{ secondes - 1 }} :00</div>
</template>

<style></style>
