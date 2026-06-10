import type { SyApiMethodResponse } from '../../core/index.js';
import type { TransactionItem } from '../../types/index.js';
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
        transactions: TransactionItem[];
        /** 请求 ID（必需） */
        reqId: number;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map