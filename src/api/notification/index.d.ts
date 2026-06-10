import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Notification API 类型定义
 */
export interface NotificationAPI {
    /**
     * 推送消息通知
     * @path /api/notification/pushMsg
     */
    pushMsg: (msg: string, timeout?: number) => SyApiMethodResponse<any>;
    /**
     * 推送错误消息通知
     * @path /api/notification/pushErrMsg
     */
    pushErrMsg: (msg: string, timeout?: number) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map