# Vue 3 + TypeScript 项目架构图

## 概述

本文档描述为 Vue 3 + TypeScript + Vite 模板项目创建的完整 Excalidraw 架构图集合。这些图表作为可视化文档，帮助开发者、架构师和新团队成员理解项目结构、构建工作流程和设计模式。

**项目**：vue_claude_code (Vue 3.5.13 + TypeScript 5.7.2 + Vite 6.0.11 + Vitest 2.1.8)

## 图表汇总

| # | 图表名称 | 文件名 | 用途 |
|---|--------------|-----------|---------|
| 1 | 项目目录结构 | `01-directory-structure.excalidraw` | 文件组织可视化概览 |
| 2 | 架构分层 | `02-architecture-layers.excalidraw` | 展示分层架构和关注点分离 |
| 3 | 构建流程 | `03-build-process.excalidraw` | 记录开发和构建工作流程 |
| 4 | 测试框架 | `04-testing-framework.excalidraw` | 说明测试设置和工作流程 |
| 5 | 组件通信 | `05-component-communication.excalidraw` | 展示组件通信方式和数据流 |
| 6 | TypeScript 配置 | `06-typescript-config.excalidraw` | 记录 TypeScript 项目引用 |
| 7 | 代码质量管道 | `07-code-quality-pipeline.excalidraw` | 展示代码检查、格式化和 QA 工作流程 |
| 8 | VueUse 集成 | `08-vueuse-integration.excalidraw` | 说明 VueUse 工具集成 |

## 设计标准

### 配色方案

所有图表使用一致的配色方案：

```
背景：#FFFFFF（白色）
文本：#333333（深灰色）

- 蓝色：   #E3F2FD（浅色），#1976D2（边框）
- 绿色：  #E8F5E9（浅色），#388E3C（边框）
- 紫色： #F3E5F5（浅色），#7B1FA2（边框）
- 黄色： #FFF9C4（浅色），#FBC02D（边框）
- 红色：   #FFCDD2（浅色），#D32F2F（边框）
- 灰色：  #ECEFF1（浅色），#607D8B（边框）
```

### 排版

所有文本元素使用 `fontFamily: 5`（Excalifont）以保持一致的视觉效果：

- **标题**：24px，粗体
- **副标题**：18px，半粗体
- **正文**：14px，常规
- **标签**：12px，常规

### 布局原则

- 一致的间距：元素之间 20-40px
- 网格对齐以获得整洁的布局
- 从左到右或从上到下的阅读方向
- 相关元素在视觉上分组

## 图表说明

### 1. 项目目录结构

**类型**：分层树形图

显示项目的完整文件组织，包括：
- 根配置文件
- 源代码结构（`src/`）
- 公共资源
- 技能目录
- 构建和工具配置

### 2. 架构分层

**类型**：分层架构图

展示三层架构：
- **表示层**：带有模板和样式的 Vue 组件
- **业务逻辑层**：组合函数和 composables
- **基础设施层**：Vue 3、TypeScript、Vite、Vitest、VueUse

箭头显示依赖关系向下流动。

### 3. 构建流程

**类型**：流程图

记录完整的构建生命周期：
- 源文件（*.vue、*.ts、*.css）
- 带有 HMR（热模块替换）的开发模式
- 生产构建过程（vue-tsc 类型检查、Vite 打包）
- 输出目标（开发环境的 localhost:5173、生产环境的 /dist）

### 4. 测试框架

**类型**：组件关系图

展示测试生态系统：
- **中央**：Vitest 测试运行器
- **左侧**：`__tests__` 目录中的测试文件
- **底部**：测试设置（setup.ts、jsdom 环境、@testing-library）
- **右侧**：报告输出（文本控制台、HTML 覆盖率、JSON 报告）

### 5. 组件通信

**类型**：数据流图

说明 Vue 3 组件通信模式：
- **顶部**：App.vue（根组件）
- **中间**：子组件（HelloWorld.vue、VueUseDemo.vue）
- **底部**：Composables（useCounter.ts、useVueUseExample.ts）
- **箭头**：
  - 实线箭头：Props（父组件 → 子组件）
  - 虚线箭头：Emits（子组件 → 父组件）

### 6. TypeScript 配置

**类型**：配置依赖图

记录 TypeScript 项目引用：
- **顶部**：根 tsconfig.json
- **左下**：tsconfig.node.json（Node.js 配置）
- **右下**：tsconfig.app.json（应用程序配置）
- **右侧**：共享依赖（@tsconfig/strictest、@tsconfig/node22）
- **箭头**：配置之间的"extends"关系

### 7. 代码质量管道

**类型**：管道流程图

展示质量保证工作流程：
- **左侧**：源代码输入
- **中间**：ESLint 处理（vue-eslint-parser、typescript-eslint、插件）
- **中间**：Prettier 格式化（.prettierrc 配置）
- **右侧**：已检查和格式化的输出
- **底部**：Git 钩子（pre-commit、pre-push）

### 8. VueUse 集成

**类型**：集成架构图

说明 VueUse 工具的集成方式：
- **顶部**：@vueuse/core 库
- **中间**：useVueUseExample.ts composable
- **底部**：VueUseDemo.vue 组件
- **侧面板**：数据流示例（useStorage、useWindowSize、useMouse）

## 引用的关键文件

| 文件 | 用途 |
|------|---------|
| `package.json` | 所有图表的依赖和脚本 |
| `vite.config.ts` | 图表 3 的构建配置 |
| `vitest.config.ts` | 图表 4 的测试配置 |
| `tsconfig.json` | 图表 6 的 TypeScript 根配置 |
| `src/App.vue` | 图表 5 的组件结构 |
| `src/components/` | 图表 5 的组件示例 |
| `src/composables/` | 图表 2、5、8 的组合函数 |
| `eslint.config.js` | 图表 7 的代码检查配置 |
| `.prettierrc` | 图表 7 的格式化配置 |

## 查看说明

### 在线查看器

1. 访问 https://excalidraw.com
2. 点击菜单 (☰) → "打开"
3. 选择要查看的 `.excalidraw` 文件
4. 根据需要编辑和保存

### VS Code 扩展

1. 从 VS Code Marketplace 安装"Excalidraw"扩展
2. 直接在 VS Code 中打开任意 `.excalidraw` 文件
3. 通过完整的 VS Code 集成进行编辑和保存

### 导出选项

从 Excalidraw 中，您可以将图表导出为：
- PNG 图像
- SVG 矢量图形
- JSON（原生格式）

## 维护指南

### 何时更新图表

在以下情况下更新这些图表：
- 项目结构发生重大变化
- 添加新的主要依赖
- 构建工作流程被修改
- 测试配置发生变化
- 采用新的组件模式

### 更新流程

1. 确定需要更新的图表
2. 在 Excalidraw 中打开（在线或 VS Code）
3. 进行必要的更改
4. 如果图表目的发生变化，更新此规划文档
5. 提交更改并附带描述性消息

### 版本控制

所有图表文件都在 Git 中跟踪。修改时：
- 使用描述性的提交消息
- 引用相关问题或 PR
- 如果与利益相关者共享，请在文档中包含截图

## 输出位置

- **规划文档**：`/docs/plans/`
- **Excalidraw 图表**：`/docs/diagrams/`

## 相关文档

- [CLAUDE.md](../../CLAUDE.md) - 项目概述和编码指南
- [README.md](../../README.md) - 项目自述文件
- [Vue.js 文档](https://vuejs.org/) - Vue 3 官方文档
- [Vite 文档](https://vitejs.dev/) - Vite 官方文档
- [VueUse 文档](https://vueuse.org/) - VueUse 官方文档
