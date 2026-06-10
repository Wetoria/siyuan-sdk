import { CONSTANT_DATA } from '$/configs/data.js'
import { createAPI } from '@wetoria/siyuan-sdk'
import { describe, expect, it } from 'vitest'

const sdk = createAPI({
  baseURL: CONSTANT_DATA.syHost_Test,
  token: CONSTANT_DATA.syToken,
})

describe('SQL API', () => {
  describe('sql', () => {
    it('should execute SQL query', async () => {
      const stmt = `select * from blocks where id = '20251123023621-tvidslq'`
      const result = await sdk.sql(stmt)
      console.log('sql result is ', result)
      expect(result).toBeDefined()
      expect(result.code).toBe(0)
      expect(result.msg).toBe('')
      expect(result.data).toBeDefined()
      expect(Array.isArray(result.data)).toBe(true)
      expect(result.data.length).toBeGreaterThan(0)
      
      const block = result.data[0]
      expect(block).toBeDefined()
      expect(block.id).toBe('20251123023621-tvidslq')
      expect(block.box).toBe('20251123023619-7qo2xo5')
      expect(block.content).toBe('123')
      expect(block.markdown).toBe('123')
      expect(block.type).toBe('p')
      expect(block.hpath).toBe('/未命名')
      expect(block.parent_id).toBe('20251123023621-wje32pp')
      expect(block.root_id).toBe('20251123023621-wje32pp')
      expect(block.path).toBe('/20251123023621-wje32pp.sy')
      expect(block.created).toBe('20251123023621')
      expect(block.updated).toBe('20251123023624')
      expect(block.length).toBe(3)
      expect(block.sort).toBe(10)
      expect(block.hash).toBe('71ad1c5')
      expect(block.ial).toBe('{: id="20251123023621-tvidslq" updated="20251123023624"}')
    })

    it('should execute SQL query with non-existent ID', async () => {
      const stmt = `select * from blocks where id = '20251123024124-morweth'`
      const result = await sdk.sql(stmt)
      console.log('sql result is ', result)
      expect(result).toBeDefined()
      expect(result.code).toBe(0)
      expect(result.msg).toBe('')
      expect(result.data).toBeDefined()
      expect(Array.isArray(result.data)).toBe(true)
      expect(result.data.length).toBe(0)
    })
  })
})

