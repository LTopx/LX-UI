<div align="center">
<h1>LX-UI</h1>
<p>Based on Radix UI and Tailwind CSS. Works great with Next.js!</p>
<p>
<a href="https://www.npmjs.com/package/@ltopx/lx-ui"><img src="https://img.shields.io/npm/v/@ltopx/lx-ui?color=38bdf8&amp;label=" alt="NPM version"></a>
</p>
<p>
English
/
<a href="./README_CN.md">简体中文</a> 
</p>
<p>
<a href="https://lx-ui.ltopx.com">Document</a> 
</p>
</div>

## Introduction

`LX-UI` is a set of React component library developed based on [Radix UI](https://www.radix-ui.com) and [Tailwind CSS](https://tailwindcss.com/).

The purpose of creating this project is to solve the issue of UI consistency for my personal development project, [L-GPT](https://chat.ltopx.com). The initial version may be relatively simple 🤣🤣, but it will gradually iterate and improve in the future.

## Features

- 💎 Based on Radix UI, it enriches and extends some components
- 🔥 Utilizes Tailwind CSS for easy customization of styles in the future
- 🎉 Supports Typescript
- 📱 Responsive design support

## Setup

### Environment

- It is recommended to use pnpm for installation (although npm or yarn can also be used)

  ```bash copy
  npm i -g pnpm
  ```

- Installing Tailwind CSS

  Since LX-UI is based on Tailwind CSS, you need to install and configure Tailwind CSS in your project in order to use it properly. [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation)

### Install

```bash
pnpm add @ltopx/lx-ui
```

### Configuring

Since LX-UI is developed based on Tailwind CSS, you need to modify the `tailwind.config.js` file in your project and add the relevant configurations for LX-UI.

- Add presets configuration.
- Configure content path to resolve LX-UI components.

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

## Usage

```js copy
import { Select } from "@ltopx/lx-ui";

export default function Home() {
  return <Select placeholder="请选择" options={[1, 2, 3]} />;
}
```

## License

[MIT]() License © 2023 Powered by [LTopx](https://github.com/LTopx)
