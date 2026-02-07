import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        modelValue: 0,
        doubled: 0
      }
    })
    expect(wrapper.find('.count').text()).toBe('0')
  })

  it('displays doubled value', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        modelValue: 5,
        doubled: 10
      }
    })
    expect(wrapper.find('.doubled').text()).toBe('Doubled: 10')
  })

  it('emits increment event', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        modelValue: 0,
        doubled: 0
      }
    })
    await wrapper.find('.btn-increment').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([1])
  })

  it('emits decrement event', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        modelValue: 5,
        doubled: 10
      }
    })
    await wrapper.find('.btn-decrement').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([4])
  })

  it('disables decrement button when count is 0', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        modelValue: 0,
        doubled: 0
      }
    })
    expect(wrapper.find('.btn-decrement').attributes('disabled')).toBeDefined()
  })
})
