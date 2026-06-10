import { CONSTANT_DATA } from '$/configs/data.js'
import { createAPI } from '@wetoria/siyuan-sdk'
import { describe, expect, it } from 'vitest'

const sdk = createAPI({
  baseURL: CONSTANT_DATA.syHost_Test,
  token: CONSTANT_DATA.syToken,
})

// TODO: [FUTURE] When you start using the Notification API, please complete these test cases
describe('TODO: Notification API', () => {
  describe('pushMsg', () => {
    // TODO: [FUTURE] When you start using the `pushMsg` method, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should push a message notification')

    // TODO: [FUTURE] When you start using the `pushMsg` method with timeout, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should push a message notification with timeout')
  })

  describe('pushErrMsg', () => {
    // TODO: [FUTURE] When you start using the `pushErrMsg` method, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should push an error message notification')

    // TODO: [FUTURE] When you start using the `pushErrMsg` method with timeout, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should push an error message notification with timeout')
  })
})

