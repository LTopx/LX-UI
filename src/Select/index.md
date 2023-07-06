---
nav: 组件
group:
  title: 组件列表
  order: 0
order: 0
---

# Select 选择器

当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项。

## 代码示例

#### 基础用法

<code src="./demo/basic.tsx"></code>

#### 尺寸大小

<code src="./demo/size.tsx"></code>

## API

### Select Props

| 属性         | 描述                             | 类型                         | 默认值 |
| ------------ | -------------------------------- | ---------------------------- | ------ |
| placeholder  | 默认占位文本                     | `string`                     | -      |
| disabled     | 是否禁用                         | `boolean`                    | false  |
| loading      | 是否正在加载下拉列表数据         | `boolean`                    | false  |
| size         | 尺寸大小                         | `sm` `\|` `base` ` \|` `lg ` | `base` |
| options      | 下拉选项列表                     | `SelectOption[]`             | -      |
| defaultValue | 默认选中条目                     | `string`                     | -      |
| value        | 当前选中的条目                   | `string`                     | -      |
| onChange     | 选中条目发生变化时，会触发此方法 | `(value: string) => void`    | -      |

### Option Props

| 属性     | 描述           | 类型                            | 默认值 |
| -------- | -------------- | ------------------------------- | ------ |
| label    | 选项展示内容   | `React.ReactNode` `\|` `string` | -      |
| value    | 选项选中时的值 | `string`                        | -      |
| disabled | 是否禁用       | `boolean`                       | false  |
