import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * 卡片数据
 */
export interface IRiffCard {
    id: string;
    deckID: string;
    blockID: string;
    [key: string]: any;
}
/**
 * 卡片组数据
 */
export interface IRiffDeck {
    id: string;
    name: string;
    [key: string]: any;
}
/**
 * 到期卡片结果
 */
export interface IGetRiffDueCardsResult {
    cards: IRiffCard[];
    unreviewedCount: number;
    unreviewedNewCardCount: number;
    unreviewedOldCardCount: number;
}
/**
 * 卡片列表结果
 */
export interface IGetRiffCardsResult {
    blocks: any[];
    total: number;
    pageCount: number;
}
/**
 * Riff API 类型定义
 */
export interface RiffAPI {
    /**
     * 创建卡片组
     * @path /api/riff/createRiffDeck
     */
    createRiffDeck: (data: {
        /** 卡片组名称（必需） */
        name: string;
    }) => SyApiMethodResponse<IRiffDeck>;
    /**
     * 重命名卡片组
     * @path /api/riff/renameRiffDeck
     */
    renameRiffDeck: (data: {
        /** 卡片组 ID（必需） */
        deckID: SiyuanID;
        /** 新名称（必需） */
        name: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 删除卡片组
     * @path /api/riff/removeRiffDeck
     */
    removeRiffDeck: (data: {
        /** 卡片组 ID（必需） */
        deckID: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取卡片组列表
     * @path /api/riff/getRiffDecks
     */
    getRiffDecks: () => SyApiMethodResponse<IRiffDeck[]>;
    /**
     * 添加卡片
     * @path /api/riff/addRiffCards
     */
    addRiffCards: (data: {
        /** 卡片组 ID（必需） */
        deckID: SiyuanID;
        /** 块 ID 数组（必需） */
        blockIDs: SiyuanID[];
    }) => SyApiMethodResponse<any>;
    /**
     * 删除卡片
     * @path /api/riff/removeRiffCards
     */
    removeRiffCards: (data: {
        /** 卡片组 ID（必需） */
        deckID: SiyuanID;
        /** 块 ID 数组（必需） */
        blockIDs: SiyuanID[];
    }) => SyApiMethodResponse<any>;
    /**
     * 获取到期卡片（卡片组）
     * @path /api/riff/getRiffDueCards
     */
    getRiffDueCards: (data: {
        /** 卡片组 ID（必需） */
        deckID: SiyuanID;
        /** 已复习卡片 ID 数组（可选） */
        reviewedCards?: SiyuanID[];
    }) => SyApiMethodResponse<IGetRiffDueCardsResult>;
    /**
     * 获取到期卡片（树）
     * @path /api/riff/getTreeRiffDueCards
     */
    getTreeRiffDueCards: (data: {
        /** 根块 ID（必需） */
        rootID: SiyuanID;
        /** 已复习卡片 ID 数组（可选） */
        reviewedCards?: SiyuanID[];
    }) => SyApiMethodResponse<IGetRiffDueCardsResult>;
    /**
     * 获取到期卡片（笔记本）
     * @path /api/riff/getNotebookRiffDueCards
     */
    getNotebookRiffDueCards: (data: {
        /** 笔记本 ID（必需） */
        notebook: SiyuanID;
        /** 已复习卡片 ID 数组（可选） */
        reviewedCards?: SiyuanID[];
    }) => SyApiMethodResponse<IGetRiffDueCardsResult>;
    /**
     * 复习卡片
     * @path /api/riff/reviewRiffCard
     */
    reviewRiffCard: (data: {
        /** 卡片组 ID（必需） */
        deckID: SiyuanID;
        /** 卡片 ID（必需） */
        cardID: SiyuanID;
        /** 评分（必需） */
        rating: number;
        /** 已复习卡片 ID 数组（可选） */
        reviewedCards?: SiyuanID[];
    }) => SyApiMethodResponse<any>;
    /**
     * 跳过复习卡片
     * @path /api/riff/skipReviewRiffCard
     */
    skipReviewRiffCard: (data: {
        /** 卡片组 ID（必需） */
        deckID: SiyuanID;
        /** 卡片 ID（必需） */
        cardID: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取卡片（卡片组）
     * @path /api/riff/getRiffCards
     */
    getRiffCards: (data: {
        /** 卡片组 ID（必需） */
        id: SiyuanID;
        /** 页码（必需） */
        page: number;
        /** 每页大小，默认 20（可选） */
        pageSize?: number;
    }) => SyApiMethodResponse<IGetRiffCardsResult>;
    /**
     * 获取卡片（树）
     * @path /api/riff/getTreeRiffCards
     */
    getTreeRiffCards: (data: {
        /** 根块 ID（必需） */
        id: SiyuanID;
        /** 页码（必需） */
        page: number;
        /** 每页大小，默认 20（可选） */
        pageSize?: number;
    }) => SyApiMethodResponse<IGetRiffCardsResult>;
    /**
     * 获取卡片（笔记本）
     * @path /api/riff/getNotebookRiffCards
     */
    getNotebookRiffCards: (data: {
        /** 笔记本 ID（必需） */
        id: SiyuanID;
        /** 页码（必需） */
        page: number;
        /** 每页大小，默认 20（可选） */
        pageSize?: number;
    }) => SyApiMethodResponse<IGetRiffCardsResult>;
    /**
     * 重置卡片
     * @path /api/riff/resetRiffCards
     */
    resetRiffCards: (data: {
        /** 类型：notebook/tree/deck（必需） */
        type: string;
        /** ID（必需） */
        id: SiyuanID;
        /** 卡片组 ID（必需） */
        deckID: SiyuanID;
        /** 块 ID 数组（可选，不传或空数组则重置所有） */
        blockIDs?: SiyuanID[];
    }) => SyApiMethodResponse<any>;
    /**
     * 批量设置卡片到期时间
     * @path /api/riff/batchSetRiffCardsDueTime
     */
    batchSetRiffCardsDueTime: (data: {
        /** 卡片到期时间数组（必需） */
        cardDues: Array<{
            id: SiyuanID;
            due: string;
        }>;
    }) => SyApiMethodResponse<any>;
    /**
     * 根据块 ID 获取卡片
     * @path /api/riff/getRiffCardsByBlockIDs
     */
    getRiffCardsByBlockIDs: (data: {
        /** 块 ID 数组（必需） */
        blockIDs: SiyuanID[];
    }) => SyApiMethodResponse<{
        blocks: any[];
    }>;
}
//# sourceMappingURL=index.d.ts.map