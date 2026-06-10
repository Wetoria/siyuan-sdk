import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Icon API 类型定义
 */
export interface IconAPI {
    /**
     * 获取动态图标
     * @path /api/icon/getDynamicIcon
     */
    getDynamicIcon: (params: {
        /** 图标类型（可选，默认 "1"） */
        type?: string;
        /** 颜色（可选） */
        color?: string;
        /** 日期（可选） */
        date?: string;
        /** 语言（可选） */
        lang?: string;
        /** 星期类型（可选，默认 "1"） */
        weekdayType?: string;
    }) => SyApiMethodResponse<string>;
}
//# sourceMappingURL=index.d.ts.map