---
nav: 指南
group: 开发指南
order: 0
---

# 安装

以下将指导你如何在项目中安装 `LX-UI`，快速上手使用。

## 环境准备

- 建议使用 pnpm 安装。

  ```bash
  npm i -g pnpm
  ```

- 依赖插件安装
  项目初期，暂时使用了一些第三方插件，后续会逐步移除。

  ```bash
  pnpm add clsx tailwind-merge
  ```

- Tailwind CSS 安装
  参考链接：https://tailwindcss.com/docs/installation

## 安装 LX-UI

```bash
pnpm add @ltopx/lx-ui
```

## 其他配置

这个也是初期暂时需要的一些配置，后续优化方案后会逐步减少和移除。

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@ltopx/lx-ui/dist/_lib/lx-ui-preset.js')],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 使用 LX-UI

```javascript
import { Select } from '@ltopx/lx-ui';

export default function Home() {
  return (
    <div>
      <Select className="w-44" placeholder="请选择" options={[1, 2, 3]} />
    </div>
  );
}
```
