<script setup lang="ts">
import { ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const count = ref(0)
const doubledCount = computed(() => count.value * 2)
</script>

<template>
  <div class="app">
    <header class="app-header">
      <h1>Vue AI Template</h1>
      <p class="subtitle">Vue 3 + TypeScript + Vite + Vitest</p>
    </header>

    <main class="app-main">
      <HelloWorld v-model:modelValue="count" :doubled="doubledCount" />

      <section class="features">
        <div class="feature-card">
          <h3>Vue 3</h3>
          <p>Composition API &lt;script setup&gt;</p>
        </div>
        <div class="feature-card">
          <h3>TypeScript</h3>
          <p>Strict type checking enabled</p>
        </div>
        <div class="feature-card">
          <h3>Vite</h3>
          <p>Lightning-fast build tool</p>
        </div>
        <div class="feature-card">
          <h3>Vitest</h3>
          <p>Native Vitest unit testing</p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.app-header {
  text-align: center;
  margin-bottom: 3rem;
}

.app-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
}

.app-main {
  max-width: 1200px;
  margin: 0 auto;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.feature-card p {
  opacity: 0.8;
}
</style>
