import type { Block, BlockId } from '../../types/index.js';
import { SyApiMethodResponse } from '../../core/index.js';
/**
 * Query API 类型定义
 * 注意：此模块是 SQL API 的别名，实际使用 /api/query/sql 端点
 */
export interface QueryAPI {
    /**
     * Execute SQL query
     *
     * @path /api/query/sql
     * @param stmt - SQL statement to execute
     * @param options - The options for the SQL query
     * @param options.trim - Whether to trim the SQL string
     * @default true
     * @returns {T[]} result of the SQL query
     */
    sql: <T = any>(stmt: string, options?: {
        trim?: boolean;
    }) => SyApiMethodResponse<T[]>;
    /**
     * Get block by block_id (through SQL query)
     *
     * @path wrapper: uses sql
     * @param {BlockId} blockId - block_id
     * @returns {Block | null} block data - Block or null
     */
    getBlockByID: (blockId: BlockId) => SyApiMethodResponse<Block | null>;
}
//# sourceMappingURL=index.d.ts.map