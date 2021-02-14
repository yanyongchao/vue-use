---
map:
  path: /hooks/use-click-away/
---

# useClickAway

监听点击元素外部的事件。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="基础用法"
  desc="请点击按钮或按钮外查看效果。">
</demo>

## API

```typescript
function useClickAway(
  target: Element | Ref<Element | undefined | null>,
  listener: EventListener,
  options?: Options
): void;

type Options = {
  eventName?: string;
};
```

### 参数

| 参数     | 说明                     | 类型                       | 默认值 |
| -------- | ------------------------ | -------------------------- | ------ |
| target   | 绑定事件的元素           | _Element \| Ref\<Element>_ | -      |
| listener | 点击外部时触发的回调函数 | _EventListener_            | -      |
| options  | 可选的配置项             | _Options_                  | 见下表 |

### Options

| 参数      | 说明           | 类型     | 默认值  |
| --------- | -------------- | -------- | ------- |
| eventName | 监听的事件类型 | _string_ | `click` |
