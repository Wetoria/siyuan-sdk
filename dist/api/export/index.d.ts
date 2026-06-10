import type { SyApiMethodResponse } from '../../core/index.js';
import type { DocumentId } from '../../types/index.js';
/**
 * Export API 类型定义
 */
export interface ExportAPI {
    /**
     * 导出笔记本 Markdown
     * @path /api/export/exportNotebookMd
     */
    exportNotebookMd: (data: {
        /** 笔记本 ID */
        notebook: string;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 批量导出 Markdown
     * @path /api/export/exportMds
     */
    exportMds: (data: {
        /** 文档 ID 列表 */
        ids: DocumentId[];
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出单个 Markdown
     * @path /api/export/exportMd
     */
    exportMd: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出 SY 格式
     * @path /api/export/exportSY
     */
    exportSY: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出笔记本 SY 格式
     * @path /api/export/exportNotebookSY
     */
    exportNotebookSY: (data: {
        /** 笔记本 ID */
        id: string;
    }) => SyApiMethodResponse<{
        zip: string;
    }>;
    /**
     * 导出 HTML
     * @path /api/export/exportHTML
     */
    exportHTML: (data: {
        /** 文档 ID */
        id: DocumentId;
        /** 是否导出 PDF */
        pdf: boolean;
        /** 保存路径（可选，为空时使用临时目录） */
        savePath?: string;
        /** 是否保持折叠（可选） */
        keepFold?: boolean;
        /** 是否合并（可选） */
        merge?: boolean;
    }) => SyApiMethodResponse<{
        id: string;
        name: string;
        content: string;
        folder?: string;
    }>;
    /**
     * 导出预览 HTML
     * @path /api/export/exportPreviewHTML
     */
    exportPreviewHTML: (data: {
        /** 文档 ID */
        id: DocumentId;
        /** 是否保持折叠（可选） */
        keepFold?: boolean;
        /** 是否合并（可选） */
        merge?: boolean;
        /** 是否导出图片（可选） */
        image?: boolean;
    }) => SyApiMethodResponse<{
        id: string;
        name: string;
        content: string;
        attrs: Record<string, string>;
        type: string;
    }>;
    /**
     * 导出 Markdown HTML
     * @path /api/export/exportMdHTML
     */
    exportMdHTML: (data: {
        /** 文档 ID */
        id: DocumentId;
        /** 保存路径（可选，为空时使用临时目录） */
        savePath?: string;
    }) => SyApiMethodResponse<{
        id: string;
        name: string;
        content: string;
        folder?: string;
    }>;
    /**
     * 导出 DOCX
     * @path /api/export/exportDocx
     */
    exportDocx: (data: {
        /** 文档 ID */
        id: DocumentId;
        /** 保存路径 */
        savePath: string;
        /** 是否移除资源 */
        removeAssets: boolean;
        /** 是否合并（可选） */
        merge?: boolean;
    }) => SyApiMethodResponse<{
        path: string;
    }>;
    /**
     * 处理 PDF
     * @path /api/export/processPDF
     */
    processPDF: (data: {
        /** 文档 ID */
        id: DocumentId;
        /** 路径 */
        path: string;
        /** 是否合并（可选） */
        merge?: boolean;
        /** 是否移除资源 */
        removeAssets: boolean;
        /** 是否添加水印 */
        watermark: boolean;
    }) => SyApiMethodResponse<any>;
    /**
     * 导出预览
     * @path /api/export/exportPreview
     */
    exportPreview: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        html: string;
        fillCSSVar: boolean;
    }>;
    /**
     * 导出资源文件
     * @path /api/export/exportResources
     */
    exportResources: (paths: string[], name: string) => SyApiMethodResponse<{
        path: string;
    }>;
    /**
     * 导出为文件
     * @path /api/export/exportAsFile
     */
    exportAsFile: (formData: FormData) => SyApiMethodResponse<{
        file: string;
    }>;
    /**
     * 导出数据
     * @path /api/export/exportData
     */
    exportData: () => SyApiMethodResponse<{
        zip: string;
    }>;
    /**
     * 导出文件夹数据
     * @path /api/export/exportDataInFolder
     */
    exportDataInFolder: (data: {
        /** 导出文件夹 */
        folder: string;
    }) => SyApiMethodResponse<{
        name: string;
    }>;
    /**
     * 导出临时内容
     * @path /api/export/exportTempContent
     */
    exportTempContent: (data: {
        /** 内容 */
        content: string;
    }) => SyApiMethodResponse<{
        url: string;
    }>;
    /**
     * 导出浏览器 HTML
     * @path /api/export/exportBrowserHTML
     */
    exportBrowserHTML: (data: {
        /** 文件夹 */
        folder: string;
        /** HTML 内容 */
        html: string;
        /** 名称 */
        name: string;
    }) => SyApiMethodResponse<{
        zip: string;
    }>;
    /**
     * 导出到链滴
     * @path /api/export/export2Liandi
     */
    export2Liandi: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<any>;
    /**
     * 导出为 reStructuredText
     * @path /api/export/exportReStructuredText
     */
    exportReStructuredText: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出为 AsciiDoc
     * @path /api/export/exportAsciiDoc
     */
    exportAsciiDoc: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出为 Textile
     * @path /api/export/exportTextile
     */
    exportTextile: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出为 OPML
     * @path /api/export/exportOPML
     */
    exportOPML: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出为 Org Mode
     * @path /api/export/exportOrgMode
     */
    exportOrgMode: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出为 MediaWiki
     * @path /api/export/exportMediaWiki
     */
    exportMediaWiki: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出为 ODT
     * @path /api/export/exportODT
     */
    exportODT: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出为 RTF
     * @path /api/export/exportRTF
     */
    exportRTF: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出为 EPUB
     * @path /api/export/exportEPUB
     */
    exportEPUB: (data: {
        /** 文档 ID */
        id: DocumentId;
    }) => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导出属性视图
     * @path /api/export/exportAttributeView
     */
    exportAttributeView: (data: {
        /** 属性视图 ID */
        id: string;
        /** 块 ID */
        blockID: string;
    }) => SyApiMethodResponse<{
        zip: string;
    }>;
    /**
     * 导出 Markdown 内容
     * @path /api/export/exportMdContent
     */
    exportMdContent: (data: {
        /** 文档 ID */
        id: DocumentId;
        /** 块引用模式（可选） */
        refMode?: number;
        /** 块嵌入模式（可选） */
        embedMode?: number;
        /** 是否包含 YAML Front Matter（可选，默认 true） */
        yfm?: boolean;
        /** 是否填充 CSS 变量（可选） */
        fillCSSVar?: boolean;
        /** 是否调整标题级别（可选） */
        adjustHeadingLevel?: boolean;
        /** 是否使用图片标签（可选） */
        imgTag?: boolean;
    }) => SyApiMethodResponse<{
        hPath: string;
        content: string;
    }>;
}
//# sourceMappingURL=index.d.ts.map