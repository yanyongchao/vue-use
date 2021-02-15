---
map:
  path: /hooks/use-toggle
---

# useToggle

用于在两个状态值间切换的 Hook。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="基础用法"
  desc="点击按钮，切换值">
</demo>

## API

```typescript
const [state, toggle] = useToggle(
  defaultValue?: boolean,
);
```

### Params

| 参数  | 说明  | 类型  | 默认值  |
| ------------ | ------------------------ | ------------------------------------------------ | ------- |
| defaultValue | 可选项，传入默认的状态值 | `boolean` | -

### Result

| 参数    | 说明     | 类型      |
| ------- | -------- | --------- |
| state   | 状态值   | `boolean`       |
| toggle | 切换状态函数 | `Function` |
