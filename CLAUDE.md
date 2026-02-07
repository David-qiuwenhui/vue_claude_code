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
