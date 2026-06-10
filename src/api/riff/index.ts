import type { SyApiMethodResponse } from '../../core/index.js'
import type { SiyuanID } from '../../types/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * 卡片数据
 */
export interface IRiffCard {
  id: string
  deckID: string
  blockID: string
  [key: string]: any
}

/**
 * 卡片组数据
 */
export interface IRiffDeck {
  id: string
  name: string
  [key: string]: any
}

/**
 * 到期卡片结果
 */
export interface IGetRiffDueCardsResult {
  cards: IRiffCard[]
  unreviewedCount: number
  unreviewedNewCardCount: number
  unreviewedOldCardCount: number
}

/**
 * 卡片列表结果
 */
export interface IGetRiffCardsResult {
  blocks: any[]
  total: number
  pageCount: number
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
    name: string
  }) => SyApiMethodResponse<IRiffDeck>

  /**
   * 重命名卡片组
   * @path /api/riff/renameRiffDeck
   */
  renameRiffDeck: (data: {
    /** 卡片组 ID（必需） */
    deckID: SiyuanID
    /** 新名称（必需） */
    name: string
  }) => SyApiMethodResponse<any>

  /**
   * 删除卡片组
   * @path /api/riff/removeRiffDeck
   */
  removeRiffDeck: (data: {
    /** 卡片组 ID（必需） */
    deckID: SiyuanID
  }) => SyApiMethodResponse<any>

  /**
   * 获取卡片组列表
   * @path /api/riff/getRiffDecks
   */
  getRiffDecks: () => SyApiMethodResponse<IRiffDeck[]>

  /**
   * 添加卡片
   * @path /api/riff/addRiffCards
   */
  addRiffCards: (data: {
    /** 卡片组 ID（必需） */
    deckID: SiyuanID
    /** 块 ID 数组（必需） */
    blockIDs: SiyuanID[]
  }) => SyApiMethodResponse<any>

  /**
   * 删除卡片
   * @path /api/riff/removeRiffCards
   */
  removeRiffCards: (data: {
    /** 卡片组 ID（必需） */
    deckID: SiyuanID
    /** 块 ID 数组（必需） */
    blockIDs: SiyuanID[]
  }) => SyApiMethodResponse<any>

  /**
   * 获取到期卡片（卡片组）
   * @path /api/riff/getRiffDueCards
   */
  getRiffDueCards: (data: {
    /** 卡片组 ID（必需） */
    deckID: SiyuanID
    /** 已复习卡片 ID 数组（可选） */
    reviewedCards?: SiyuanID[]
  }) => SyApiMethodResponse<IGetRiffDueCardsResult>

  /**
   * 获取到期卡片（树）
   * @path /api/riff/getTreeRiffDueCards
   */
  getTreeRiffDueCards: (data: {
    /** 根块 ID（必需） */
    rootID: SiyuanID
    /** 已复习卡片 ID 数组（可选） */
    reviewedCards?: SiyuanID[]
  }) => SyApiMethodResponse<IGetRiffDueCardsResult>

  /**
   * 获取到期卡片（笔记本）
   * @path /api/riff/getNotebookRiffDueCards
   */
  getNotebookRiffDueCards: (data: {
    /** 笔记本 ID（必需） */
    notebook: SiyuanID
    /** 已复习卡片 ID 数组（可选） */
    reviewedCards?: SiyuanID[]
  }) => SyApiMethodResponse<IGetRiffDueCardsResult>

  /**
   * 复习卡片
   * @path /api/riff/reviewRiffCard
   */
  reviewRiffCard: (data: {
    /** 卡片组 ID（必需） */
    deckID: SiyuanID
    /** 卡片 ID（必需） */
    cardID: SiyuanID
    /** 评分（必需） */
    rating: number
    /** 已复习卡片 ID 数组（可选） */
    reviewedCards?: SiyuanID[]
  }) => SyApiMethodResponse<any>

  /**
   * 跳过复习卡片
   * @path /api/riff/skipReviewRiffCard
   */
  skipReviewRiffCard: (data: {
    /** 卡片组 ID（必需） */
    deckID: SiyuanID
    /** 卡片 ID（必需） */
    cardID: SiyuanID
  }) => SyApiMethodResponse<any>

  /**
   * 获取卡片（卡片组）
   * @path /api/riff/getRiffCards
   */
  getRiffCards: (data: {
    /** 卡片组 ID（必需） */
    id: SiyuanID
    /** 页码（必需） */
    page: number
    /** 每页大小，默认 20（可选） */
    pageSize?: number
  }) => SyApiMethodResponse<IGetRiffCardsResult>

  /**
   * 获取卡片（树）
   * @path /api/riff/getTreeRiffCards
   */
  getTreeRiffCards: (data: {
    /** 根块 ID（必需） */
    id: SiyuanID
    /** 页码（必需） */
    page: number
    /** 每页大小，默认 20（可选） */
    pageSize?: number
  }) => SyApiMethodResponse<IGetRiffCardsResult>

  /**
   * 获取卡片（笔记本）
   * @path /api/riff/getNotebookRiffCards
   */
  getNotebookRiffCards: (data: {
    /** 笔记本 ID（必需） */
    id: SiyuanID
    /** 页码（必需） */
    page: number
    /** 每页大小，默认 20（可选） */
    pageSize?: number
  }) => SyApiMethodResponse<IGetRiffCardsResult>

  /**
   * 重置卡片
   * @path /api/riff/resetRiffCards
   */
  resetRiffCards: (data: {
    /** 类型：notebook/tree/deck（必需） */
    type: string
    /** ID（必需） */
    id: SiyuanID
    /** 卡片组 ID（必需） */
    deckID: SiyuanID
    /** 块 ID 数组（可选，不传或空数组则重置所有） */
    blockIDs?: SiyuanID[]
  }) => SyApiMethodResponse<any>

  /**
   * 批量设置卡片到期时间
   * @path /api/riff/batchSetRiffCardsDueTime
   */
  batchSetRiffCardsDueTime: (data: {
    /** 卡片到期时间数组（必需） */
    cardDues: Array<{
      id: SiyuanID
      due: string
    }>
  }) => SyApiMethodResponse<any>

  /**
   * 根据块 ID 获取卡片
   * @path /api/riff/getRiffCardsByBlockIDs
   */
  getRiffCardsByBlockIDs: (data: {
    /** 块 ID 数组（必需） */
    blockIDs: SiyuanID[]
  }) => SyApiMethodResponse<{ blocks: any[] }>
}

// 实现部分
SiYuanAPI.prototype.createRiffDeck = function (data: {
  name: string
}) {
  return this.request('/api/riff/createRiffDeck', data)
}

SiYuanAPI.prototype.renameRiffDeck = function (data: {
  deckID: SiyuanID
  name: string
}) {
  return this.request('/api/riff/renameRiffDeck', data)
}

SiYuanAPI.prototype.removeRiffDeck = function (data: {
  deckID: SiyuanID
}) {
  return this.request('/api/riff/removeRiffDeck', data)
}

SiYuanAPI.prototype.getRiffDecks = function () {
  return this.request('/api/riff/getRiffDecks', {})
}

SiYuanAPI.prototype.addRiffCards = function (data: {
  deckID: SiyuanID
  blockIDs: SiyuanID[]
}) {
  return this.request('/api/riff/addRiffCards', data)
}

SiYuanAPI.prototype.removeRiffCards = function (data: {
  deckID: SiyuanID
  blockIDs: SiyuanID[]
}) {
  return this.request('/api/riff/removeRiffCards', data)
}

SiYuanAPI.prototype.getRiffDueCards = function (data: {
  deckID: SiyuanID
  reviewedCards?: SiyuanID[]
}) {
  return this.request('/api/riff/getRiffDueCards', data)
}

SiYuanAPI.prototype.getTreeRiffDueCards = function (data: {
  rootID: SiyuanID
  reviewedCards?: SiyuanID[]
}) {
  return this.request('/api/riff/getTreeRiffDueCards', data)
}

SiYuanAPI.prototype.getNotebookRiffDueCards = function (data: {
  notebook: SiyuanID
  reviewedCards?: SiyuanID[]
}) {
  return this.request('/api/riff/getNotebookRiffDueCards', data)
}

SiYuanAPI.prototype.reviewRiffCard = function (data: {
  deckID: SiyuanID
  cardID: SiyuanID
  rating: number
  reviewedCards?: SiyuanID[]
}) {
  return this.request('/api/riff/reviewRiffCard', data)
}

SiYuanAPI.prototype.skipReviewRiffCard = function (data: {
  deckID: SiyuanID
  cardID: SiyuanID
}) {
  return this.request('/api/riff/skipReviewRiffCard', data)
}

SiYuanAPI.prototype.getRiffCards = function (data: {
  id: SiyuanID
  page: number
  pageSize?: number
}) {
  return this.request('/api/riff/getRiffCards', data)
}

SiYuanAPI.prototype.getTreeRiffCards = function (data: {
  id: SiyuanID
  page: number
  pageSize?: number
}) {
  return this.request('/api/riff/getTreeRiffCards', data)
}

SiYuanAPI.prototype.getNotebookRiffCards = function (data: {
  id: SiyuanID
  page: number
  pageSize?: number
}) {
  return this.request('/api/riff/getNotebookRiffCards', data)
}

SiYuanAPI.prototype.resetRiffCards = function (data: {
  type: string
  id: SiyuanID
  deckID: SiyuanID
  blockIDs?: SiyuanID[]
}) {
  return this.request('/api/riff/resetRiffCards', data)
}

SiYuanAPI.prototype.batchSetRiffCardsDueTime = function (data: {
  cardDues: Array<{
    id: SiyuanID
    due: string
  }>
}) {
  return this.request('/api/riff/batchSetRiffCardsDueTime', data)
}

SiYuanAPI.prototype.getRiffCardsByBlockIDs = function (data: {
  blockIDs: SiyuanID[]
}) {
  return this.request('/api/riff/getRiffCardsByBlockIDs', data)
}

