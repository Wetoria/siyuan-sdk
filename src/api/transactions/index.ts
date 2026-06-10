import type { SyApiMethodResponse } from '../../core/index.js'
import type { TransactionItem } from '../../types/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Transactions API 类型定义
 */
export interface TransactionsAPI {
  /**
   * 执行事务
   * @path /api/transactions
   */
  performTransactions: (data: {
    /** 事务数组（必需） */
    transactions: TransactionItem[]
    /** 请求 ID（必需） */
    reqId: number
  }) => SyApiMethodResponse<any>
}

// 实现部分
SiYuanAPI.prototype.performTransactions = function (data: {
  transactions: TransactionItem[]
  reqId: number
}) {
  return this.request('/api/transactions', data)
}

