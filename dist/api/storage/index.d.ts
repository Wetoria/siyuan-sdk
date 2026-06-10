import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * Storage API 类型定义
 */
export interface StorageAPI {
    /**
     * 设置本地存储
     * @path /api/storage/setLocalStorage
     * @deprecated 请使用 /api/storage/setLocalStorageVal（app、key、val）
     */
    setLocalStorage: (data: {
        /** 值（必需） */
        val: any;
        /** 应用 ID（必需） */
        app: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取本地存储
     * @path /api/storage/getLocalStorage
     */
    getLocalStorage: () => SyApiMethodResponse<any>;
    /**
     * 设置本地存储值
     * @path /api/storage/setLocalStorageVal
     */
    setLocalStorageVal: (data: {
        /** 键（必需） */
        key: string;
        /** 值（必需） */
        val: any;
        /** 应用 ID（必需） */
        app: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 删除本地存储值
     * @path /api/storage/removeLocalStorageVals
     */
    removeLocalStorageVals: (data: {
        /** 键数组（必需） */
        keys: string[];
    }) => SyApiMethodResponse<any>;
    /**
     * 设置条件
     * @path /api/storage/setCriterion
     */
    setCriterion: (data: {
        /** 条件对象（必需） */
        criterion: Record<string, any>;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取条件列表
     * @path /api/storage/getCriteria
     */
    getCriteria: () => SyApiMethodResponse<any[]>;
    /**
     * 删除条件
     * @path /api/storage/removeCriterion
     */
    removeCriterion: (data: {
        /** 条件名称（必需） */
        name: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取最近文档
     * @path /api/storage/getRecentDocs
     */
    getRecentDocs: (data: {
        /** 排序方式：viewedAt/openAt/closedAt（可选，默认 viewedAt） */
        sortBy?: string;
    }) => SyApiMethodResponse<any[]>;
    /**
     * 更新最近文档查看时间
     * @path /api/storage/updateRecentDocViewTime
     */
    updateRecentDocViewTime: (data: {
        /** 根块 ID（必需） */
        rootID: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 更新最近文档关闭时间
     * @path /api/storage/updateRecentDocCloseTime
     */
    updateRecentDocCloseTime: (data: {
        /** 根块 ID（必需） */
        rootID: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 更新最近文档打开时间
     * @path /api/storage/updateRecentDocOpenTime
     */
    updateRecentDocOpenTime: (data: {
        /** 根块 ID（必需） */
        rootID: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取大纲存储
     * @path /api/storage/getOutlineStorage
     */
    getOutlineStorage: (data: {
        /** 文档 ID（必需） */
        docID: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置大纲存储
     * @path /api/storage/setOutlineStorage
     */
    setOutlineStorage: (data: {
        /** 文档 ID（必需） */
        docID: SiyuanID;
        /** 值（必需） */
        val: any;
    }) => SyApiMethodResponse<any>;
    /**
     * 删除大纲存储
     * @path /api/storage/removeOutlineStorage
     */
    removeOutlineStorage: (data: {
        /** 文档 ID（必需） */
        docID: SiyuanID;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map