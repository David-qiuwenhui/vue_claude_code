<script setup lang="ts">
interface Props {
  modelValue: number
  doubled: number
}

interface Emits {
  (e: 'update:modelValue', value: number): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0
})
const emit = defineEmits<Emits>()

const increment = () => emit('update:modelValue', props.modelValue + 1)
const decrement = () => emit('update:modelValue', props.modelValue - 1)
</script>

<template>
  <div class="hello-world">
    <div class="counter">
      <button class="btn btn-decrement" @click="decrement" :disabled="modelValue <= 0">
        -
      </button>
      <span class="count">{{ modelValue }}</span>
      <button class="btn btn-increment" @click="increment">+</button>
    </div>
    <p class="doubled">Doubled: {{ doubled }}</p>
  </div>
</template>

<style scoped>
.hello-world {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.btn {
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}

.btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.count {
  font-size: 2rem;
  font-weight: bold;
  min-width: 60px;
}

.doubled {
  font-size: 1.25rem;
  opacity: 0.9;
}
</style>
