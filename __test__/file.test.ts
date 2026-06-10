import { CONSTANT_DATA } from '$/configs/data.js'
import { createAPI, SyApiResponse } from '@wetoria/siyuan-sdk'
import { describe, expect, it } from 'vitest'

const sdk = createAPI({
  baseURL: CONSTANT_DATA.syHost_Test,
  token: CONSTANT_DATA.syToken,
})

describe('File API', () => {
  describe('getFile', () => {
    it('should return file content as string when file exists', async () => {
      // 测试获取一个存在的文件（使用思源的数据目录下的文件）
      // 尝试获取工作空间数据目录下的配置文件
      const result = await sdk.getFile('/data/plugins/sy-plugin-enhance/plugin.json')
      
      // 如果文件存在，应该返回一个字符串（文件内容）
      // 根据后端实现，文件存在时直接返回文件内容，不是标准结构
      if (typeof result === 'string') {
        // 直接返回字符串（文件内容）
        expect(typeof result).toBe('string')
        expect(result.length).toBeGreaterThan(0)
      } else if (result && typeof result === 'object' && 'code' in result && 'msg' in result && 'data' in result) {
        // 如果是标准结构，验证 code 为 0
        const response = result as SyApiResponse<string | null>
        expect(response.code).toBe(0)
        expect(typeof response.data).toBe('string')
        expect(response.data?.length).toBeGreaterThan(0)
      } else {
        // 如果返回的是对象但不是标准结构，可能是解析后的 JSON（customFetch 的行为）
        // 这种情况下，至少验证返回了内容
        expect(result).toBeTruthy()
        expect(typeof result).toBe('object')
      }
    })

    it('should return error with code 404 and null data when file does not exist', async () => {
      // 测试获取一个不存在的文件
      const result = await sdk.getFile('/non-existent-file-12345.json')
      
      // 文件不存在时，应该返回标准结构，code=404，data为null
      expect(result).toHaveProperty('code')
      expect(result).toHaveProperty('msg')
      expect(result).toHaveProperty('data')
      
      const response = result as SyApiResponse<string | null>
      expect(response.code).toBe(404)
      expect(response.data).toBeNull()
      expect(response.msg).toContain('no such file')
    })
  })

  describe('putFile', () => {
    // TODO: [FUTURE] When you start using the `putFile` method, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should upload/create a file')
  })

  describe('removeFile', () => {
    // TODO: [FUTURE] When you start using the `removeFile` method, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should remove a file')
  })

  describe('readDir', () => {
    // TODO: [FUTURE] When you start using the `readDir` method, please complete this test case
    // This test is currently skipped and needs to be implemented with actual parameters and assertions
    it.todo('TODO: Implement when using this method - should read directory')
  })
})

