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

### Options

| 参数     | 说明                                              | 类型                  | 默认值 |
| -------- | ------------------------------------------------- | --------------------- | ------ |
| defaultValue | 可选，定义 cookie 默认值，但不同步到本地 cookie | `string` \| `undefined` \| `(() => (string \| undefined))` | `undefined` |
| expires  | 可选，定义 cookie 存储有效时间 | `number` \| `Date` | - |
| path | 可选，定义 cookie 可用的路径 | `string` | `/` |
| domain | 可选，定义 cookie 可用的域，默认为 cookie 创建的域名 | `string` | - |
| secure | 可选，cookie 传输是否需要 https 安全协议 | `boolean` | `false` |
| sameSite | 可选，cookie 不能与跨域请求一起发送 | `strict` \| `lax` \| `none` | - |

Options 与 [js-cookie attributes](https://github.com/js-cookie/js-cookie#cookie-attributes) 保持一致。

### Result

| 参数    | 说明     | 类型      |
| ------- | -------- | --------- |
| state   | cookie 中存储的值   | `any`        |
