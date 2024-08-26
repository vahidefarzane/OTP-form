// stores/timerStore.js
import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', {
  state: () => ({
    timer: 0,
    isRunning: false,
    intervalId: null
  }),
  actions: {
    startTimer(duration) {
      this.timer = duration
      this.isRunning = true
      this.intervalId = setInterval(() => {
        if (this.timer > 0) {
          this.timer--
        } else {
          this.stopTimer()
        }
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.intervalId)
      this.isRunning = false
      this.intervalId = null
    },
    resumeTimer() {
      if (this.isRunning && this.timer > 0) {
        this.startTimer(this.timer)
      }
    }
  },
  persist: true
})
