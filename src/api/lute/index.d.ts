import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * Lute API 类型定义
 */
export interface LuteAPI {
    /**
     * 旋转块 DOM
     * @path /api/lute/spinBlockDOM
     */
    spinBlockDOM: (data: {
        /** DOM 字符串（必需） */
        dom: string;
    }) => SyApiMethodResponse<{
        dom: string;
    }>;
    /**
     * HTML 转块 DOM
     * @path /api/lute/html2BlockDOM
     */
    html2BlockDOM: (data: {
        /** DOM 字符串（必需） */
        dom: string;
    }) => SyApiMethodResponse<string>;
    /**
     * 复制标准 Markdown
     * @path /api/lute/copyStdMarkdown
     */
    copyStdMarkdown: (data: {
        /** 块 ID（必需） */
        id: SiyuanID;
        /** 资源目标空格转下划线（可选） */
        assetsDestSpace2Underscore?: boolean;
        /** 填充 CSS 变量（可选） */
        fillCSSVar?: boolean;
        /** 调整标题级别（可选） */
        adjustHeadingLevel?: boolean;
        /** 图片标签（可选） */
        imgTag?: boolean;
    }) => SyApiMethodResponse<string>;
}
//# sourceMappingURL=index.d.ts.map