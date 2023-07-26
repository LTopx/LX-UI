<div align="center">
<h1>LX-UI</h1>
<p>Based on Radix UI and Tailwind CSS. Works great with Next.js!</p>
<p>
<a href="https://www.npmjs.com/package/@ltopx/lx-ui"><img src="https://img.shields.io/npm/v/@ltopx/lx-ui?color=38bdf8&amp;label=" alt="NPM version"></a>
</p>
<p>
<a href="/README.md">English</a>
/
简体中文
</p>
<p>
<a href="https://lx-ui.ltopx.com">项目文档</a> 
</p>
</div>

## 简介

`LX-UI` 是基于 [Radix UI](https://www.radix-ui.com) 和 [Tailwind CSS](https://tailwindcss.com/) 二次封装开发的一套 React 组件库。

项目创建的目的是为了解决个人开发项目 [L-GPT](https://chat.ltopx.com) 的 UI 统一问题。前期可能会比较简陋 🤣🤣，不过后续会逐步迭代完善。

## 特性

- 💎 基于 Radix UI，丰富和拓展了部分组件
- 🔥 使用了 Tailwind CSS，便于后续样式定制
- 🎉 支持 Typescript
- 📱 支持响应式

## 安装

### 环境准备

- 建议使用 pnpm 安装 (当然使用 npm、yarn 也行)

  ```bash copy
  npm i -g pnpm
  ```

- Tailwind CSS 安装

  因为 LX-UI 是基于 Tailwind CSS 的，因此需要在您的项目中安装并配置 Tailwind CSS 才能正常使用。[安装配置参考链接](https://tailwindcss.com/docs/installation)

### 安装 LX-UI

```bash
pnpm add @ltopx/lx-ui
```

### 配置 LX-UI

由于 LX-UI 是基于 Tailwind CSS 开发的，因此需要修改您项目中的 `tailwind.config.js` 文件，添加 LX-UI 的相关配置。

- 添加 presets 预设配置
- 配置 content 路径解析 LX-UI 组件

```js filename="tailwind.config.js" copy {3-4}
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@ltopx/lx-ui/dist/presets")],
  content: ["./node_modules/@ltopx/lx-ui/dist/**/*.{mjs,js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 使用

```js copy
import { Select } from "@ltopx/lx-ui";

export default function Home() {
  return <Select placeholder="请选择" options={[1, 2, 3]} />;
}
```

## License

[MIT]() License © 2023 Powered by [LTopx](https://github.com/LTopx)
