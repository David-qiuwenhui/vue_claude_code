# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + TypeScript + Vite template project optimized for AI-assisted development. The project uses:
- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** with strictest type checking enabled
- **Vite** for build tooling and development server
- **Vitest** with jsdom for unit testing
- **yarn** as the package manager

## Essential Commands

```bash
# Install dependencies
yarn install

# Start development server (runs on http://localhost:5173)
yarn dev

# Build for production
yarn build

# Run tests
yarn test

# Run tests with UI
yarn test:ui

# Run tests with coverage
yarn test:coverage

# Lint and fix code
yarn lint

# Format code
yarn format
```

## Project Architecture

### Directory Structure
- `src/components/` - Vue SFC components with `<script setup>` and TypeScript
- `src/composables/` - Reusable composition functions
- `src/test/` - Test configuration (setup.ts imports @testing-library/jest-dom)
- `src/assets/` - Static assets (images, global styles)

### Path Aliases
The `@` alias is configured to map to `./src/`. Use it for imports:
```ts
import HelloWorld from '@/components/HelloWorld.vue'
```

### TypeScript Configuration
- Project references: `tsconfig.json` includes `tsconfig.app.json` and `tsconfig.node.json`
- Strictest mode enabled via `@tsconfig/strictest`
- Vue types are handled through `src/vite-env.d.ts`

### Component Structure
Components use `<script setup lang="ts">` with TypeScript interfaces for props and emits:
```vue
<script setup lang="ts">
interface Props {
  modelValue: number
}

interface Emits {
  (e: 'update:modelValue', value: number): void
}

defineProps<Props>()
defineEmits<Emits>()
</script>
```

### Testing
- Component tests use `@vue/test-utils` with `mount()`
- Tests are co-located with components in `__tests__` directories
- Test utilities are globally available via `vitest.config.ts`

---

## Reusable Template: Creating a Vue 3 + TypeScript Project

This section documents the reproducible process for creating a new Vue 3 + TypeScript + Vite + Vitest project that can be reused for future projects.

### Step 1: Initialize Project

```bash
# Create and enter project directory
mkdir your-project-name && cd your-project-name

# Create package.json with dependencies
cat > package.json << 'EOF'
{
  "name": "your-project-name",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "format": "prettier --write src/"
  },
  "dependencies": {
    "vue": "^3.5.13"
  },
  "devDependencies": {
    "@eslint/js": "^9.18.0",
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/vue": "^8.0.3",
    "@tsconfig/node22": "^22.0.0",
    "@tsconfig/strictest": "^2.0.5",
    "@types/node": "^22.12.7",
    "@vitejs/plugin-vue": "^6.0.4",
    "@vitest/coverage-v8": "^2.1.8",
    "@vitest/ui": "^2.1.8",
    "@vue/test-utils": "^2.4.6",
    "eslint": "^9.18.0",
    "eslint-plugin-vue": "^9.32.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "globals": "^15.14.0",
    "jsdom": "^25.0.1",
    "prettier": "^3.4.2",
    "typescript": "~5.7.2",
    "typescript-eslint": "^8.19.1",
    "vite": "^6.0.11",
    "vitest": "^2.1.8",
    "vue-tsc": "^2.2.0"
  }
}
EOF
```

### Step 2: Create Directory Structure

```bash
mkdir -p src/components src/composables src/test src/assets public log
```

### Step 3: Create Configuration Files

**tsconfig.json:**
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.node.json" },
    { "path": "./tsconfig.app.json" }
  ]
}
```

**tsconfig.app.json:**
```json
{
  "extends": "@tsconfig/strictest/tsconfig.json",
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"]
}
```

**tsconfig.node.json:**
```json
{
  "extends": "@tsconfig/node22/tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

**vite.config.ts:**
```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

**vitest.config.ts:**
```ts
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules', 'dist', '**/*.d.ts', '**/*.config.*', '**/test/**']
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

**eslint.config.js:**
```js
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tsEslint from 'typescript-eslint'
import * as parserVue from 'vue-eslint-parser'
import configPrettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/*.d.ts']
  },
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  configPrettier,
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        parser: tsEslint.parser,
        sourceType: 'module'
      }
    }
  }
]
```

**.prettierrc:**
```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "none",
  "arrowParens": "avoid"
}
```

### Step 4: Create Core Files

**index.html:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your App Title</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

**src/main.ts:**
```ts
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

**src/App.vue:**
```vue
<script setup lang="ts">
// Your root component logic
</script>

<template>
  <div>
    <h1>Hello Vue 3 + TypeScript!</h1>
  </div>
</template>

<style scoped>
/* Your styles */
</style>
```

**src/vite-env.d.ts:**
```ts
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```

**src/test/setup.ts:**
```ts
import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/vue'

afterEach(() => {
  cleanup()
})
```

### Step 5: Install and Verify

```bash
# Install dependencies
yarn install

# Run tests to verify setup
yarn test --run

# Start development server
yarn dev

# Build for production
yarn build
```

### Key Patterns to Remember

1. **Component Props Pattern** - Always define props before using them:
```vue
<script setup lang="ts">
interface Props {
  modelValue: number
}

const props = defineProps<Props>()  // Assign to variable if needed
</script>
```

2. **Test File Location** - Place tests next to source in `__tests__` directories

3. **Import Alias** - Use `@/` for imports from src directory

4. **Package Versions** - Use correct version ranges:
   - `@vitejs/plugin-vue`: `^6.0.4` (not 11.x)
   - `vite`: `^6.0.11`
   - `vue`: `^3.5.13`
