import { defineStore } from 'pinia'
export const useTimerStore = defineStore('timer', {
  state: () => ({
    timer: {
      seconds: 10,
      minutes: ''
    }
  }),
  actions: {
    resetTimer() {
      this.$patch({ seconds: 0 })
    }
  },
  persist: {
    enabled: true,
    storage: localStorage
  }
})
