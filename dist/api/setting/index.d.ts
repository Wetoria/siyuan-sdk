import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * 发布信息结果
 */
export interface IGetPublishResult {
    port: number;
    publish: any;
}
/**
 * Setting API 类型定义
 */
export interface SettingAPI {
    /**
     * 设置账户
     * @path /api/setting/setAccount
     */
    setAccount: (data: Record<string, any>) => SyApiMethodResponse<any>;
    /**
     * 设置编辑器
     * @path /api/setting/setEditor
     */
    setEditor: (data: Record<string, any>) => SyApiMethodResponse<any>;
    /**
     * 设置导出
     * @path /api/setting/setExport
     */
    setExport: (data: Record<string, any>) => SyApiMethodResponse<any>;
    /**
     * 设置文件树
     * @path /api/setting/setFiletree
     */
    setFiletree: (data: Record<string, any>) => SyApiMethodResponse<any>;
    /**
     * 设置搜索
     * @path /api/setting/setSearch
     */
    setSearch: (data: Record<string, any>) => SyApiMethodResponse<any>;
    /**
     * 设置快捷键
     * @path /api/setting/setKeymap
     */
    setKeymap: (data: {
        /** 快捷键配置（必需） */
        data: Record<string, any>;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置外观
     * @path /api/setting/setAppearance
     */
    setAppearance: (data: Record<string, any>) => SyApiMethodResponse<any>;
    /**
     * 获取云用户
     * @path /api/setting/getCloudUser
     */
    getCloudUser: (data: {
        /** 令牌（可选） */
        token?: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 登出云用户
     * @path /api/setting/logoutCloudUser
     */
    logoutCloudUser: () => SyApiMethodResponse<any>;
    /**
     * 登录云用户（2FA）
     * @path /api/setting/login2faCloudUser
     */
    login2faCloudUser: (data: {
        /** 令牌（必需） */
        token: string;
        /** 验证码（必需） */
        code: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置表情
     * @path /api/setting/setEmoji
     */
    setEmoji: (data: {
        /** 表情数组（必需） */
        emoji: string[];
    }) => SyApiMethodResponse<any>;
    /**
     * 设置闪卡
     * @path /api/setting/setFlashcard
     */
    setFlashcard: (data: Record<string, any>) => SyApiMethodResponse<any>;
    /**
     * 设置 AI
     * @path /api/setting/setAI
     */
    setAI: (data: Record<string, any>) => SyApiMethodResponse<any>;
    /**
     * 设置集市
     * @path /api/setting/setBazaar
     */
    setBazaar: (data: Record<string, any>) => SyApiMethodResponse<any>;
    /**
     * 设置发布
     * @path /api/setting/setPublish
     */
    setPublish: (data: Record<string, any>) => SyApiMethodResponse<IGetPublishResult>;
    /**
     * 获取发布
     * @path /api/setting/getPublish
     */
    getPublish: () => SyApiMethodResponse<IGetPublishResult>;
    /**
     * 刷新虚拟块引用
     * @path /api/setting/refreshVirtualBlockRef
     */
    refreshVirtualBlockRef: () => SyApiMethodResponse<any>;
    /**
     * 添加虚拟块引用包含
     * @path /api/setting/addVirtualBlockRefInclude
     */
    addVirtualBlockRefInclude: (data: {
        /** 关键词数组（必需） */
        keywords: string[];
    }) => SyApiMethodResponse<any>;
    /**
     * 添加虚拟块引用排除
     * @path /api/setting/addVirtualBlockRefExclude
     */
    addVirtualBlockRefExclude: (data: {
        /** 关键词数组（必需） */
        keywords: string[];
    }) => SyApiMethodResponse<any>;
    /**
     * 设置片段功能配置（启用/禁用 CSS/JS 片段）
     * @path /api/setting/setSnippet
     */
    setSnippetConfig: (data: {
        /** 是否启用 CSS 片段 */
        enabledCSS?: boolean;
        /** 是否启用 JS 片段 */
        enabledJS?: boolean;
    }) => SyApiMethodResponse<{
        enabledCSS: boolean;
        enabledJS: boolean;
    }>;
    /**
     * 设置编辑器只读
     * @path /api/setting/setEditorReadOnly
     */
    setEditorReadOnly: (data: {
        /** 是否只读（必需） */
        readonly: boolean;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map