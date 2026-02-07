# Vue AI Template

> Vue 3 + TypeScript + Vite + Vitest template project optimized for AI-assisted development

[![Vue 3](https://img.shields.io/badge/Vue-3.5-42b883?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?logo=vite)](https://vitejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-2.0-6e9f18?logo=vitest)](https://vitest.dev/)

A well-structured, production-ready Vue 3 template designed for modern web development with AI assistance. This template comes pre-configured with TypeScript, strict type checking, comprehensive testing setup, and opinionated tooling to accelerate your development workflow.

## Features

- Vue 3 with Composition API and `<script setup>` syntax
- TypeScript with strictest type checking
- Vite for lightning-fast HMR and optimized builds
- Vitest with jsdom for unit testing
- ESLint + Prettier for code quality and formatting
- Path aliases (`@/*` maps to `./src/*`)
- Pre-configured test setup with @testing-library/vue

## Quick Start

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Build for production (`vue-tsc` + `vite build`) |
| `yarn preview` | Preview production build locally |
| `yarn test` | Run tests in CLI mode |
| `yarn test:ui` | Run tests with Vitest UI |
| `yarn test:coverage` | Run tests with coverage report |
| `yarn lint` | Lint and fix all source files |
| `yarn format` | Format all source files with Prettier |

## Project Structure

```
vue-ai-template/
├── public/              # Static assets
├── src/
│   ├── assets/         # Asset files (images, styles, etc.)
│   ├── components/     # Vue components
│   │   └── __tests__/  # Component tests
│   ├── composables/    # Vue composables
│   │   └── __tests__/  # Composable tests
│   ├── test/           # Test configuration
│   ├── App.vue         # Root component
│   ├── main.ts         # Application entry
│   └── vite-env.d.ts   # Vite type declarations
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── vitest.config.ts
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [WebStorm](https://www.jetbrains.com/webstorm/)

### VS Code Extensions (Recommended)

- Vue - Official (Volar)
- ESLint
- Prettier
- TypeScript Vue Plugin (Volar)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default. The `src/vite-env.d.ts` file declares `.vue` as a module with proper type definitions.

## Configuration

### TypeScript

This project uses TypeScript with the strictest configuration:
- `strict: true` - All strict type-checking options enabled
- `noUnusedLocals: true` - Report errors on unused locals
- `noUnusedParameters: true` - Report errors on unused parameters
- `noFallthroughCasesInSwitch: true` - Report errors for fallthrough cases in switch

### ESLint & Prettier

- ESLint with TypeScript support and Vue plugin
- Prettier for consistent code formatting
- Semi-colons disabled
- Single quotes preferred
- 100 characters line width

### Testing

Vitest is configured with:
- jsdom environment for DOM testing
- @testing-library/vue for component testing
- Coverage reports with v8 provider
- Global test utilities available

## License

[MIT](LICENSE)

## Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
