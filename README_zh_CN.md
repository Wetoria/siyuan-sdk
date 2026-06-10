# @wetoria/siyuan-sdk

SiYuan SDK for TypeScript

[English](./README.md) | [中文文档](./README_zh_CN.md)

## API 文档

API 同步自思源 v3.3.6。

- [思源 API 文档](https://github.com/siyuan-note/siyuan/blob/master/API.md)
- [思源 API 文档（中文）](https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md)

> **提示：** 对于部分未公开的 API，可以参考 [`kernel/api/router.go`](https://github.com/siyuan-note/siyuan/blob/master/kernel/api/router.go) 获取 API 路径。请注意，这些未公开的 API 可能并不稳定，未来也有可能发生变动，使用时请注意。

## Installation

```bash
pnpm add @wetoria/siyuan-sdk
```

## Usage

### 基本使用

```typescript
import { createAPI } from '@wetoria/siyuan-sdk'

// 方式 1: 使用 baseURL 和 token
const sdk = createAPI({
  baseURL: 'http://localhost:6806',
  token: 'your-token',
})

// 调用 API
const notebooks = await sdk.lsNotebooks()
console.log(notebooks.data)
```

### 使用自定义 Fetch

例如：在思源插件中，注入 siyuan 内部的 `fetchSyncPost`。

```typescript
import { createAPI } from '@wetoria/siyuan-sdk'
import { fetchSyncPost } from 'siyuan'

// 方式 2: 使用 customFetch（适用于思源插件环境）
const sdk = createAPI({
  customFetch: async (url, data) => {
    const response = await fetchSyncPost(url, data)
    return response.code === 0 ? response.data : null
  },
})

// 调用 API
const notebooks = await sdk.lsNotebooks()
```

## ⚠️ 重要提示

**大多数 API 由 AI 补全，未经充分验证。** 如某个 API 使用有误，可参考下方"补充不存在的 API"部分自行补充或修正。

## 补充不存在的 API

如果 SDK 中缺少某个 API 方法，你可以通过以下方式自行添加：

### 方法 1: 扩展类型并添加实现

```typescript
import { createAPI, SyApiResponse } from '@wetoria/siyuan-sdk'

// 1. 扩展 SiYuanAPI 接口类型
declare module '@wetoria/siyuan-sdk' {
  interface SiYuanAPI {
    // 定义你的自定义方法
    myCustomMethod: (param: string) => Promise<SyApiResponse<any>>
  }
}

// 2. 创建 SDK 实例
const sdk = createAPI({
  baseURL: 'http://localhost:6806',
  token: 'your-token',
})

// 3. 实现自定义方法
sdk.myCustomMethod = function (param: string) {
  return this.request('/api/custom/endpoint', { param })
}

// 4. 使用自定义方法
const result = await sdk.myCustomMethod('value')
```

### 方法 2: 直接使用 request 方法

如果只是临时使用，可以直接调用 `request` 方法：

```typescript
import { createAPI } from '@wetoria/siyuan-sdk'

const sdk = createAPI({
  baseURL: 'http://localhost:6806',
  token: 'your-token',
})

// 直接调用 request 方法
const result = await sdk.request('/api/custom/endpoint', {
  param: 'value',
})
```

## Development

```bash
# Build
pnpm build

# Watch mode
pnpm dev

# Clean
pnpm clean
```

## License

MIT

