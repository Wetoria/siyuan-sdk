import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * Inbox API 类型定义
 */
export interface InboxAPI {
    /**
     * 获取速记列表
     * @path /api/inbox/getShorthands
     */
    getShorthands: (data: {
        /** 页码（必需） */
        page: number;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取速记
     * @path /api/inbox/getShorthand
     */
    getShorthand: (data: {
        /** 速记 ID（必需） */
        id: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 删除速记
     * @path /api/inbox/removeShorthands
     */
    removeShorthands: (data: {
        /** 速记 ID 数组（必需） */
        ids: SiyuanID[];
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map