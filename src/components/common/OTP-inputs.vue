<script setup>
import { ref, reactive, defineModel } from 'vue'
const otp = defineModel()

const props = defineProps({
  default: String,
  digitCount: {
    type: Number,
    required: true
  }
})
const numbers = reactive([])
const OTPCode = ref([])
// const isActiveBtn = ref(false)

if (props.default && props.default.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    numbers[i] = props.default.charAt(i)
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    numbers[i] = null
  }
}
const otpCont = ref(null)
const handleKeyDown = function (event, index) {
  if (event.key !== 'Tab' && event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
    event.preventDefault()
  }

  if (event.key === 'Backspace') {
    numbers[index] = null

    if (index > 0) {
      otpCont.value.children[index - 1].focus()
    }

    return
  }

  if (new RegExp('^([0-9])$').test(event.key)) {
    numbers[index] = event.key

    if (index != props.digitCount - 1) {
      otpCont.value.children[index + 1].focus()
    }
  }

  OTPCode.value.push(numbers[index])
  if (OTPCode.value.length === 6) {
    // isActiveBtn.value = true
  }
  otp.value = OTPCode.value.join('')
}
</script>
<template>
  <div class="input__wrapper" ref="otpCont">
    <input
      v-for="(el, ind) in numbers"
      :key="el + ind"
      v-model="numbers[ind]"
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
@import '../../styles/sass/components/common/otp.scss';
</style>
