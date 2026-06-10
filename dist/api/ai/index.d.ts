import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * AI API 类型定义
 */
export interface AIAPI {
    /**
     * ChatGPT 对话
     * @path /api/ai/chatGPT
     */
    chatGPT: (data: {
        /** 消息内容（必需） */
        msg: string;
    }) => SyApiMethodResponse<any>;
    /**
     * ChatGPT 带操作
     * @path /api/ai/chatGPTWithAction
     */
    chatGPTWithAction: (data: {
        /** 块 ID 数组（必需） */
        ids: SiyuanID[];
        /** 操作（必需） */
        action: string;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map