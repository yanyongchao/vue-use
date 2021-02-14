---
map:
  path: /hooks/use-debounce-fn
---

# useDebounceFn

用来处理防抖函数的 Hook。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="基础用法"
  desc="频繁调用 run，但只会在所有点击完成 500ms 后执行一次相关函数">
</demo>

## API

```typescript
const {
  run,
  cancel,
  flush
} = useDebounceFn(
  fn: (...args: any[]) => any,
  options?: DebounceOptions
);
type DebounceOptions = {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}
```

### Params

| 参数    | 说明                               | 类型                      | 默认值 |
|---------|------------------------------------|---------------------------|--------|
| fn      | 需要防抖执行的函数                 | `(...args: any[]) => any` | -      |
| options | 配置防抖的行为，详见下面的 Options | `Options`                 | `{}`     |

### Options

| 参数     | 说明                       | 类型      | 默认值  |
|----------|----------------------------|-----------|---------|
| wait     | 超时时间，单位为毫秒       | `number`  | `1000`  |
| leading  | 是否在上升沿触发副作用函数 | `boolean` | `false` |
| trailing | 是否在下降沿触发副作用函数 | `boolean` | `true`  |

### Result

| 参数   | 说明                               | 类型         |
|--------|------------------------------------|--------------|
| run    | 触发执行 fn，函数参数将会传递给 fn | `(...args: any[]) => any` |
| cancel | 取消当前防抖                       | `() => void` |
| flush  | 当前防抖立即调用                   | `() => void` |
