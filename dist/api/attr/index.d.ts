import type { SyApiMethodResponse } from '../../core/index.js';
import type { BlockId, IBlockAttrs, ISettableBlockAttrs } from '../../types/index.js';
/**
 * Attributes API 类型定义
 */
export interface AttrAPI {
    /**
     * 设置块属性
     * @path /api/attr/setBlockAttrs
     * @param id - The ID of the block
     * @param attrs - The attributes to set. System properties (id, updated, type, status, refcount, parent-heading, embed-content, scroll) are not allowed to be modified
     * @returns - Promise<{ code: number, msg: string, data: null }>
     */
    setBlockAttrs: (id: BlockId, attrs: Partial<ISettableBlockAttrs>) => SyApiMethodResponse<null>;
    /**
     * 获取块属性
     * @path /api/attr/getBlockAttrs
     * @param id - The ID of the block
     * @returns - Promise<{ code: number, msg: string, data: IBlockAttrs }>
     */
    getBlockAttrs: (id: BlockId) => SyApiMethodResponse<IBlockAttrs>;
    /**
     * 批量设置块属性
     * @path /api/attr/batchSetBlockAttrs
     * @param blockAttrs - Array of block attributes to set
     * @param blockAttrs[].id - The ID of the block
     * @param blockAttrs[].attrs - The attributes to set. System properties (id, updated, type, status, refcount, parent-heading, embed-content, scroll) are not allowed to be modified
     * @returns - Promise<{ code: number, msg: string, data: null }>
     */
    batchSetBlockAttrs: (blockAttrs: Array<{
        id: BlockId;
        attrs: Partial<ISettableBlockAttrs>;
    }>) => SyApiMethodResponse<null>;
    /**
     * 批量获取块属性
     * @path /api/attr/batchGetBlockAttrs
     * @param ids - The IDs of the blocks
     * @returns - Promise<{ code: number, msg: string, data: { [key: string]: IBlockAttrs } }>
     */
    batchGetBlockAttrs: (ids: BlockId[]) => SyApiMethodResponse<{
        [key: string]: IBlockAttrs;
    }>;
    /**
     * 获取书签标签
     * @path /api/attr/getBookmarkLabels
     */
    getBookmarkLabels: () => SyApiMethodResponse<string[]>;
    /**
     * 重置块属性
     * @path /api/attr/resetBlockAttrs
     * @deprecated 请配合 /api/attr/getBlockAttrs 与 /api/attr/setBlockAttrs 实现重置
     */
    resetBlockAttrs: (data: {
        /** 块 ID */
        id: BlockId;
        /** 要重置的属性 */
        attrs: Record<string, string>;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map