import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Network API 类型定义
 */
export interface NetworkAPI {
    /**
     * 转发代理请求
     * @path /api/network/forwardProxy
     */
    forwardProxy: (url: string, method?: string, payload?: any, headers?: any[], timeout?: number, contentType?: string) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map