---
map:
  path: /hooks/use-event-emitter/
---

# useLockFn

在多个组件之间进行事件通知有时会让人非常头疼，借助 EventEmitter ，可以让这一过程变得更加简单。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="父组件向子组件共享事件"
  desc="父组件创建了一个 focus事件，并且将它传递给子组件">
</demo>

## API

```typescript
const event$ = useEventEmitter();
```

### Result

| 参数 | 说明                      | 形参                      |
|------|---------------------------|---------------------------|
| on   | 订阅事件 | `(eventName: string, cb: Function, once?: boolean): void` |
| once   | 订阅事件 | `(eventName: string, cb: Function): void` |
| emit   | 发布事件 | `(eventName: string, ...params?: any[]): void` |
| off   | 取消事件订阅 | `(eventName: string, cb?: Function): void` |