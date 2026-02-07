import { describe, it, expect } from 'vitest'
import { useCounter } from '../useCounter'

describe('useCounter', () => {
  it('initializes with default value', () => {
    const { count } = useCounter()
    expect(count.value).toBe(0)
  })

  it('initializes with custom value', () => {
    const { count } = useCounter(5)
    expect(count.value).toBe(5)
  })

  it('increments count', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })

  it('decrements count', () => {
    const { count, decrement } = useCounter(5)
    decrement()
    expect(count.value).toBe(4)
  })

  it('resets to initial value', () => {
    const { count, increment, reset } = useCounter(10)
    increment()
    increment()
    reset()
    expect(count.value).toBe(10)
  })

  it('calculates doubled value', () => {
    const { count, doubled } = useCounter(5)
    expect(doubled.value).toBe(10)
    count.value = 7
    expect(doubled.value).toBe(14)
  })
})
