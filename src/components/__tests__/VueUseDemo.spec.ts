import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import VueUseDemo from '../VueUseDemo.vue'

describe('VueUseDemo', () => {
  it('renders properly', () => {
    const wrapper = mount(VueUseDemo)
    expect(wrapper.find('.vueuse-demo').exists()).toBe(true)
    expect(wrapper.find('h2').text()).toBe('VueUse 功能演示')
  })

  it('displays window size', () => {
    const wrapper = mount(VueUseDemo)
    const widthText = wrapper.text()
    expect(widthText).toContain('宽度:')
    expect(widthText).toContain('高度:')
  })

  it('displays mouse position', () => {
    const wrapper = mount(VueUseDemo)
    const text = wrapper.text()
    expect(text).toContain('X:')
    expect(text).toContain('Y:')
  })

  it('displays system dark mode preference', () => {
    const wrapper = mount(VueUseDemo)
    const text = wrapper.text()
    expect(text).toContain('深色模式')
  })

  it('displays current time', () => {
    const wrapper = mount(VueUseDemo)
    const timeElement = wrapper.find('.time')
    expect(timeElement.exists()).toBe(true)
  })

  it('increments and decrements storage counter', async () => {
    const wrapper = mount(VueUseDemo)

    const incrementBtn = wrapper.find('[data-testid="increment"]')
    const decrementBtn = wrapper.find('[data-testid="decrement"]')

    await incrementBtn.trigger('click')
    await nextTick()
    expect(wrapper.find('.count').text()).toBe('1')

    await decrementBtn.trigger('click')
    await nextTick()
    expect(wrapper.find('.count').text()).toBe('0')
  })

  it('resets storage counter', async () => {
    const wrapper = mount(VueUseDemo)

    const incrementBtn = wrapper.find('[data-testid="increment"]')
    await incrementBtn.trigger('click')
    await incrementBtn.trigger('click')
    await nextTick()

    const resetBtn = wrapper.find('[data-testid="reset"]')
    await resetBtn.trigger('click')
    await nextTick()

    expect(wrapper.find('.count').text()).toBe('0')
  })
})
