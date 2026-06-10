import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Import API 类型定义
 */
export interface ImportAPI {
    /**
     * 导入标准 Markdown
     * @path /api/import/importStdMd
     */
    importStdMd: (data: {
        /** 笔记本 ID（必需） */
        notebook: string;
        /** 本地路径（必需） */
        localPath: string;
        /** 目标路径（必需） */
        toPath: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 导入 ZIP Markdown
     * @path /api/import/importZipMd
     */
    importZipMd: (file: File) => SyApiMethodResponse<any>;
    /**
     * 导入数据
     * @path /api/import/importData
     */
    importData: (file: File) => SyApiMethodResponse<any>;
    /**
     * 导入 SY 文件
     * @path /api/import/importSY
     */
    importSY: (file: File) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map