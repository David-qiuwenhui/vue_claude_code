import { useStorage, useWindowSize, useMouse, usePreferredDark, useNow } from '@vueuse/core'

/**
 * VueUse 组合函数示例
 * 展示常用 VueUse API 的使用方法
 */
export function useVueUseExample() {
  // 本地存储响应式数据
  const count = useStorage('vueuse-count', 0)

  // 窗口尺寸
  const { width, height } = useWindowSize()

  // 鼠标位置
  const { x: mouseX, y: mouseY } = useMouse()

  // 系统深色模式偏好
  const isDark = usePreferredDark()

  // 当前时间（实时更新）
  const now = useNow()

  return {
    count,
    width,
    height,
    mouseX,
    mouseY,
    isDark,
    now
  }
}
