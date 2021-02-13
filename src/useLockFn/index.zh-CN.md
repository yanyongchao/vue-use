---
map:
  path: /hooks/use-lock-fn
---

# useLockFn

用于给一个异步函数增加竞态锁，防止并发执行。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="防止重复提交"
  desc="在 submit 函数执行完成前，其余的点击动作都会被忽略。">
</demo>

## API

```typescript
function useLockFn<P extends any[] = any[], V extends any = any>(
  fn: (...args: P) => Promise<V>
): fn: (...args: P) => Promise<V | undefined>
```

### Params

| 参数           | 说明             | 类型                      | 默认值 |
|----------------|------------------|---------------------------|--------|
| fn             | 需要增加竞态锁的函数 | `(...args: any[]) => any` | -      |

### Result

| 参数 | 说明                      | 类型                      |
|------|---------------------------|---------------------------|
| fn   | 增加了竞态锁的函数 | `(...args: any[]) => any` |