import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * Outline API 类型定义
 */
export interface OutlineAPI {
    /**
     * 获取文档大纲
     * @path /api/outline/getDocOutline
     */
    getDocOutline: (data: {
        /** 文档 ID（必需） */
        id: SiyuanID;
        /** 是否预览模式（可选） */
        preview?: boolean;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map