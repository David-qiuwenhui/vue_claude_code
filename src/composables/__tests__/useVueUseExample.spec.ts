import { describe, it, expect } from 'vitest'
import { useVueUseExample } from '../useVueUseExample'

describe('useVueUseExample', () => {
  it('returns reactive values', () => {
    const { count, width, height, mouseX, mouseY, isDark, now } = useVueUseExample()

    expect(count).toBeDefined()
    expect(width).toBeDefined()
    expect(height).toBeDefined()
    expect(mouseX).toBeDefined()
    expect(mouseY).toBeDefined()
    expect(isDark).toBeDefined()
    expect(now).toBeDefined()
  })

  it('count has initial value', () => {
    const { count } = useVueUseExample()
    expect(count.value).toBeGreaterThanOrEqual(0)
  })

  it('window dimensions are positive', () => {
    const { width, height } = useVueUseExample()
    expect(width.value).toBeGreaterThan(0)
    expect(height.value).toBeGreaterThan(0)
  })

  it('mouse position is defined', () => {
    const { mouseX, mouseY } = useVueUseExample()
    expect(mouseX.value).toBeGreaterThanOrEqual(0)
    expect(mouseY.value).toBeGreaterThanOrEqual(0)
  })

  it('isDark is boolean', () => {
    const { isDark } = useVueUseExample()
    expect(typeof isDark.value).toBe('boolean')
  })

  it('now is a Date object', () => {
    const { now } = useVueUseExample()
    expect(now.value).toBeInstanceOf(Date)
  })
})
