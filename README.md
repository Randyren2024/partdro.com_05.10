# HydroDrone 公司网站项目

## 项目概述

HydroDrone是一个基于React和Vite构建的现代化企业网站，提供多语言支持、响应式设计和内容管理功能。该项目采用了TypeScript进行类型检查，使用Tailwind CSS进行样式管理，并集成了Ant Design组件库。

## 主要功能

- **多语言支持**：基于i18next实现国际化，目前支持中文、英文、法语、德语、西班牙语和日语
- **响应式设计**：适配各种设备屏幕尺寸的用户界面
- **内容管理**：集成React Bricks提供简单的内容管理功能
- **SEO优化**：使用React Helmet进行元数据管理，优化搜索引擎索引
- **分析追踪**：集成Google Analytics和Google Tag Manager进行用户行为分析

## 技术栈

- **前端框架**：React 18
- **构建工具**：Vite
- **语言**：TypeScript
- **UI组件库**：Ant Design
- **样式工具**：Tailwind CSS
- **路由管理**：React Router
- **国际化**：i18next
- **内容管理**：React Bricks
- **图标**：Lucide React

## 项目结构

```
├── src/
│   ├── components/      # 可复用组件
│   ├── i18n/            # 国际化配置和语言文件
│   │   └── locales/     # 多语言翻译JSON文件
│   ├── pages/           # 网站页面组件
│   ├── react-bricks/    # 内容管理系统配置
│   ├── utils/           # 工具函数
│   ├── App.tsx          # 应用主组件
│   └── main.tsx         # 应用入口
├── public/              # 静态资源
├── index.html           # HTML模板
├── tailwind.config.js   # Tailwind配置
└── vite.config.ts       # Vite配置
```

## 页面

- **首页**：展示公司信息和特色内容
- **产品页**：展示公司产品和服务
- **博客页**：公司新闻和文章
- **关于我们**：公司介绍和团队信息
- **联系我们**：联系表单和联系信息
- **管理后台**：内容管理系统入口

## 如何运行

### 前提条件

- Node.js 16+
- npm 或 yarn

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 本地预览生产版本

```bash
npm run preview
# 或
yarn preview
```

## 部署

项目可以部署到任何静态网站托管服务，如Netlify、Vercel、GitHub Pages等。

## 联系方式

有关此项目的任何问题，请联系项目维护者。 