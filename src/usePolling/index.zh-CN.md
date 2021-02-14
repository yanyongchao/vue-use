---
map:
  path: /hooks/use-polling
---

# usePolling

轮询工具函数。

## Examples

### 基础用法

<demo src="./demo/demo.vue"
  language="vue"
  title="基础用法"
  desc="进入轮询模式，定时触发函数执行">
</demo>

## API

```typescript
let polling = usePolling()
let cancelPolling: Function = polling.startPolling({
  cb: Function, // 轮询函数
  time: number, // 轮询时间
  isAsync: boolean // 是否是同步
})
```

### Result

| 参数 | 说明                      | 类型                      |
|------|---------------------------|---------------------------|
| startPolling   | 轮询开始函数 | `(time = 1000, cb, isAsync = true) => Function` |

### cancelPolling
| 参数 | 说明                      | 类型                      |
|------|---------------------------|---------------------------|
| cancelPolling   | 轮询结束函数 | `Function` |