<script setup lang="ts">
import { useVueUseExample } from '@/composables/useVueUseExample'

const { count, width, height, mouseX, mouseY, isDark, now } = useVueUseExample()

const increment = () => (count.value += 1)
const decrement = () => (count.value -= 1)
const reset = () => (count.value = 0)
</script>

<template>
  <div class="vueuse-demo">
    <h2>VueUse 功能演示</h2>

    <!-- 响应式本地存储 -->
    <section class="demo-section">
      <h3>useStorage - 持久化计数器</h3>
      <div class="counter-controls">
        <button data-testid="decrement" @click="decrement" :disabled="count <= 0">-</button>
        <span class="count">{{ count }}</span>
        <button data-testid="increment" @click="increment">+</button>
        <button data-testid="reset" @click="reset" class="btn-reset">重置</button>
      </div>
      <p class="hint">刷新页面后数据不会丢失</p>
    </section>

    <!-- 窗口尺寸 -->
    <section class="demo-section">
      <h3>useWindowSize - 窗口尺寸</h3>
      <p>宽度: {{ Math.round(width) }}px</p>
      <p>高度: {{ Math.round(height) }}px</p>
    </section>

    <!-- 鼠标位置 -->
    <section class="demo-section">
      <h3>useMouse - 鼠标位置</h3>
      <p>X: {{ Math.round(mouseX) }}</p>
      <p>Y: {{ Math.round(mouseY) }}</p>
    </section>

    <!-- 系统偏好 -->
    <section class="demo-section">
      <h3>usePreferredDark - 系统深色模式</h3>
      <p :class="{ 'dark-active': isDark }">
        {{ isDark ? '🌙 深色模式' : '☀️ 浅色模式' }}
      </p>
    </section>

    <!-- 实时时间 -->
    <section class="demo-section">
      <h3>useNow - 实时时间</h3>
      <p class="time">{{ now.toLocaleTimeString('zh-CN') }}</p>
    </section>
  </div>
</template>

<style scoped>
.vueuse-demo {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.vueuse-demo h2 {
  margin-bottom: 1.5rem;
  text-align: center;
}

.demo-section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
}

.demo-section h3 {
  font-size: 1rem;
  margin-bottom: 0.75rem;
  opacity: 0.9;
}

.demo-section p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.counter-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

.counter-controls button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  font-size: 1.25rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  transition: all 0.2s;
}

.counter-controls button:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.counter-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.count {
  font-size: 1.5rem;
  font-weight: bold;
  min-width: 50px;
  text-align: center;
}

.btn-reset {
  width: auto !important;
  padding: 0 1rem !important;
  border-radius: 1rem !important;
  font-size: 0.9rem !important;
}

.hint {
  font-size: 0.8rem;
  opacity: 0.7;
  text-align: center;
  margin-top: 0.5rem;
}

.dark-active {
  color: #ffd700;
  font-weight: bold;
}

.time {
  font-size: 1.5rem;
  font-family: monospace;
  text-align: center;
}
</style>
