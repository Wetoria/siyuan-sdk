import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Block API 类型定义
 */
export interface _DemoApi {
    /**
     * 插入块
     * @path /api/_base/baseApi
     * @param data - The data for the block
     * @param data.someData - some data for api
     * @returns - Promise<{ code: number, msg: string, data: any }>
     */
    _demoApi: () => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map