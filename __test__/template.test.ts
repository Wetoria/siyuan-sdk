import { CONSTANT_DATA } from '$/configs/data.js'
import { createAPI } from '@wetoria/siyuan-sdk'
import { describe, expect, it } from 'vitest'

const sdk = createAPI({
  baseURL: CONSTANT_DATA.syHost_Test,
  token: CONSTANT_DATA.syToken,
})

describe('TODO: Template API', () => {
  describe('render', () => {
    // TODO: [FUTURE] When you start using the `render` method, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should render a template')
  })

  describe('renderSprig', () => {
    // TODO: [FUTURE] When you start using the `renderSprig` method, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should render Sprig template')
  })
})

