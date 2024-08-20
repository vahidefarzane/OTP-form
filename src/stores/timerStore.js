import { defineStore } from 'pinia'
export const useTimerStore = defineStore('timer', {
  state: () => ({
    timer: ''
  }),
  actions: {
    set(duration) {
      this.$patch({ timer: duration })
    }
  },

  persist: {
    enabled: true,
    key: 'timer',
    storage: localStorage
  }
})
