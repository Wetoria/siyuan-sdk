# @wetoria/siyuan-sdk

SiYuan SDK for TypeScript

[中文文档](./README_zh_CN.md) | [English](./README.md)

## API Documentation

APIs are synced from SiYuan v3.3.6.

- [SiYuan API Documentation](https://github.com/siyuan-note/siyuan/blob/master/API.md)
- [SiYuan API Documentation (Chinese)](https://github.com/siyuan-note/siyuan/blob/master/API_zh_CN.md)

> **Note:** For some undocumented APIs, you can refer to [`kernel/api/router.go`](https://github.com/siyuan-note/siyuan/blob/master/kernel/api/router.go) for API paths. Please note that these undocumented APIs may be unstable and subject to change in the future.

## Installation

```bash
pnpm add @wetoria/siyuan-sdk
```

## Usage

### Basic Usage

```typescript
import { createAPI } from '@wetoria/siyuan-sdk'

// Method 1: Using baseURL and token
const sdk = createAPI({
  baseURL: 'http://localhost:6806',
  token: 'your-token',
})

// Call API
const notebooks = await sdk.lsNotebooks()
console.log(notebooks.data)
```

### Using Custom Fetch

For example: In SiYuan plugins, inject SiYuan's internal `fetchSyncPost`.

```typescript
import { createAPI } from '@wetoria/siyuan-sdk'
import { fetchSyncPost } from 'siyuan'

// Method 2: Using customFetch (for SiYuan plugin environment)
const sdk = createAPI({
  customFetch: async (url, data) => {
    const response = await fetchSyncPost(url, data)
    return response.code === 0 ? response.data : null
  },
})

// Call API
const notebooks = await sdk.lsNotebooks()
```

## ⚠️ Important Notice

**Most APIs are AI-generated and have not been fully verified.** If an API is used incorrectly, you can refer to the "Adding Missing APIs" section below to add or fix it yourself.

## Adding Missing APIs

If an API method is missing from the SDK, you can add it yourself using the following methods:

### Method 1: Extend types and add implementation

```typescript
import { createAPI, SyApiResponse } from '@wetoria/siyuan-sdk'

// 1. Extend the SiYuanAPI interface type
declare module '@wetoria/siyuan-sdk' {
  interface SiYuanAPI {
    // Define your custom method
    myCustomMethod: (param: string) => Promise<SyApiResponse<any>>
  }
}

// 2. Create SDK instance
const sdk = createAPI({
  baseURL: 'http://localhost:6806',
  token: 'your-token',
})

// 3. Implement custom method
sdk.myCustomMethod = function (param: string) {
  return this.request('/api/custom/endpoint', { param })
}

// 4. Use custom method
const result = await sdk.myCustomMethod('value')
```

### Method 2: Directly use request method

If you only need to use it temporarily, you can directly call the `request` method:

```typescript
import { createAPI } from '@wetoria/siyuan-sdk'

const sdk = createAPI({
  baseURL: 'http://localhost:6806',
  token: 'your-token',
})

// Directly call request method
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
