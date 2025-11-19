# @wetoria/siyuan-sdk

SiYuan SDK for TypeScript

## Installation

```bash
pnpm add @wetoria/siyuan-sdk
```

## Usage

```typescript
import { createClient } from '@wetoria/siyuan-sdk'

// Create a client instance
const client = createClient({
  baseURL: 'http://localhost:6806',
  token: 'your-token',
  timeout: 30000,
})

// Make API requests
const response = await client.request('/api/notebook/lsNotebooks')
console.log(response.data)
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

