# 02 - 添加 VueUse 库

## 概述

为项目添加 [VueUse](https://vueuse.org/) 库 - Vue 组合式 API 的实用工具集合。

## 目的

在模板中预装 VueUse，方便后续开发直接使用常用的组合式函数。

## 操作步骤

### 1. 安装依赖

```bash
yarn add @vueuse/core
```

安装版本：`@vueuse/core@14.2.0`

### 2. 创建示例文件

**`src/composables/useVueUseExample.ts`**

- 封装常用 VueUse API 的组合函数
- 包含：useStorage, useWindowSize, useMouse, usePreferredDark, useNow

**`src/components/VueUseDemo.vue`**

- 展示 VueUse 各功能的演示组件
- 包含持久化计数器、窗口尺寸、鼠标位置、系统偏好、实时时间

### 3. 更新现有文件

**`src/App.vue`**

- 导入并使用 VueUseDemo 组件
- 添加 VueUse 特性卡片

**`src/components/VueUseDemo.vue`**

- 添加 `data-testid` 属性以便测试选择

### 4. 创建测试文件

**`src/composables/__tests__/useVueUseExample.spec.ts`**

- 测试组合函数返回值
- 6 个测试用例

**`src/components/__tests__/VueUseDemo.spec.ts`**

- 测试组件渲染和交互
- 7 个测试用例

### 5. 更新文档

**`README.md`**

- 添加 VueUse badge
- Features 部分添加 VueUse
- Acknowledgments 添加 VueUse 链接

**`CLAUDE.md`**

- 添加 VueUse Integration 部分
- 列出常用 API 说明

## 验证

```bash
# 运行测试 - 全部通过 (24/24)
yarn test --run

# 构建验证
yarn build
```

## 新增文件

```
src/
├── composables/
│   ├── useVueUseExample.ts
│   └── __tests__/
│       └── useVueUseExample.spec.ts
└── components/
    ├── VueUseDemo.vue
    └── __tests__/
        └── VueUseDemo.spec.ts
```

## 修改文件

```
src/App.vue
README.md
CLAUDE.md
package.json (添加 @vueuse/core 依赖)
yarn.lock
```

## 常用 VueUse API

| API                       | 说明                |
| ------------------------- | ------------------- |
| `useStorage`              | 响应式 localStorage |
| `useWindowSize`           | 窗口尺寸            |
| `useMouse`                | 鼠标位置            |
| `usePreferredDark`        | 系统深色模式偏好    |
| `useNow`                  | 实时时间            |
| `useClipboard`            | 剪贴板 API          |
| `useFetch`                | 响应式 fetch        |
| `useElementSize`          | 元素尺寸观察        |
| `useScroll`               | 滚动位置            |
| `useIntersectionObserver` | 交叉观察器          |

## 注意事项

1. VueUse 所有函数都是自动导入的，不需要额外配置
2. TypeScript 支持开箱即用
3. 服务端渲染 (SSR) 需注意某些 API 的兼容性

---

_操作时间: 2026-02-07_
_VueUse 版本: 14.2.0_
_测试状态: 24/24 通过_
