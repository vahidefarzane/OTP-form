<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },

  submitting: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>
<template>
  <button
    :class="['button', { loading: loading, disabled: disabled }]"
    @click="handleClick"
    :disabled="disabled || loading"
  >
    <slot name="pre-icon" />
    <span v-if="!submitting && !loading">
      <slot />
    </span>
    <span v-if="submitting">
      <slot name="submitting" />
    </span>
    <span v-if="loading" class="button__loading">
      <slot name="loading" />
      <span class="button__spinner"></span>
    </span>
    <slot name="post-icon" />
  </button>
</template>

<style lang="scss">
.button {
  @include flex-box(row, center, center, 0.75rem);
  &__loading {
    @include flex-box(row, center, center, 0.25rem);
  }
  &__spinner {
    display: flex;
    width: 1rem;
    height: 1rem;
    border: 2px solid var(--color-white);
    border-bottom-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}
.primary {
  background-color: var(--primary-500);
  color: var(--color-white);
}
.secondary {
  background-color: var(--primary-50);
  color: var(--black-500);
}
.loading {
  cursor: wait;
}
.disabled {
  cursor: not-allowed;
  opacity: 0.2;
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
