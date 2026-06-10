import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Extension API 类型定义
 */
export interface ExtensionAPI {
    /**
     * 扩展复制
     * @path /api/extension/copy
     */
    extensionCopy: (formData: FormData) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map