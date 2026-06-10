import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
import type { IAttributeViewAddingBlockDefaultValues, IAttributeViewFilterSort, IAttributeViewPrimaryKeyValues, IAVValue, IDuplicateAttributeViewBlockResponse, IMirrorDatabaseBlocksResponse, IRenderAttributeViewResponse, ISearchAttributeViewKeyResult, ISearchAttributeViewResult, ISetAttributeViewBlockAttrResponse } from './types.js';
/**
 * Block API 类型定义
 */
export interface AvAPI {
    /**
     * 渲染属性视图
     * @path /api/av/renderAttributeView
     */
    renderAttributeView: (data: {
        /** 属性视图 ID（必需） */
        id: SiyuanID;
        /** 视图 ID（可选） */
        viewID?: SiyuanID;
        /** 块 ID（可选） */
        blockID?: SiyuanID;
        /** 页码，默认 1（可选） */
        page?: number;
        /** 每页大小，默认 -1（可选） */
        pageSize?: number;
        /** 查询字符串（可选） */
        query?: string;
        /** 分组分页信息（可选） */
        groupPaging?: Record<string, any>;
    }) => SyApiMethodResponse<IRenderAttributeViewResponse>;
    /**
     * 渲染历史属性视图
     * @path /api/av/renderHistoryAttributeView
     */
    renderHistoryAttributeView: (data: {
        /** 属性视图 ID（必需） */
        id: SiyuanID;
        /** 创建时间（必需） */
        created: string;
        /** 块 ID（可选） */
        blockID?: SiyuanID;
        /** 视图 ID（可选） */
        viewID?: SiyuanID;
        /** 页码，默认 1（可选） */
        page?: number;
        /** 每页大小，默认 -1（可选） */
        pageSize?: number;
        /** 查询字符串（可选） */
        query?: string;
        /** 分组分页信息（可选） */
        groupPaging?: Record<string, any>;
    }) => SyApiMethodResponse<IRenderAttributeViewResponse>;
    /**
     * 渲染快照属性视图
     * @path /api/av/renderSnapshotAttributeView
     */
    renderSnapshotAttributeView: (data: {
        /** 快照索引（必需） */
        snapshot: string;
        /** 属性视图 ID（必需） */
        id: SiyuanID;
    }) => SyApiMethodResponse<IRenderAttributeViewResponse>;
    /**
     * 获取属性视图字段
     * @path /api/av/getAttributeViewKeys
     */
    getAttributeViewKeys: (data: {
        /** 块 ID（必需） */
        id: SiyuanID;
    }) => SyApiMethodResponse<any[]>;
    /**
     * 设置属性视图块属性
     * @path /api/av/setAttributeViewBlockAttr
     */
    setAttributeViewBlockAttr: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 字段 ID（必需） */
        keyID: SiyuanID;
        /** 项目 ID（必需） */
        itemID: SiyuanID;
        /** 值（必需） */
        value: any;
    }) => SyApiMethodResponse<ISetAttributeViewBlockAttrResponse>;
    /**
     * 批量设置属性视图块属性
     * @path /api/av/batchSetAttributeViewBlockAttrs
     */
    batchSetAttributeViewBlockAttrs: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 值数组（必需） */
        values: any[];
    }) => SyApiMethodResponse<any>;
    /**
     * 搜索属性视图
     * @path /api/av/searchAttributeView
     */
    searchAttributeView: (data: {
        /** 关键词（必需） */
        keyword: string;
        /** 排除的 ID 列表（可选） */
        excludes?: SiyuanID[];
    }) => SyApiMethodResponse<ISearchAttributeViewResult>;
    /**
     * 获取属性视图
     * @path /api/av/getAttributeView
     */
    getAttributeView: (data: {
        /** 属性视图 ID（必需） */
        id: SiyuanID;
    }) => SyApiMethodResponse<{
        av: any;
    }>;
    /**
     * 搜索属性视图关联字段
     * @path /api/av/searchAttributeViewRelationKey
     */
    searchAttributeViewRelationKey: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 关键词（必需） */
        keyword: string;
    }) => SyApiMethodResponse<ISearchAttributeViewKeyResult>;
    /**
     * 搜索属性视图非关联字段
     * @path /api/av/searchAttributeViewNonRelationKey
     * @deprecated 请使用 /api/av/getAttributeViewKeysByAvID，并在客户端过滤 relation/rollup/lineNumber 后按关键字搜索
     */
    searchAttributeViewNonRelationKey: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 关键词（必需） */
        keyword: string;
    }) => SyApiMethodResponse<ISearchAttributeViewKeyResult>;
    /**
     * 搜索属性视图汇总目标字段
     * @path /api/av/searchAttributeViewRollupDestKeys
     */
    searchAttributeViewRollupDestKeys: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 关键词（必需） */
        keyword: string;
    }) => SyApiMethodResponse<ISearchAttributeViewKeyResult>;
    /**
     * 获取属性视图过滤和排序
     * @path /api/av/getAttributeViewFilterSort
     */
    getAttributeViewFilterSort: (data: {
        /** 属性视图 ID（必需） */
        id: SiyuanID;
        /** 块 ID（必需） */
        blockID: SiyuanID;
    }) => SyApiMethodResponse<IAttributeViewFilterSort>;
    /**
     * 添加属性视图字段
     * @path /api/av/addAttributeViewKey
     */
    addAttributeViewKey: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 字段 ID（必需） */
        keyID: SiyuanID;
        /** 字段名称（必需） */
        keyName: string;
        /** 字段类型（必需） */
        keyType: string;
        /** 字段图标（必需） */
        keyIcon: string;
        /** 前置字段 ID（必需） */
        previousKeyID: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 删除属性视图字段
     * @path /api/av/removeAttributeViewKey
     */
    removeAttributeViewKey: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 字段 ID（必需） */
        keyID: SiyuanID;
        /** 是否删除关联目标（可选） */
        removeRelationDest?: boolean;
    }) => SyApiMethodResponse<any>;
    /**
     * 排序属性视图视图字段
     * @path /api/av/sortAttributeViewViewKey
     */
    sortAttributeViewViewKey: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 视图 ID（可选） */
        viewID?: SiyuanID;
        /** 字段 ID（必需） */
        keyID: SiyuanID;
        /** 前置字段 ID（必需） */
        previousKeyID: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 排序属性视图字段
     * @path /api/av/sortAttributeViewKey
     */
    sortAttributeViewKey: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 字段 ID（必需） */
        keyID: SiyuanID;
        /** 前置字段 ID（必需） */
        previousKeyID: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 添加属性视图块
     * @path /api/av/addAttributeViewBlocks
     */
    addAttributeViewBlocks: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 块 ID（可选） */
        blockID?: SiyuanID;
        /** 视图 ID（可选） */
        viewID?: SiyuanID;
        /** 分组 ID（可选） */
        groupID?: SiyuanID;
        /** 前置 ID（可选） */
        previousID?: SiyuanID;
        /** 源数据数组（必需） */
        srcs: Record<string, any>[];
        /** 是否忽略默认填充（可选） */
        ignoreDefaultFill?: boolean;
    }) => SyApiMethodResponse<any>;
    /**
     * 删除属性视图块
     * @path /api/av/removeAttributeViewBlocks
     */
    removeAttributeViewBlocks: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 源 ID 数组（必需） */
        srcIDs: SiyuanID[];
    }) => SyApiMethodResponse<any>;
    /**
     * 获取属性视图主键值
     * @path /api/av/getAttributeViewPrimaryKeyValues
     */
    getAttributeViewPrimaryKeyValues: (data: {
        /** 属性视图 ID（必需） */
        id: SiyuanID;
        /** 页码，默认 1（可选） */
        page?: number;
        /** 每页大小，默认 -1（可选） */
        pageSize?: number;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<IAttributeViewPrimaryKeyValues>;
    /**
     * 设置数据库块视图
     * @path /api/av/setDatabaseBlockView
     */
    setDatabaseBlockView: (data: {
        /** 块 ID（必需） */
        id: SiyuanID;
        /** 视图 ID（必需） */
        viewID: SiyuanID;
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取镜像数据库块
     * @path /api/av/getMirrorDatabaseBlocks
     */
    getMirrorDatabaseBlocks: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
    }) => SyApiMethodResponse<IMirrorDatabaseBlocksResponse>;
    /**
     * 根据属性视图 ID 获取字段
     * @path /api/av/getAttributeViewKeysByAvID
     */
    getAttributeViewKeysByAvID: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
    }) => SyApiMethodResponse<any[]>;
    /**
     * 根据 ID 获取属性视图字段
     * @path /api/av/getAttributeViewKeysByID
     */
    getAttributeViewKeysByID: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 字段 ID 数组（必需） */
        keyIDs: SiyuanID[];
    }) => SyApiMethodResponse<any[]>;
    /**
     * 复制属性视图块
     * @path /api/av/duplicateAttributeViewBlock
     */
    duplicateAttributeViewBlock: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
    }) => SyApiMethodResponse<IDuplicateAttributeViewBlockResponse>;
    /**
     * 追加属性视图非绑定块及值
     * @path /api/av/appendAttributeViewDetachedBlocksWithValues
     */
    appendAttributeViewDetachedBlocksWithValues: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 块值数组，二维数组结构 */
        blocksValues: Array<IAVValue[]>;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取当前属性视图图片
     * @path /api/av/getCurrentAttrViewImages
     */
    getCurrentAttrViewImages: (data: {
        /** 属性视图 ID（必需） */
        id: SiyuanID;
        /** 视图 ID（可选） */
        viewID?: SiyuanID;
        /** 查询字符串（可选） */
        query?: string;
    }) => SyApiMethodResponse<any[]>;
    /**
     * 更改属性视图布局
     * @path /api/av/changeAttrViewLayout
     */
    changeAttrViewLayout: (data: {
        /** 块 ID（必需） */
        blockID: SiyuanID;
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 布局类型（必需） */
        layoutType: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置属性视图分组
     * @path /api/av/setAttrViewGroup
     */
    setAttrViewGroup: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 块 ID（必需） */
        blockID: SiyuanID;
        /** 分组信息（必需） */
        group: Record<string, any>;
    }) => SyApiMethodResponse<any>;
    /**
     * 批量替换属性视图块
     * @path /api/av/batchReplaceAttributeViewBlocks
     */
    batchReplaceAttributeViewBlocks: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 是否非绑定块（必需） */
        isDetached: boolean;
        /** 新旧映射数组（必需） */
        oldNew: Array<Record<string, string>>;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取属性视图添加块默认值
     * @path /api/av/getAttributeViewAddingBlockDefaultValues
     */
    getAttributeViewAddingBlockDefaultValues: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 视图 ID（可选） */
        viewID?: SiyuanID;
        /** 分组 ID（可选） */
        groupID?: SiyuanID;
        /** 前置 ID（可选） */
        previousID?: SiyuanID;
        /** 添加的块 ID（可选） */
        addingBlockID?: SiyuanID;
    }) => SyApiMethodResponse<IAttributeViewAddingBlockDefaultValues>;
    /**
     * 根据项目 ID 获取绑定的块 ID
     * @path /api/av/getAttributeViewBoundBlockIDsByItemIDs
     */
    getAttributeViewBoundBlockIDsByItemIDs: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 项目 ID 数组（必需） */
        itemIDs: SiyuanID[];
    }) => SyApiMethodResponse<SiyuanID[]>;
    /**
     * 根据绑定的块 ID 获取项目 ID
     * @path /api/av/getAttributeViewItemIDsByBoundIDs
     */
    getAttributeViewItemIDsByBoundIDs: (data: {
        /** 属性视图 ID（必需） */
        avID: SiyuanID;
        /** 块 ID 数组（必需） */
        blockIDs: SiyuanID[];
    }) => SyApiMethodResponse<SiyuanID[]>;
    /**
     * 获取属性视图列
     */
    getAttributeViewColumns: (data: {
        avID: SiyuanID;
        viewID: SiyuanID;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map