import type {
  SyApiMethodResponse,
} from '../../core/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Sqlite API 类型定义
 */
export interface SqliteAPI {
  /**
   * 刷新事务
   * @path /api/sqlite/flushTransaction
   */
  flushTransactions: () => SyApiMethodResponse<any>
}

SiYuanAPI.prototype.flushTransactions = function () {
  return this.request('/api/sqlite/flushTransaction', {})
}

