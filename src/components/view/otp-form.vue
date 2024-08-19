<script setup>
import OTPInputs from '../common/OTP-inputs.vue'
import appTimer from './app-timer.vue'

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
        <appTimer duration="20" />
        <div class="otp-form__submit-btn">
          <button @click="submitCode" :disabled="!isActive">
            <span> {{ isActive ? 'ارسال' : 'ارسال مجدد' }}</span>
            <span :class="isShowingSppiner && 'sppiner'"></span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/sass/components/view/otp-form.scss';
</style>
