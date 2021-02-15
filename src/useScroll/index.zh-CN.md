---
map:
  path: /hooks/use-scroll/
---

# useScroll

获取元素的滚动状态。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="基础用法"
  desc="点击按钮查看效果。">
</demo>

## API

```typescript
const position = useScroll(target);
```

### Params

| 参数    | 说明                  | 类型                | 默认值 |
|---------|-----------------------|---------------------|--------|
| target  | DOM 节点或者 Ref 对象 |  `HTMLElement` \| `window` \| `document` \| `Ref<HTMLElement | window | document | null>` | -      |

### Result

| 参数     | 说明                   | 类型                          |
|----------|------------------------|-------------------------------|
| position | 滚动容器当前的滚动位置 | `{left: number, top: number}` |
