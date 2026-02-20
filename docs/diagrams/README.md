# Vue 3 + TypeScript 项目架构图

本目录包含完整的 Excalidraw 架构图，用于记录 Vue 3 + TypeScript + Vite 模板项目的结构和工作流程。

## 概述

这些图表作为可视化文档，帮助开发者、架构师和新团队成员理解：

- 项目文件组织
- 构建和开发工作流程
- 测试框架设置
- 组件通信模式
- TypeScript 配置结构
- 代码质量流程
- VueUse 工具集成

## 可用图表

| # | 文件 | 描述 | 使用场景 |
|---|------|-------------|-------------|
| 1 | `01-directory-structure.excalidraw` | 文件组织可视化概览 | 新开发者入职，理解项目布局 |
| 2 | `02-architecture-layers.excalidraw` | 分层架构和关注点分离 | 理解系统设计、架构决策 |
| 3 | `03-build-process.excalidraw` | 开发和构建工作流程 | 设置构建流程、排查构建问题 |
| 4 | `04-testing-framework.excalidraw` | 测试设置和工作流程 | 编写测试、理解测试配置 |
| 5 | `05-component-communication.excalidraw` | 组件数据流模式 | 构建功能、理解 props/emits |
| 6 | `06-typescript-config.excalidraw` | TypeScript 项目引用 | 配置 TypeScript、理解类型检查 |
| 7 | `07-code-quality-pipeline.excalidraw` | 代码检查和格式化工作流程 | 设置代码质量工具、CI/CD 配置 |
| 8 | `08-vueuse-integration.excalidraw` | VueUse 工具集成 | 使用 VueUse 函数、创建 composables |

## 如何查看图表

### 方式一：在线查看器（推荐）

1. 访问 [https://excalidraw.com](https://excalidraw.com)
2. 点击左上角的菜单图标 (☰)
3. 选择"打开"或直接拖放 `.excalidraw` 文件
4. 根据需要查看、编辑和导出

### 方式二：VS Code 扩展

1. 从 VS Code Marketplace 安装 **Excalidraw** 扩展
   - 在扩展中搜索"Excalidraw"
   - 点击"安装"
2. 直接在 VS Code 中打开任意 `.excalidraw` 文件
3. 通过完整的 VS Code 集成进行编辑

### 方式三：导出为图片

从 Excalidraw（在线或 VS Code）中，您可以将图表导出为：

- **PNG** - 用于文档和演示
- **SVG** - 用于可缩放的矢量图形
- **JSON** - 原生 Excalidraw 格式，用于进一步编辑

## 阅读图表

### 颜色编码

所有图表使用一致的配色方案：

| 颜色 | 用途 |
|-------|---------|
| 蓝色 | 主要元素、源代码 |
| 绿色 | 业务逻辑、composables、成功状态 |
| 紫色 | 基础设施、框架、外部依赖 |
| 黄色 | 工具、共享代码、配置 |
| 红色 | 构建输出、生产产物 |
| 灰色 | 配置文件、工具 |

### 排版

- **标题（24px）**：图表标题
- **副标题（18-20px）**：章节标签
- **正文（14-16px）**：描述和详细信息
- **所有文本使用**：`fontFamily: 5`（Excalifont）以保持一致性

### 箭头含义

- **实线箭头**：直接依赖、数据流或执行顺序
- **虚线箭头**：配置关系、可选路径
- **箭头粗细**：关系的重要程度

## 设计标准

### 布局原则

- **网格对齐**：元素对齐到 20px 网格
- **间距**：相关元素之间 20-40px
- **流向**：从左到右或从上到下的阅读方向
- **分组**：相关元素在视觉上分组

### 元素类型

| 元素 | 用途 |
|---------|-------|
| 矩形 | 组件、文件、流程 |
| 椭圆 | 起点/终点、关键概念 |
| 菱形 | 决策点（当前图表中未使用） |
| 箭头 | 关系、数据流 |
| 文本 | 标签、描述、注释 |

## 更新图表

### 何时更新

在以下情况下更新图表：

- 项目结构发生重大变化
- 添加新的主要依赖
- 构建或测试工作流程发生变化
- 采用新的组件模式
- 文档变得不准确

### 更新流程

1. **打开图表**在 Excalidraw 中（在线或 VS Code）
2. **进行必要的更改**，保持设计标准
3. **更新此 README**（如果图表目的或内容发生变化）
4. **提交更改**并附带描述性消息：
   ```bash
   git add docs/diagrams/
   git commit -m "docs: 更新目录结构图以反映新功能"
   ```

### 更新指南

- **保持一致性**与现有的配色方案和排版
- **控制元素数量**在 20 个以内以确保清晰度
- **谨慎使用文本** - 让视觉结构来传达信息
- **测试可读性**通过不同的缩放级别查看

## 贡献

添加新图表时：

1. 遵循命名约定：`##-图表名称.excalidraw`
2. 使用既定的设计标准（颜色、字体、布局）
3. 用新图表信息更新此 README
4. 包含图表目的的简要描述
5. 注明何时应使用或引用该图表

## 相关文档

- [项目规划](../plans/project-architecture-diagrams.md) - 详细规划文档
- [CLAUDE.md](../../CLAUDE.md) - 项目概述和编码指南
- [README.md](../../README.md) - 项目自述文件
- [Vue.js 文档](https://vuejs.org/) - Vue 3 官方文档
- [Vite 文档](https://vitejs.dev/) - Vite 官方文档
- [VueUse 文档](https://vueuse.org/) - VueUse 官方文档

## 故障排除

### 图表无法打开

- **检查文件扩展名**：必须是 `.excalidraw`
- **验证文件完整性**：确保文件是有效的 JSON
- **尝试在线查看器**：如果 VS Code 扩展失败，使用 https://excalidraw.com

### 文本显示乱码

- **检查字体**：所有文本应使用 `fontFamily: 5`（Excalifont）
- **更新 Excalidraw**：确保您使用的是最新版本
- **清除缓存**：刷新页面或重启 VS Code

### 元素缺失

- **缩小视图**：元素可能在可见区域之外
- **检查画布大小**：在 Excalidraw 中调整画布大小
- **验证 JSON**：确保文件包含有效的元素数据

## 许可证

这些图表是 vue_claude_code 项目的一部分，遵循相同的许可条款。

## 联系方式

有关这些图表的问题或建议，请参阅项目的贡献指南或提出 issue。
