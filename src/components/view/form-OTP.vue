<script setup>
import { computed, ref } from 'vue'
// import BaseButton from '../common/base-button.vue'
import OTPInputs from '../common/OTP-inputs.vue'
import AppTimer from './app-timer.vue'

const isActive = ref(false)
const isShowingSppiner = ref(false)

const submitCode = () => {
  isShowingSppiner.value = true
  setTimeout(() => {
    isShowingSppiner.value = false
  }, 3000)
}
</script>
<template>
  <div class="container">
    <div class="OTP-wrapper">
      <div class="OTP">
        <div class="OTP__title">
          <h1>کد تایید برای شماره 0903407480 ارسال شد</h1>
        </div>
        <div class="OTP__form form">
          <div class="form__title">
            <h2>کدتایید</h2>
          </div>
          <div class="form__input">
            <OTPInputs :digit-count="6" v-model="isActive" />
          </div>
          <div class="form__caption">
            <p>کد ارسال 6 رقمی را اینجا وارد کنید</p>
          </div>
        </div>
        <div class="OTP__footer">
          <div class="OTP__timer">
            <span> <AppTimer /></span>
          </div>
          <div class="form__submit-btn">
            <button @click="submitCode" :disabled="!isActive">
              <span> {{ isActive ? 'ارسال' : 'ارسال مجدد' }}</span>
              <span :class="isShowingSppiner && 'sppiner'"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  height: 100vh;
  background: url(../../assets/images/bg-image.png) lightgray 0px -100px / 100% 118.519% no-repeat;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.OTP-wrapper {
  display: flex;
  width: 37.5rem;
  height: 52.5rem;
  padding: 17.0625rem 7.6875rem;
  flex-direction: column;
  background-color: white;
  border-radius: 1.25rem;
}
.OTP {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  width: 22.1rem;
  height: 18.4rem;
  background-color: white;
  &__title {
    h1 {
      @include font-style(1rem, 400);
      color: #3c4351;
    }
  }
  &__inputs-wrapper {
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 0.75rem;
  }
  &__timer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #4152a0;
  }
  &__footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
  }
}
.form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  &__title {
    h2 {
      @include font-style(1rem, 400);
      color: #3c4351;
    }
  }
  &__input {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  &__caption {
    p {
      @include font-style(0.75rem, 400);
      color: #8999b9;
      opacity: 0.6;
    }
  }
  &__submit-btn {
    button {
      display: flex;
      width: 22.125rem;
      height: 3rem;
      padding: 0.5rem 1rem;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      border-radius: 0.5rem;
      background-color: #4152a0;
      color: #ffffff;
      &:disabled {
        opacity: 0.2;
      }
    }
  }
}

.sppiner {
  display: flex;
  width: 17px;
  height: 17px;
  border: 2px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
