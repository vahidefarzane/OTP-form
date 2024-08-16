<script setup>
import { ref } from 'vue'

const minutes = ref(0)
const secondes = ref(0)
const timer = ()=>{
    sendTime() {
			  this.$emit('set-time', {minutes:this.minutes, secondes:this.secondes})
		 }
}
prettify : function(value) {
			  let data = value.split(':')
			  let minutes = data[0]
			  let secondes = data[1]
			  if (minutes < 10) {
					minutes = "0"+minutes
			  }
			  if (secondes < 10) {
					secondes = "0"+secondes
			  }
			  return minutes+":"+secondes
		 }
</script>

<template>
  <div></div>
</template>

<style></style>
