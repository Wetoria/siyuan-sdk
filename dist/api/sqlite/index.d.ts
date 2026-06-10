import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Sqlite API 类型定义
 */
export interface SqliteAPI {
    /**
     * 刷新事务
     * @path /api/sqlite/flushTransaction
     */
    flushTransactions: () => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map