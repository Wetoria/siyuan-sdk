import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Petal API 类型定义
 */
export interface PetalAPI {
    /**
     * 加载花瓣
     * @path /api/petal/loadPetals
     */
    loadPetals: (data: {
        /** 前端类型（必需） */
        frontend: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置花瓣启用状态
     * @path /api/petal/setPetalEnabled
     */
    setPetalEnabled: (data: {
        /** 包名（必需） */
        packageName: string;
        /** 是否启用（必需） */
        enabled: boolean;
        /** 前端类型（必需） */
        frontend: string;
        /** 应用 ID（可选） */
        app?: string;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map