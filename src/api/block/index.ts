import type { SyApiMethodResponse } from '../../core/index.js'
import type {
  Block,
  BlockDOM,
  BlockId,
  ChildBlock,
  NotebookId,
  TransactionItem,
} from '../../types/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Block API 类型定义
 */
export interface BlockAPI {
  /**
   * 插入块
   * @path /api/block/insertBlock
   * @param data - The data for the block
   * @param data.dataType - The type of the data(markdown, dom), default is 'markdown'
   * @param data.data - The data for the block
   * @param data.nextID - The next ID of the block
   * @param data.previousID - The previous ID of the block
   * @param data.parentID - The parent ID of the block
   * @returns - Promise<{ code: number, msg: string, data: TransactionItem[] }>
   */
  insertBlock: (data: {
    dataType?: 'markdown' | 'dom'
    data: string
    nextID?: BlockId
    previousID?: BlockId
    parentID?: BlockId
  }) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 在块的开头插入内容
   * @path /api/block/prependBlock
   * @param dataType - The type of the data(markdown, dom)
   * @param data - The data for the block
   * @param parentID - The parent ID of the block
   * @returns - Promise<{ code: number, msg: string, data: TransactionItem[] }>
   */
  prependBlock: (
    dataType: 'markdown' | 'dom',
    data: string,
    parentID: BlockId
  ) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 批量在块的开头插入内容
   * @path /api/block/batchPrependBlock
   */
  batchPrependBlock: (data: {
    /** 块列表 */
    blocks: Array<{
      /** 数据类型 */
      dataType: 'markdown' | 'dom'
      /** 数据内容 */
      data: string
      /** 父块 ID */
      parentID: BlockId
    }>
  }) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 在块的末尾追加内容
   * @path /api/block/appendBlock
   * @param dataType - The type of the data(markdown, dom), default is 'markdown'
   * @param data - The data for the block
   * @param parentID - The parent ID of the block
   * @returns - Promise<{ code: number, msg: string, data: TransactionItem[] }>
   */
  appendBlock: (
    dataType: 'markdown' | 'dom',
    data: string,
    parentID: BlockId
  ) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 批量在块的末尾追加内容
   * @path /api/block/batchAppendBlock
   */
  batchAppendBlock: (data: {
    /** 块列表 */
    blocks: Array<{
      /** 数据类型 */
      dataType: 'markdown' | 'dom'
      /** 数据内容 */
      data: string
      /** 父块 ID */
      parentID: BlockId
    }>
  }) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 批量插入块
   * @path /api/block/batchInsertBlock
   */
  batchInsertBlock: (data: {
    /** 块列表 */
    blocks: Array<{
      /** 数据类型 */
      dataType: 'markdown' | 'dom'
      /** 数据内容 */
      data: string
      /** 父块 ID（可选） */
      parentID?: BlockId
      /** 前一个块 ID（可选） */
      previousID?: BlockId
      /** 下一个块 ID（可选） */
      nextID?: BlockId
    }>
  }) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 追加内容到日记
   * @path /api/block/appendDailyNoteBlock
   */
  appendDailyNoteBlock: (
    dataType: 'markdown' | 'dom',
    data: string,
    notebook: NotebookId
  ) => SyApiMethodResponse<any[]>
  /**
   * 在日记开头插入内容
   * @path /api/block/prependDailyNoteBlock
   */
  prependDailyNoteBlock: (
    dataType: 'markdown' | 'dom',
    data: string,
    notebook: NotebookId
  ) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 更新块内容
   * @path /api/block/updateBlock
   * @param dataType - The type of the data(markdown, dom)
   * @param data - The data for the block
   * @param id - The ID of the block to update
   * @returns - Promise<{ code: number, msg: string, data: TransactionItem[] }>
   */
  updateBlock: (
    dataType: 'markdown' | 'dom',
    data: string,
    id: BlockId
  ) => SyApiMethodResponse<TransactionItem[]>
  batchUpdateBlock: (
    blocks: Array<{
      id: string
      data: string
      dataType?: "markdown" | "dom"
    }>
  ) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 删除块
   * @path /api/block/deleteBlock
   * @param id - The ID of the block to delete
   * @returns - Promise<{ code: number, msg: string, data: TransactionItem[] }>
   */
  deleteBlock: (id: BlockId) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 移动块
   * @path /api/block/moveBlock
   */
  moveBlock: (
    id: BlockId,
    previousID?: BlockId,
    parentID?: BlockId
  ) => SyApiMethodResponse<any[]>
  /**
   * 移动大纲标题
   * @path /api/block/moveOutlineHeading
   */
  moveOutlineHeading: (data: {
    /** 块 ID */
    id: BlockId
    /** 父块 ID（可选） */
    parentID?: BlockId
    /** 前一个块 ID（可选） */
    previousID?: BlockId
  }) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 折叠块
   * @path /api/block/foldBlock
   */
  foldBlock: (id: BlockId) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 展开块
   * @path /api/block/unfoldBlock
   */
  unfoldBlock: (id: BlockId) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 获取块的 Kramdown 格式
   * @path /api/block/getBlockKramdown
   */
  getBlockKramdown: (id: BlockId) => SyApiMethodResponse<any>
  /**
   * 获取子块列表
   * @path /api/block/getChildBlocks
   * @param id - The ID of the parent block
   * @returns - Promise<{ code: number, msg: string, data: ChildBlock[] }>
   */
  getChildBlocks: (id: BlockId) => SyApiMethodResponse<ChildBlock[]>
  /**
   * 获取块的索引位置
   * @path /api/block/getBlocksIndexes
   */
  getBlocksIndexes: (ids: BlockId[]) => SyApiMethodResponse<{
    [key: string]: number
  }>
  /**
   * 转移块引用
   * @path /api/block/transferBlockRef
   */
  transferBlockRef: (
    fromID: BlockId,
    toID: BlockId,
    refIDs: BlockId[]
  ) => SyApiMethodResponse<any>
  /**
   * 获取块的 DOM 结构
   * @path /api/block/getBlockDOM
   * @param id - The ID of the block
   * @returns - Promise<{ code: number, msg: string, data: BlockDOM }>
   */
  getBlockDOM: (id: BlockId) => SyApiMethodResponse<BlockDOM>
  /**
   * 批量获取块的 DOM 结构
   * @path /api/block/getBlockDOMs
   * @param ids - The IDs of the blocks
   * @returns - Promise<{ code: number, msg: string, data: BlockDOM[] }>
   */
  getBlockDOMs: (ids: BlockId[]) => SyApiMethodResponse<BlockDOM[]>
  /**
   * 获取块的 DOM 结构（包含嵌入块）
   * @path /api/block/getBlockDOMWithEmbed
   */
  getBlockDOMWithEmbed: (id: BlockId) => SyApiMethodResponse<{
    id: string
    dom: string
  }>
  /**
   * 批量获取块的 DOM 结构（包含嵌入块）
   * @path /api/block/getBlockDOMsWithEmbed
   */
  getBlockDOMsWithEmbed: (ids: BlockId[]) => SyApiMethodResponse<BlockDOM[]>
  /**
   * 获取尾部子块
   * @path /api/block/getTailChildBlocks
   */
  getTailChildBlocks: (data: {
    /** 块 ID */
    id: BlockId
    /** 数量（可选，默认 7） */
    n?: number
  }) => SyApiMethodResponse<ChildBlock[]>
  /**
   * 获取块面包屑
   * @path /api/block/getBlockBreadcrumb
   */
  getBlockBreadcrumb: (data: {
    /** 块 ID */
    id: BlockId
    /** 排除的类型（可选） */
    excludeTypes?: string[]
  }) => SyApiMethodResponse<any[]>
  /**
   * 获取块索引
   * @path /api/block/getBlockIndex
   */
  getBlockIndex: (id: BlockId) => SyApiMethodResponse<number>
  /**
   * 获取引用 ID 列表
   * @path /api/block/getRefIDs
   */
  getRefIDs: (data: {
    /** 块 ID（可选，为空时返回所有） */
    id?: BlockId
  }) => SyApiMethodResponse<{
    refDefs: any[]
    originalRefBlockIDs: string[]
  }>
  /**
   * 根据文件注释 ID 获取引用 ID 列表
   * @path /api/block/getRefIDsByFileAnnotationID
   */
  getRefIDsByFileAnnotationID: (data: {
    /** 文件注释 ID */
    id: BlockId
  }) => SyApiMethodResponse<{
    refDefs: any[]
  }>
  /**
   * 根据引用文本获取块定义 ID 列表
   * @path /api/block/getBlockDefIDsByRefText
   */
  getBlockDefIDsByRefText: (data: {
    /** 锚点文本 */
    anchor: string
    /** 排除的 ID 列表（可选） */
    excludeIDs?: BlockId[]
  }) => SyApiMethodResponse<{
    refDefs: any[]
  }>
  /**
   * 获取引用文本
   * @path /api/block/getRefText
   */
  getRefText: (id: BlockId) => SyApiMethodResponse<string>
  /**
   * 获取 DOM 文本
   * @path /api/block/getDOMText
   */
  getDOMText: (data: {
    /** DOM 字符串 */
    dom: string
  }) => SyApiMethodResponse<string>
  /**
   * 获取树统计信息
   * @path /api/block/getTreeStat
   */
  getTreeStat: (data: {
    /** 块 ID */
    id: BlockId
    /** 请求 ID（可选） */
    reqId?: number
  }) => SyApiMethodResponse<{
    reqId?: number
    stat: any
  }>
  /**
   * 获取块字数统计
   * @path /api/block/getBlocksWordCount
   */
  getBlocksWordCount: (data: {
    /** 块 ID 列表 */
    ids: BlockId[]
    /** 请求 ID（可选） */
    reqId?: number
  }) => SyApiMethodResponse<{
    reqId?: number
    stat: any
  }>
  /**
   * 获取内容字数统计
   * @path /api/block/getContentWordCount
   */
  getContentWordCount: (data: {
    /** 内容 */
    content: string
    /** 请求 ID（可选） */
    reqId?: number
  }) => SyApiMethodResponse<{
    reqId?: number
    stat: any
  }>
  /**
   * 获取最近更新的块
   * @path /api/block/getRecentUpdatedBlocks
   */
  getRecentUpdatedBlocks: () => SyApiMethodResponse<any[]>
  /**
   * 获取文档信息
   * @path /api/block/getDocInfo
   */
  getDocInfo: (id: BlockId) => SyApiMethodResponse<{
    box: string
    path: string
    rootID: string
    rootTitle: string
    rootChildID: string
    rootIcon: string
  }>
  /**
   * 批量获取文档信息
   * @path /api/block/getDocsInfo
   */
  getDocsInfo: (data: {
    /** 文档 ID 列表 */
    ids: BlockId[]
    /** 是否查询引用计数 */
    refCount: boolean
    /** 是否查询属性视图 */
    av: boolean
  }) => SyApiMethodResponse<any>
  /**
   * 检查块是否存在
   * @path /api/block/checkBlockExist
   */
  checkBlockExist: (id: BlockId) => SyApiMethodResponse<boolean>
  /**
   * 获取展开的父块 ID
   * @path /api/block/getUnfoldedParentID
   */
  getUnfoldedParentID: (id: BlockId) => SyApiMethodResponse<{
    parentID: string
  }>
  /**
   * 检查块是否折叠
   * @path /api/block/checkBlockFold
   */
  checkBlockFold: (id: BlockId) => SyApiMethodResponse<{
    isFolded: boolean
    isRoot: boolean
  }>
  /**
   * 获取标题级别事务
   * @path /api/block/getHeadingLevelTransaction
   */
  getHeadingLevelTransaction: (data: {
    /** 块 ID */
    id: BlockId
    /** 级别 */
    level: number
  }) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 获取标题删除事务
   * @path /api/block/getHeadingDeleteTransaction
   */
  getHeadingDeleteTransaction: (id: BlockId) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 获取标题插入事务
   * @path /api/block/getHeadingInsertTransaction
   */
  getHeadingInsertTransaction: (id: BlockId) => SyApiMethodResponse<TransactionItem[]>
  /**
   * 获取标题子块 ID 列表
   * @path /api/block/getHeadingChildrenIDs
   */
  getHeadingChildrenIDs: (id: BlockId) => SyApiMethodResponse<BlockId[]>
  /**
   * 获取标题子块 DOM
   * @path /api/block/getHeadingChildrenDOM
   */
  getHeadingChildrenDOM: (data: {
    /** 块 ID */
    id: BlockId
    /** 是否移除折叠属性（可选，默认 true） */
    removeFoldAttr?: boolean
  }) => SyApiMethodResponse<string>
  /**
   * 追加标题子块
   * @path /api/block/appendHeadingChildren
   */
  appendHeadingChildren: (data: {
    /** 块 ID */
    id: BlockId
    /** 子块 DOM */
    childrenDOM: string
  }) => SyApiMethodResponse<any>
  /**
   * 获取块兄弟 ID
   * @path /api/block/getBlockSiblingID
   */
  getBlockSiblingID: (id: BlockId) => SyApiMethodResponse<{
    parent: string
    next: string
    previous: string
  }>
  /**
   * 获取块相关 ID
   * @path /api/block/getBlockRelevantIDs
   */
  getBlockRelevantIDs: (id: BlockId) => SyApiMethodResponse<{
    parentID: string
    previousID: string
    nextID: string
  }>
  /**
   * 获取块树信息
   * @path /api/block/getBlockTreeInfos
   */
  getBlockTreeInfos: (ids: BlockId[]) => SyApiMethodResponse<any[]>
  /**
   * 检查块引用
   * @path /api/block/checkBlockRef
   */
  checkBlockRef: (data: {
    /** 块 ID 列表 */
    ids: BlockId[]
  }) => SyApiMethodResponse<any>
  /**
   * 设置块提醒
   * @path /api/block/setBlockReminder
   */
  setBlockReminder: (data: {
    /** 块 ID */
    id: BlockId
    /** 提醒时间（格式：yyyyMMddHHmmss） */
    timed: string
  }) => SyApiMethodResponse<any>
  /**
   * 交换块引用
   * @path /api/block/swapBlockRef
   */
  swapBlockRef: (data: {
    /** 引用块 ID */
    refID: BlockId
    /** 定义块 ID */
    defID: BlockId
    /** 是否包含子块 */
    includeChildren: boolean
  }) => SyApiMethodResponse<any>
}


SiYuanAPI.prototype.insertBlock = function (data: {
  dataType?: 'markdown' | 'dom'
  data: string
  nextID?: string
  previousID?: string
  parentID?: string
}) {
  return this.request('/api/block/insertBlock', {
    ...data,
    dataType: data.dataType || 'markdown',
  })
}

SiYuanAPI.prototype.batchInsertBlock = function (data: {
  blocks: Array<{
    dataType: 'markdown' | 'dom'
    data: string
    parentID?: string
    previousID?: string
    nextID?: string
  }>
}) {
  return this.request('/api/block/batchInsertBlock', data)
}

SiYuanAPI.prototype.prependBlock = function (dataType: 'markdown' | 'dom', data: string, parentID: string) {
  return this.request('/api/block/prependBlock', {
    dataType,
    data,
    parentID,
  })
}

SiYuanAPI.prototype.batchPrependBlock = function (data: {
  blocks: Array<{
    dataType: 'markdown' | 'dom'
    data: string
    parentID: string
  }>
}) {
  return this.request('/api/block/batchPrependBlock', data)
}

SiYuanAPI.prototype.appendBlock = function (dataType: 'markdown' | 'dom' = 'markdown', data: string, parentID: string) {
  return this.request('/api/block/appendBlock', {
    dataType,
    data,
    parentID,
  })
}

SiYuanAPI.prototype.batchAppendBlock = function (data: {
  blocks: Array<{
    dataType: 'markdown' | 'dom'
    data: string
    parentID: string
  }>
}) {
  return this.request('/api/block/batchAppendBlock', data)
}

SiYuanAPI.prototype.appendDailyNoteBlock = function (dataType: 'markdown' | 'dom', data: string, notebook: string) {
  return this.request('/api/block/appendDailyNoteBlock', {
    dataType,
    data,
    notebook,
  })
}

SiYuanAPI.prototype.prependDailyNoteBlock = function (dataType: 'markdown' | 'dom', data: string, notebook: string) {
  return this.request('/api/block/prependDailyNoteBlock', {
    dataType,
    data,
    notebook,
  })
}

SiYuanAPI.prototype.updateBlock = function (dataType: 'markdown' | 'dom', data: string, id: string) {
  return this.request('/api/block/updateBlock', {
    dataType,
    data,
    id,
  })
}

SiYuanAPI.prototype.batchUpdateBlock = function (blocks: Array<{ id: string, data: string, dataType?: "markdown" | "dom" }>) {
  return this.request('/api/block/batchUpdateBlock', { blocks })
}

SiYuanAPI.prototype.deleteBlock = function (id: string) {
  return this.request('/api/block/deleteBlock', { id })
}

SiYuanAPI.prototype.moveBlock = function (id: string, previousID?: string, parentID?: string) {
  return this.request('/api/block/moveBlock', {
    id,
    previousID,
    parentID,
  })
}

SiYuanAPI.prototype.moveOutlineHeading = function (data: {
  id: string
  parentID?: string
  previousID?: string
}) {
  return this.request('/api/block/moveOutlineHeading', data)
}

SiYuanAPI.prototype.foldBlock = function (id: string) {
  return this.request('/api/block/foldBlock', { id })
}

SiYuanAPI.prototype.unfoldBlock = function (id: string) {
  return this.request('/api/block/unfoldBlock', { id })
}

SiYuanAPI.prototype.getBlockKramdown = function (id: string) {
  return this.request('/api/block/getBlockKramdown', { id })
}

SiYuanAPI.prototype.getChildBlocks = function (id: string) {
  return this.request('/api/block/getChildBlocks', { id })
}

SiYuanAPI.prototype.getBlocksIndexes = function (ids: string[]) {
  return this.request('/api/block/getBlocksIndexes', { ids })
}

SiYuanAPI.prototype.transferBlockRef = function (fromID: string, toID: string, refIDs: string[]) {
  return this.request('/api/block/transferBlockRef', {
    fromID,
    toID,
    refIDs,
  })
}

SiYuanAPI.prototype.getBlockDOM = function (id: string) {
  return this.request('/api/block/getBlockDOM', { id })
}

SiYuanAPI.prototype.getBlockDOMs = function (ids: string[]) {
  return this.request('/api/block/getBlockDOMs', { ids })
}

SiYuanAPI.prototype.getBlockDOMWithEmbed = function (id: string) {
  return this.request('/api/block/getBlockDOMWithEmbed', { id })
}

SiYuanAPI.prototype.getBlockDOMsWithEmbed = function (ids: string[]) {
  return this.request('/api/block/getBlockDOMsWithEmbed', { ids })
}

SiYuanAPI.prototype.getTailChildBlocks = function (data: {
  id: string
  n?: number
}) {
  return this.request('/api/block/getTailChildBlocks', data)
}

SiYuanAPI.prototype.getBlockBreadcrumb = function (data: {
  id: string
  excludeTypes?: string[]
}) {
  return this.request('/api/block/getBlockBreadcrumb', data)
}

SiYuanAPI.prototype.getBlockIndex = function (id: string) {
  return this.request('/api/block/getBlockIndex', { id })
}

SiYuanAPI.prototype.getRefIDs = function (data: {
  id?: string
}) {
  return this.request('/api/block/getRefIDs', data)
}

SiYuanAPI.prototype.getRefIDsByFileAnnotationID = function (data: {
  id: string
}) {
  return this.request('/api/block/getRefIDsByFileAnnotationID', data)
}

SiYuanAPI.prototype.getBlockDefIDsByRefText = function (data: {
  anchor: string
  excludeIDs?: string[]
}) {
  return this.request('/api/block/getBlockDefIDsByRefText', data)
}

SiYuanAPI.prototype.getRefText = function (id: string) {
  return this.request('/api/block/getRefText', { id })
}

SiYuanAPI.prototype.getDOMText = function (data: {
  dom: string
}) {
  return this.request('/api/block/getDOMText', data)
}

SiYuanAPI.prototype.getTreeStat = function (data: {
  id: string
  reqId?: number
}) {
  return this.request('/api/block/getTreeStat', data)
}

SiYuanAPI.prototype.getBlocksWordCount = function (data: {
  ids: string[]
  reqId?: number
}) {
  return this.request('/api/block/getBlocksWordCount', data)
}

SiYuanAPI.prototype.getContentWordCount = function (data: {
  content: string
  reqId?: number
}) {
  return this.request('/api/block/getContentWordCount', data)
}

SiYuanAPI.prototype.getRecentUpdatedBlocks = function () {
  return this.request('/api/block/getRecentUpdatedBlocks', {})
}

SiYuanAPI.prototype.getDocInfo = function (id: string) {
  return this.request('/api/block/getDocInfo', { id })
}

SiYuanAPI.prototype.getDocsInfo = function (data: {
  ids: string[]
  refCount: boolean
  av: boolean
}) {
  return this.request('/api/block/getDocsInfo', data)
}

SiYuanAPI.prototype.checkBlockExist = function (id: string) {
  return this.request('/api/block/checkBlockExist', { id })
}

SiYuanAPI.prototype.getUnfoldedParentID = function (id: string) {
  return this.request('/api/block/getUnfoldedParentID', { id })
}

SiYuanAPI.prototype.checkBlockFold = function (id: string) {
  return this.request('/api/block/checkBlockFold', { id })
}

SiYuanAPI.prototype.getHeadingLevelTransaction = function (data: {
  id: string
  level: number
}) {
  return this.request('/api/block/getHeadingLevelTransaction', data)
}

SiYuanAPI.prototype.getHeadingDeleteTransaction = function (id: string) {
  return this.request('/api/block/getHeadingDeleteTransaction', { id })
}

SiYuanAPI.prototype.getHeadingInsertTransaction = function (id: string) {
  return this.request('/api/block/getHeadingInsertTransaction', { id })
}

SiYuanAPI.prototype.getHeadingChildrenIDs = function (id: string) {
  return this.request('/api/block/getHeadingChildrenIDs', { id })
}

SiYuanAPI.prototype.getHeadingChildrenDOM = function (data: {
  id: string
  removeFoldAttr?: boolean
}) {
  return this.request('/api/block/getHeadingChildrenDOM', data)
}

SiYuanAPI.prototype.appendHeadingChildren = function (data: {
  id: string
  childrenDOM: string
}) {
  return this.request('/api/block/appendHeadingChildren', data)
}

SiYuanAPI.prototype.getBlockSiblingID = function (id: string) {
  return this.request('/api/block/getBlockSiblingID', { id })
}

SiYuanAPI.prototype.getBlockRelevantIDs = function (id: string) {
  return this.request('/api/block/getBlockRelevantIDs', { id })
}

SiYuanAPI.prototype.getBlockTreeInfos = function (ids: string[]) {
  return this.request('/api/block/getBlockTreeInfos', { ids })
}

SiYuanAPI.prototype.checkBlockRef = function (data: {
  ids: string[]
}) {
  return this.request('/api/block/checkBlockRef', data)
}

SiYuanAPI.prototype.setBlockReminder = function (data: {
  id: string
  timed: string
}) {
  return this.request('/api/block/setBlockReminder', data)
}

SiYuanAPI.prototype.swapBlockRef = function (data: {
  refID: string
  defID: string
  includeChildren: boolean
}) {
  return this.request('/api/block/swapBlockRef', data)
}

