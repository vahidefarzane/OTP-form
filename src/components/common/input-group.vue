<script setup>
import { defineProps, defineModel, ref } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  }
})
const modelValue = defineModel()
const inputType = ref(props.type)

const togglePasswordVisibility = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>

<template>
  <div class="input-wrapper">
    <slot name="prefix" v-bind="$attrs"> </slot>
    <input :type="inputType" v-model="modelValue" :placeholder="placeholder" />
    <button
      v-if="type === 'password'"
      @click="togglePasswordVisibility"
      class="toggle-btn"
      type="button"
    >
      <img v-if="inputType === 'password'" src="@/assets/icons/eye-closed.svg" alt="" />
      <img v-if="inputType === 'text'" src="@/assets/icons/eye-opened.svg" alt="" />
    </button>
    <slot name="suffix">
      <div>hi</div>
    </slot>
  </div>
</template>

<style></style>
