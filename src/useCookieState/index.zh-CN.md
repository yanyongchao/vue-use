---
map:
  path: /hooks/use-cookie-state
---

# useCookieState

一个可以将状态持久化存储在 cookie 中的 Hook 。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="将 state 持久化在 cookie 中"
  desc="刷新页面后，可以看到输入框中的内容被从 cookie 中恢复了。">
</demo>

## API

```typescript
const state = useCookieState(
  cookieKey: string,
  options: CookieOptions
);
```

### Params

| 参数  | 说明  | 类型  | 默认值  |
| ------------ | ------------------------ | ------------------------------------------------ | ------- |
| cookieKey | 用来指定在 cookie 中存储时所使用的 key | `string` | -
| options | 可选项，保存cookie时的设置 | `CookieOptions` | -

### Result

| 参数    | 说明     | 类型      |
| ------- | -------- | --------- |
| state   | cookie 中存储的值   | -         |
