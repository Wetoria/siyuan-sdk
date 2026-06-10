import type { SyApiMethodResponse } from '../../core/index.js';
import type { DocumentId } from '../../types/index.js';
/**
 * Template API 类型定义
 */
export interface TemplateAPI {
    /**
     * 渲染模板
     * @path /api/template/render
     */
    render: (id: DocumentId, path: string) => SyApiMethodResponse<any>;
    /**
     * 渲染 Sprig 模板
     * @path /api/template/renderSprig
     */
    renderSprig: (template: string) => SyApiMethodResponse<string>;
    /**
     * 将文档保存为模板
     * @path /api/template/docSaveAsTemplate
     */
    docSaveAsTemplate: (data: {
        /** 文档 ID */
        id: DocumentId;
        /** 模板名称 */
        name: string;
        /** 是否覆盖（可选） */
        overwrite?: boolean;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map