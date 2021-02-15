---
map:
  path: /hooks/use-size/
---

# useSize

一个用于监听 dom 节点尺寸变化的 Hook。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="基础用法"
  desc="使用 ref 监听节点尺寸变化">
</demo>

## API

```typescript
const size = useSize(target)
```

### 参数

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| target | DOM 节点或者 Refs  | `HTMLElement | Ref<HTMLElement | null>` | -      |

### 结果

| 参数     | 说明                                     | 类型       |
|----------|------------------------------------------|------------|
| size  | dom 节点的尺寸                         | `{ width: number, height: number }`    |
