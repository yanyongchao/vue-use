---
map:
  path: /hooks/use-local-storage-state
---

# useLocalStorageState

一个可以将状态持久化存储在 localStorage 中的 Hook 。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="将 state 持久化在 localStorage 中"
  desc="刷新页面后，可以看到输入框中的内容被从 localStorage 中恢复了。">
</demo>

## API

```typescript
const state = useLocalStorageState(
  key: string,
  defaultValue: any
);
```

### Params

| 参数  | 说明  | 类型  | 默认值  |
| ------------ | ------------------------ | ------------------------------------------------ | ------- |
| key | 用来指定在 localStorage 中存储时所使用的 key | `string` | -
| defaultValue | 可选项，传入默认的状态值 | `any` | -

### Result

| 参数    | 说明     | 类型      |
| ------- | -------- | --------- |
| state   | localStorage 中存储的值   | -         |
