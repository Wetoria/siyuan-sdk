import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * 搜索标签结果
 */
export interface ISearchTagResult {
    tags: string[];
    k: string;
}
/**
 * 搜索模板结果
 */
export interface ISearchTemplateResult {
    blocks: any[];
    k: string;
}
/**
 * 搜索挂件结果
 */
export interface ISearchWidgetResult {
    blocks: any[];
    k: string;
}
/**
 * 搜索引用块结果
 */
export interface ISearchRefBlockResult {
    blocks: any[];
    newDoc: boolean;
    k: string;
    reqId: any;
}
/**
 * 搜索嵌入块结果
 */
export interface ISearchEmbedBlockResult {
    blocks: any[];
}
/**
 * 全文搜索块结果
 */
export interface IFullTextSearchBlockResult {
    blocks: any[];
    matchedBlockCount: number;
    matchedRootCount: number;
    pageCount: number;
    docMode: number;
}
/**
 * 全文搜索资源内容结果
 */
export interface IFullTextSearchAssetContentResult {
    assetContents: any[];
    matchedAssetCount: number;
    pageCount: number;
}
/**
 * 获取资源内容结果
 */
export interface IGetAssetContentResult {
    assetContent: any;
}
/**
 * 列出无效块引用结果
 */
export interface IListInvalidBlockRefsResult {
    blocks: any[];
    matchedBlockCount: number;
    matchedRootCount: number;
    pageCount: number;
}
/**
 * Search API 类型定义
 */
export interface SearchAPI {
    /**
     * 搜索标签
     * @path /api/search/searchTag
     */
    searchTag: (data: {
        /** 关键词（必需） */
        k: string;
    }) => SyApiMethodResponse<ISearchTagResult>;
    /**
     * 搜索模板
     * @path /api/search/searchTemplate
     */
    searchTemplate: (data: {
        /** 关键词（必需） */
        k: string;
    }) => SyApiMethodResponse<ISearchTemplateResult>;
    /**
     * 删除模板
     * @path /api/search/removeTemplate
     */
    removeTemplate: (data: {
        /** 模板路径（必需） */
        path: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 搜索挂件
     * @path /api/search/searchWidget
     */
    searchWidget: (data: {
        /** 关键词（必需） */
        k: string;
    }) => SyApiMethodResponse<ISearchWidgetResult>;
    /**
     * 搜索引用块
     * @path /api/search/searchRefBlock
     */
    searchRefBlock: (data: {
        /** 请求 ID（可选） */
        reqId?: any;
        /** 块 ID（可选） */
        id?: SiyuanID;
        /** 根 ID（必需） */
        rootID: SiyuanID;
        /** 关键词（必需） */
        k: string;
        /** 前置长度（必需） */
        beforeLen: number;
        /** 是否方括号（可选） */
        isSquareBrackets?: boolean;
        /** 是否数据库（可选） */
        isDatabase?: boolean;
    }) => SyApiMethodResponse<ISearchRefBlockResult>;
    /**
     * 搜索嵌入块
     * @path /api/search/searchEmbedBlock
     */
    searchEmbedBlock: (data: {
        /** 嵌入块 ID（必需） */
        embedBlockID: SiyuanID;
        /** SQL 语句（必需） */
        stmt: string;
        /** 排除的 ID 列表（可选） */
        excludeIDs?: SiyuanID[];
        /** 标题模式：0-显示标题与下方的块，1-仅显示标题，2-仅显示标题下方的块（可选） */
        headingMode?: number;
        /** 是否显示面包屑（可选） */
        breadcrumb?: boolean;
    }) => SyApiMethodResponse<ISearchEmbedBlockResult>;
    /**
     * 获取嵌入块
     * @path /api/search/getEmbedBlock
     */
    getEmbedBlock: (data: {
        /** 嵌入块 ID（必需） */
        embedBlockID: SiyuanID;
        /** 包含的 ID 列表（必需） */
        includeIDs: SiyuanID[];
        /** 标题模式：0-显示标题与下方的块，1-仅显示标题，2-仅显示标题下方的块（可选） */
        headingMode?: number;
        /** 是否显示面包屑（可选） */
        breadcrumb?: boolean;
    }) => SyApiMethodResponse<ISearchEmbedBlockResult>;
    /**
     * 更新嵌入块
     * @path /api/search/updateEmbedBlock
     */
    updateEmbedBlock: (data: {
        /** 块 ID（必需） */
        id: SiyuanID;
        /** 内容（必需） */
        content: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 全文搜索块
     * @path /api/search/fullTextSearchBlock
     */
    fullTextSearchBlock: (data: {
        /** 页码，默认 1（可选） */
        page?: number;
        /** 每页大小，默认 32（可选） */
        pageSize?: number;
        /** 查询字符串（可选） */
        query?: string;
        /** 路径列表（可选） */
        paths?: string[];
        /** 笔记本列表（可选） */
        boxes?: string[];
        /** 类型映射（可选） */
        types?: Record<string, boolean>;
        /** 方法（可选） */
        method?: number;
        /** 排序方式（可选） */
        orderBy?: number;
        /** 分组方式（可选） */
        groupBy?: number;
    }) => SyApiMethodResponse<IFullTextSearchBlockResult>;
    /**
     * 搜索资源
     * @path /api/search/searchAsset
     */
    searchAsset: (data: {
        /** 关键词（必需） */
        k: string;
        /** 扩展名列表（可选） */
        exts?: string[];
    }) => SyApiMethodResponse<any[]>;
    /**
     * 查找替换
     * @path /api/search/findReplace
     */
    findReplace: (data: {
        /** 查找关键词（必需） */
        k: string;
        /** 替换文本（必需） */
        r: string;
        /** 块 ID 列表（必需） */
        ids: SiyuanID[];
        /** 路径列表（可选） */
        paths?: string[];
        /** 笔记本列表（可选） */
        boxes?: string[];
        /** 类型映射（可选） */
        types?: Record<string, boolean>;
        /** 方法（可选） */
        method?: number;
        /** 排序方式（可选） */
        orderBy?: number;
        /** 分组方式（可选） */
        groupBy?: number;
        /** 替换类型映射（可选） */
        replaceTypes?: Record<string, boolean>;
    }) => SyApiMethodResponse<any>;
    /**
     * 全文搜索资源内容
     * @path /api/search/fullTextSearchAssetContent
     */
    fullTextSearchAssetContent: (data: {
        /** 页码，默认 1（可选） */
        page?: number;
        /** 每页大小，默认 32（可选） */
        pageSize?: number;
        /** 查询字符串（可选） */
        query?: string;
        /** 类型映射（可选） */
        types?: Record<string, boolean>;
        /** 方法（可选） */
        method?: number;
        /** 排序方式（可选） */
        orderBy?: number;
    }) => SyApiMethodResponse<IFullTextSearchAssetContentResult>;
    /**
     * 获取资源内容
     * @path /api/search/getAssetContent
     */
    getAssetContent: (data: {
        /** 资源 ID（必需） */
        id: SiyuanID;
        /** 查询字符串（必需） */
        query: string;
        /** 查询方法（必需） */
        queryMethod: number;
    }) => SyApiMethodResponse<IGetAssetContentResult>;
    /**
     * 列出无效块引用
     * @path /api/search/listInvalidBlockRefs
     */
    listInvalidBlockRefs: (data: {
        /** 页码，默认 1（可选） */
        page?: number;
        /** 每页大小，默认 32（可选） */
        pageSize?: number;
    }) => SyApiMethodResponse<IListInvalidBlockRefsResult>;
}
//# sourceMappingURL=index.d.ts.map