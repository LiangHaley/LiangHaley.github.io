---
nav:
  path: /hooks
---
# useLatest

返回当前最新值的 Hook，可以避免闭包问题。

## demo
<code src="./demo/demo1.tsx">

## API
```typescript
const LatestValueRef = useLatest<T>(value:T);
```