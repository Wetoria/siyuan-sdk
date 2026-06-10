import { CONSTANT_DATA } from '$/configs/data.js'
import { createAPI } from '@wetoria/siyuan-sdk'
import { describe, expect, it } from 'vitest'

const sdk = createAPI({
  baseURL: CONSTANT_DATA.syHost_Test,
  token: CONSTANT_DATA.syToken,
})

// TODO: [FUTURE] When you start using the Export API, please complete these test cases
describe('Export API', () => {
  describe('exportMdContent', () => {
    // TODO: [FUTURE] When you start using the `exportMdContent` method, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should export Markdown content')
  })

  describe('exportResources', () => {
    // TODO: [FUTURE] When you start using the `exportResources` method, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should export resources')
  })
})

