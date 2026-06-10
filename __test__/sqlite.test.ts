import { CONSTANT_DATA } from '$/configs/data.js'
import { createAPI } from '@wetoria/siyuan-sdk'
import { describe, expect, it } from 'vitest'

const sdk = createAPI({
  baseURL: CONSTANT_DATA.syHost_Test,
  token: CONSTANT_DATA.syToken,
})

// TODO: [FUTURE] When you start using the Sqlite API, please enable and complete these test cases
describe.skip('Sqlite API', () => {
  describe('flushTransactions', () => {
    it('should flush transactions', async () => {
      // TODO: Add test parameters and assertions
      const result = await sdk.flushTransactions()
      expect(result).toBeDefined()
    })
  })
})

