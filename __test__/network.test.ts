import { CONSTANT_DATA } from '$/configs/data.js'
import { createAPI } from '@wetoria/siyuan-sdk'
import { describe, expect, it } from 'vitest'

const sdk = createAPI({
  baseURL: CONSTANT_DATA.syHost_Test,
  token: CONSTANT_DATA.syToken,
})

// TODO: [FUTURE] When you start using the Network API, please complete these test cases
describe('Network API', () => {
  describe('forwardProxy', () => {
    // TODO: [FUTURE] When you start using the `forwardProxy` method, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should forward proxy request')

    // TODO: [FUTURE] When you start using the `forwardProxy` method with all parameters, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should forward proxy request with all parameters')
  })
})

