import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Convert API 类型定义
 */
export interface ConvertAPI {
    /**
     * 使用 Pandoc 转换文档
     * @path /api/convert/pandoc
     */
    pandoc: (args: string[]) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map