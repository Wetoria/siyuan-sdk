import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * 频道信息
 */
export interface IChannelInfo {
    name: string;
    count: number;
}
/**
 * 发布结果
 */
export interface IPublishResult {
    channel: IChannelInfo;
}
/**
 * Broadcast API 类型定义
 */
export interface BroadcastAPI {
    /**
     * 发布广播消息
     * @path /api/broadcast/publish
     */
    broadcastPublish: (formData: FormData) => SyApiMethodResponse<IPublishResult[]>;
    /**
     * 发布消息
     * @path /api/broadcast/postMessage
     */
    postMessage: (data: {
        /** 消息内容（必需） */
        message: string;
        /** 频道名称（必需） */
        channel: string;
    }) => SyApiMethodResponse<{
        channel: IChannelInfo;
    }>;
    /**
     * 获取频道列表
     * @path /api/broadcast/getChannels
     */
    getChannels: () => SyApiMethodResponse<{
        channels: IChannelInfo[];
    }>;
    /**
     * 获取频道信息
     * @path /api/broadcast/getChannelInfo
     */
    getChannelInfo: (data: {
        /** 频道名称（必需） */
        name: string;
    }) => SyApiMethodResponse<{
        channel: IChannelInfo;
    }>;
}
//# sourceMappingURL=index.d.ts.map