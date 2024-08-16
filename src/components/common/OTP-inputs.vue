<script setup>
import { ref, reactive, defineModel } from 'vue'
const isActiveBtn = defineModel()

const props = defineProps({
  default: String,
  digitCount: {
    type: Number,
    required: true
  }
})
const digits = reactive([])
const OTPCode = ref([])

if (props.default && props.default.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.default.charAt(i)
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = null
  }
}
const otpCont = ref(null)
const handleKeyDown = function (event, index) {
  if (event.key !== 'Tab' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
    event.preventDefault()
  }

  if (event.key === 'Backspace') {
    digits[index] = null

    if (index > 0) {
      otpCont.value.children[index - 1].focus()
    }

    return
  }

  if (new RegExp('^([0-9])$').test(event.key)) {
    digits[index] = event.key

    if (index != props.digitCount - 1) {
      otpCont.value.children[index + 1].focus()
    }
  }

  OTPCode.value.push(digits[index])
  if (OTPCode.value.length === 6) {
    isActiveBtn.value = true
  }
}
</script>
<template>
  <div class="input__wrapper" ref="otpCont">
    <input
      v-for="(el, ind) in digits"
      :key="el + ind"
      v-model="digits[ind]"
      :autofocus="ind === 0"
      maxlength="1"
      type="number"
      class="input"
      required
      @keydown="handleKeyDown($event, ind)"
    />
  </div>
</template>

<style lang="scss">
.input__wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 0.75rem;
  direction: ltr;
}
.input {
  width: 3.0625rem;
  height: 3rem;
  background-color: #f9fafb;
  border-radius: 0.38rem;
  display: flex;
  justify-content: center;
  align-items: centers;
  text-align: center;
  &:focus {
    border: 1px solid #00aace;
  }
}
</style>
