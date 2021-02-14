---
map:
  path: /hooks/use-debounce
---

# useDebounce

用来处理防抖值的 Hook。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="基础用法"
  desc="DebouncedValue 只会在输入结束 500ms 后变化。">
</demo>

## API

```typescript
const debouncedValue = useDebounce(
  value: any,
  options?: DebounceOptions
);

type DebounceOptions = {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}
```

### Params

| 参数    | 说明                               | 类型      | 默认值 |
| ------- | ---------------------------------- | --------- | ------ |
| value   | 需要防抖的值                       | `any`     | -      |
| options | 配置防抖的行为，详见下面的 Options | `Options` | `{}`   |

### Options

| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| wait     | 超时时间，单位为毫秒       | `number`  | `1000`  |
| leading  | 是否在上升沿触发副作用函数 | `boolean` | `false` |
| trailing | 是否在下降沿触发副作用函数 | `boolean` | `true`  |

### Result
| 参数     | 说明                       | 类型      | 默认值  |
| -------- | -------------------------- | --------- | ------- |
| debouncedValue | 防抖值 | `Ref<any>` | `-`  |