import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * 历史搜索结果
 */
export interface ISearchHistoryResult {
    histories: any[];
    pageCount: number;
    totalCount: number;
}
/**
 * 历史项结果
 */
export interface IGetHistoryItemsResult {
    items: any[];
}
/**
 * 文档历史内容结果
 */
export interface IGetDocHistoryContentResult {
    id: SiyuanID;
    rootID: SiyuanID;
    content: string;
    isLargeDoc: boolean;
}
/**
 * History API 类型定义
 */
export interface HistoryAPI {
    /**
     * 获取笔记本历史
     * @path /api/history/getNotebookHistory
     */
    getNotebookHistory: () => SyApiMethodResponse<{
        histories: any[];
    }>;
    /**
     * 回滚笔记本历史
     * @path /api/history/rollbackNotebookHistory
     */
    rollbackNotebookHistory: (data: {
        /** 历史路径（必需） */
        historyPath: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 回滚资源历史
     * @path /api/history/rollbackAssetsHistory
     */
    rollbackAssetsHistory: (data: {
        /** 历史路径（必需） */
        historyPath: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取文档历史内容
     * @path /api/history/getDocHistoryContent
     */
    getDocHistoryContent: (data: {
        /** 历史路径（必需） */
        historyPath: string;
        /** 关键词（可选） */
        k?: string;
        /** 是否高亮（可选） */
        highlight?: boolean;
    }) => SyApiMethodResponse<IGetDocHistoryContentResult>;
    /**
     * 回滚文档历史
     * @path /api/history/rollbackDocHistory
     */
    rollbackDocHistory: (data: {
        /** 笔记本 ID（必需） */
        notebook: string;
        /** 历史路径（必需） */
        historyPath: string;
    }) => SyApiMethodResponse<{
        box: string;
    }>;
    /**
     * 清空工作空间历史
     * @path /api/history/clearWorkspaceHistory
     */
    clearWorkspaceHistory: () => SyApiMethodResponse<any>;
    /**
     * 重建历史索引
     * @path /api/history/reindexHistory
     */
    reindexHistory: () => SyApiMethodResponse<any>;
    /**
     * 搜索历史
     * @path /api/history/searchHistory
     */
    searchHistory: (data: {
        /** 查询字符串（必需） */
        query: string;
        /** 笔记本 ID（可选） */
        notebook?: string;
        /** 类型（可选） */
        type?: number;
        /** 页码，默认 1（可选） */
        page?: number;
        /** 操作类型，默认 "all"（可选） */
        op?: string;
    }) => SyApiMethodResponse<ISearchHistoryResult>;
    /**
     * 获取历史项
     * @path /api/history/getHistoryItems
     */
    getHistoryItems: (data: {
        /** 创建时间（必需） */
        created: string;
        /** 查询字符串（必需） */
        query: string;
        /** 笔记本 ID（可选） */
        notebook?: string;
        /** 类型（可选） */
        type?: number;
        /** 操作类型，默认 "all"（可选） */
        op?: string;
    }) => SyApiMethodResponse<IGetHistoryItemsResult>;
}
//# sourceMappingURL=index.d.ts.map