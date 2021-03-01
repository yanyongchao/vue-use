---
map:
  path: /hooks/use-in-view-port/
---

# useInViewPort

一个用于判断 dom 元素是否在可视范围之内的 Hook。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="基础用法"
  desc="使用 ref 监听节点在视图变化或者滚动时是否在可视范围之内">
</demo>

## API

```typescript
const inViewPort = useInViewport(target)
```

### 参数

| 参数   | 说明                      | 类型        | 默认值 |
|--------|---------------------------|-------------|--------|
| target | DOM element or Ref Object | `HTMLElement` \| `Ref<HTMLElement | null>` \| -      |

### 结果

| 参数       | 说明                                  | 类型    |
|------------|---------------------------------------|---------|
| inViewPort | 判断 dom 元素是否在可视范围之内的标志 | `boolean` |
