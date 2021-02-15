---
map:
  path: /hooks/use-rect/
---

# useRect

获取元素的大小及其相对于视口的位置，等价于 [Element.getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="基础用法"
  desc="点击按钮查看效果。">
</demo>

## API

```typescript
function useRect((HTMLElement | Document | Window) | Ref<HTMLElement | Document | Window | null>): DOMRect;
```

### Result


| 参数   | 说明                       | 类型     |
| ------ | -------------------------- | -------- |
| width  | 宽度                       | _number_ |
| height | 高度                       | _number_ |
| top    | 顶部与视图窗口左上角的距离 | _number_ |
| left   | 左侧与视图窗口左上角的距离 | _number_ |
| right  | 右侧与视图窗口左上角的距离 | _number_ |
| bottom | 底部与视图窗口左上角的距离 | _number_ |