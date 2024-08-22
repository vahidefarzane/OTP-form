<script setup>
import appTimer from './app-timer.vue'
import { ref } from 'vue'
import baseButton from '../common/base-button.vue'
import otpInputs from './otp-inputs.vue'

defineProps({
  phoneNumber: {
    type: String,
    required: true
  },
  OTPCount: {
    type: Number,
    default: 6
  }
})

const isLoading = ref(false)
const isDisabled = ref(true)
const isOtpComplete = ref(false)
const isSubmiting = ref(false)
const startTime = ref(false)

const handleClick = () => {
  isLoading.value = true
  isSubmiting.value = false
  setTimeout(() => {
    isDisabled.value = true
    isLoading.value = false
    startTime.value = true
    isSubmiting.value = false
  }, 3000)
}
const handleTimerFinished = () => {
  isDisabled.value = false
}
const handleOtpChange = (otp) => {
  isOtpComplete.value = otp.length === 6
  if (isOtpComplete.value) {
    isSubmiting.value = true
    isDisabled.value = false
  } else {
    isSubmiting.value = false
    isDisabled.value = true
  }
}
</script>
<template>
  <div class="otp-wrapper">
    <form class="otp-form">
      <div class="otp-form__input-section">
        <h1 class="otp-form__title">کد تایید برای شماره {{ phoneNumber }} ارسال شد</h1>
        <div class="otp-form__input-group input-group">
          <h2 class="input-group__label">کدتایید</h2>
          <div class="input-group__inputs">
            <otpInputs :numberOfdigits="6" @otpChange="handleOtpChange" />
          </div>
          <p class="input-group__caption">کد ارسال {{ OTPCount }} رقمی را اینجا وارد کنید</p>
        </div>
      </div>
      <div class="otp-form__action-section">
        <appTimer duration="10" @timerFinished="handleTimerFinished" :startTime="startTime" />
        <div class="otp-form__submit-btn">
          <baseButton
            :loading="isLoading"
            :disabled="isDisabled"
            :submitting="isSubmiting"
            @click="handleClick"
          >
            ارسال مجدد
            <template #submitting>ارسال</template>
            <template #loading> در حال ارسال کد ... <span class="sppiner"></span></template>
          </baseButton>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/sass/components/view/otp-form.scss';
</style>
