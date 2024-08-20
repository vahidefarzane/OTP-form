<script setup>
import OTPInputs from '../common/OTP-inputs.vue'
import appTimer from './app-timer.vue'
import { ref } from 'vue'
import baseButton from '../common/base-button.vue'

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
const startTime = ref(false)

const handleClick = () => {
  isLoading.value = true
  setTimeout(() => {
    isDisabled.value = true
    isLoading.value = false
    startTime.value = true
  }, 3000)
}
const handleTimerFinished = () => {
  isDisabled.value = false
}
</script>
<template>
  <div class="otp-wrapper">
    <form class="otp-form">
      <div class="otp-form__input-section">
        <h1 class="otp-form__title">کد تایید برای شماره {{ phoneNumber }} ارسال شد</h1>
        <div class="otp-form__input-group input-group">
          <h2 class="input-group__label">کدتایید</h2>
          <div class="input-group__input">
            <OTPInputs :digit-count="6" v-model="otp" />
          </div>
          <p class="input-group__caption">کد ارسال {{ OTPCount }} رقمی را اینجا وارد کنید</p>
        </div>
      </div>
      <div class="otp-form__action-section">
        <appTimer duration="5" @timerFinished="handleTimerFinished" :startTime="startTime" />
        <div class="otp-form__submit-btn">
          <baseButton :loading="isLoading" :disabled="isDisabled" @click="handleClick">
            ارسال مجدد
            <template #loading> در حال ارسال کد ... <span class="sppiner"></span></template>
          </baseButton>
          <!-- <button @click="submitCode" :disabled="!isActive">
            <span> {{ isActive ? 'ارسال' : 'ارسال مجدد' }}</span>
            <span :class="isShowingSppiner && 'sppiner'"></span>
          </button> -->
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/sass/components/view/otp-form.scss';
</style>
