import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * Format API 类型定义
 */
export interface FormatAPI {
    /**
     * 自动空格
     * @path /api/format/autoSpace
     */
    autoSpace: (data: {
        /** 块 ID（必需） */
        id: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 网络图片转本地资源
     * @path /api/format/netImg2LocalAssets
     */
    netImg2LocalAssets: (data: {
        /** 块 ID（必需） */
        id: SiyuanID;
        /** URL（可选） */
        url?: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 网络资源转本地资源
     * @path /api/format/netAssets2LocalAssets
     */
    netAssets2LocalAssets: (data: {
        /** 块 ID（必需） */
        id: SiyuanID;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map