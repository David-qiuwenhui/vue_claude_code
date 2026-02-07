import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const doubled = computed(() => count.value * 2)

  const increment = () => (count.value += 1)
  const decrement = () => (count.value -= 1)
  const reset = () => (count.value = initialValue)

  return {
    count,
    doubled,
    increment,
    decrement,
    reset
  }
}
