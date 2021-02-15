---
map:
  path: /hooks/use-in-view-port/
---

# useViewPort

一个用于判断 dom 元素是否在可视范围之内的 Hook。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="基础用法"
  desc="使用 ref 设置需要需要监听的元素。">
</demo>

## API

```typescript
const isHovering = useHover(
  target, 
  {
   onEnter,
   onLeave
  }
);
```

### Params

| 参数    | 说明                  | 类型                | 默认值 |
|---------|-----------------------|---------------------|--------|
| target  | DOM 节点或者 Ref 对象 |  `HTMLElement` \| `window` \| `document` \| `Ref<HTMLElement | window | document | null>` | -      |
| options | 额外的配置项 | `Options`                 | `{}`     |

### Options

| 参数     | 说明                       | 类型      | 默认值  |
|----------|----------------------------|-----------|---------|
| onEnter | 监听进入 hover        | `()=>void`            | -      |
| onLeave | 监听离开 hover        | `()=>void`            | -      |

### Result

| 参数       | 说明                            | 类型    |
|------------|---------------------------------|---------|
| isHovering | 判断鼠标元素是否处于 hover 元素 | `boolean` |