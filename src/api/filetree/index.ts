import type { SyApiMethodResponse } from '../../core/index.js'
import type {
  BlockId,
  NotebookId,
} from '../../types/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * File Tree API 类型定义
 */
export interface FileTreeAPI {
  /**
   * 创建日记
   * @path /api/filetree/createDailyNote
   */
  createDailyNote: (notebook: NotebookId) => SyApiMethodResponse<{
    id: string
  }>
  /**
   * 使用 Markdown 创建文档
   * @path /api/filetree/createDocWithMd
   */
  createDocWithMd: (
    notebook: NotebookId,
    path: string,
    markdown: string
  ) => SyApiMethodResponse<string>
  /**
   * 重命名文档
   * @path /api/filetree/renameDoc
   */
  renameDoc: (
    notebook: NotebookId,
    path: string,
    title: string
  ) => SyApiMethodResponse<string>
  /**
   * 删除文档
   * @path /api/filetree/removeDoc
   */
  removeDoc: (
    notebook: NotebookId,
    path: string
  ) => SyApiMethodResponse<any>
  /**
   * 移动文档
   * @path /api/filetree/moveDocs
   */
  moveDocs: (
    fromPaths: string[],
    toNotebook: NotebookId,
    toPath: string
  ) => SyApiMethodResponse<any>
  /**
   * 根据路径获取人类可读路径
   * @path /api/filetree/getHPathByPath
   */
  getHPathByPath: (
    notebook: NotebookId,
    path: string
  ) => SyApiMethodResponse<string>
  /**
   * 根据块 ID 获取人类可读路径
   * @path /api/filetree/getHPathByID
   */
  getHPathByID: (id: BlockId) => SyApiMethodResponse<string>
  /**
   * 根据人类可读路径获取块 ID 列表
   * @path /api/filetree/getIDsByHPath
   */
  getIDsByHPath: (
    notebook: NotebookId,
    path: string
  ) => SyApiMethodResponse<string[]>
  /**
   * 搜索文档
   * @path /api/filetree/searchDocs
   */
  searchDocs: (data: {
    /** 关键词 */
    k: string
    /** 是否闪卡（可选） */
    flashcard?: boolean
  }) => SyApiMethodResponse<any[]>
  /**
   * 根据路径列出文档
   * @path /api/filetree/listDocsByPath
   */
  listDocsByPath: (data: {
    /** 笔记本 ID */
    notebook: NotebookId
    /** 路径 */
    path: string
    /** 排序模式（可选） */
    sort?: number
    /** 是否闪卡（可选） */
    flashcard?: boolean
    /** 最大列表数量（可选） */
    maxListCount?: number
    /** 是否显示隐藏文件（可选） */
    showHidden?: boolean
    /** 是否忽略最大列表提示（可选） */
    ignoreMaxListHint?: boolean
    /** 应用 ID（可选） */
    app?: string
  }) => SyApiMethodResponse<{
    box: string
    path: string
    files: any[]
  }>
  /**
   * 获取文档
   * @path /api/filetree/getDoc
   */
  getDoc: (data: {
    /** 文档 ID */
    id: BlockId
    /** 索引（可选） */
    index?: number
    /** 查询字符串（可选） */
    query?: string
    /** 查询方法（可选） */
    queryMethod?: number
    /** 查询类型（可选） */
    queryTypes?: Record<string, boolean>
    /** 模式：0-仅当前ID，1-向上，2-向下，3-上下都加载，4-加载末尾（可选） */
    mode?: number
    /** 大小（可选） */
    size?: number
    /** 起始 ID（可选） */
    startID?: BlockId
    /** 结束 ID（可选） */
    endID?: BlockId
    /** 是否反向链接（可选） */
    isBacklink?: boolean
    /** 原始引用块 ID 映射（可选） */
    originalRefBlockIDs?: Record<string, string>
    /** 是否高亮（可选，默认 true） */
    highlight?: boolean
    /** 请求 ID（可选） */
    reqId?: number
  }) => SyApiMethodResponse<{
    id: string
    mode: number
    parentID: string
    parent2ID: string
    rootID: string
    type: string
    content: string
    blockCount: number
    eof: boolean
    scroll: number
    box: string
    path: string
    isSyncing: boolean
    isBacklinkExpand: boolean
    keywords: string[]
    reqId?: number
  }>
  /**
   * 获取文档创建保存路径
   * @path /api/filetree/getDocCreateSavePath
   */
  getDocCreateSavePath: (data: {
    /** 笔记本 ID */
    notebook: NotebookId
  }) => SyApiMethodResponse<{
    box: string
    path: string
  }>
  /**
   * 获取引用创建保存路径
   * @path /api/filetree/getRefCreateSavePath
   */
  getRefCreateSavePath: (data: {
    /** 笔记本 ID */
    notebook: NotebookId
  }) => SyApiMethodResponse<{
    box: string
    path: string
  }>
  /**
   * 改变排序
   * @path /api/filetree/changeSort
   */
  changeSort: (data: {
    /** 笔记本 ID */
    notebook: NotebookId
    /** 路径列表（按排序顺序） */
    paths: string[]
  }) => SyApiMethodResponse<any>
  /**
   * 创建文档
   * @path /api/filetree/createDoc
   */
  createDoc: (data: {
    /** 笔记本 ID */
    notebook: NotebookId
    /** 路径 */
    path: string
    /** 标题 */
    title: string
    /** Markdown 内容（可选） */
    md?: string
    /** 排序列表（可选） */
    sorts?: string[]
  }) => SyApiMethodResponse<{
    id: string
  }>
  /**
   * 根据 ID 重命名文档
   * @path /api/filetree/renameDocByID
   */
  renameDocByID: (data: {
    /** 文档 ID */
    id: BlockId
    /** 新标题 */
    title: string
  }) => SyApiMethodResponse<any>
  /**
   * 根据 ID 删除文档
   * @path /api/filetree/removeDocByID
   */
  removeDocByID: (id: BlockId) => SyApiMethodResponse<any>
  /**
   * 批量删除文档
   * @path /api/filetree/removeDocs
   */
  removeDocs: (data: {
    /** 路径列表 */
    paths: string[]
  }) => SyApiMethodResponse<any>
  /**
   * 根据 ID 移动文档
   * @path /api/filetree/moveDocsByID
   */
  moveDocsByID: (data: {
    /** 源文档 ID 列表 */
    fromIDs: BlockId[]
    /** 目标文档 ID */
    toID: BlockId
  }) => SyApiMethodResponse<any>
  /**
   * 复制文档
   * @path /api/filetree/duplicateDoc
   */
  duplicateDoc: (data: {
    /** 文档 ID */
    id: BlockId
  }) => SyApiMethodResponse<{
    id: string
    notebook: string
    path: string
    hPath: string
  }>
  /**
   * 根据路径列表获取人类可读路径列表
   * @path /api/filetree/getHPathsByPaths
   */
  getHPathsByPaths: (data: {
    /** 路径列表 */
    paths: string[]
  }) => SyApiMethodResponse<string[]>
  /**
   * 根据 ID 获取路径
   * @path /api/filetree/getPathByID
   */
  getPathByID: (id: BlockId) => SyApiMethodResponse<{
    path: string
    notebook: string
  }>
  /**
   * 根据 ID 获取完整人类可读路径
   * @path /api/filetree/getFullHPathByID
   */
  getFullHPathByID: (id: BlockId) => SyApiMethodResponse<string>
  /**
   * 文档转标题
   * @path /api/filetree/doc2Heading
   */
  doc2Heading: (data: {
    /** 源文档 ID */
    srcID: BlockId
    /** 目标块 ID */
    targetID: BlockId
    /** 是否在目标后插入（可选） */
    after?: boolean
  }) => SyApiMethodResponse<{
    srcTreeBox: string
    srcTreePath: string
  }>
  /**
   * 标题转文档
   * @path /api/filetree/heading2Doc
   */
  heading2Doc: (data: {
    /** 源标题 ID */
    srcHeadingID: BlockId
    /** 目标笔记本 ID */
    targetNoteBook: NotebookId
    /** 目标路径（可选） */
    targetPath?: string
    /** 前一个路径（可选） */
    previousPath?: string
  }) => SyApiMethodResponse<{
    srcRootBlockID: string
    targetPath: string
  }>
  /**
   * 列表项转文档
   * @path /api/filetree/li2Doc
   */
  li2Doc: (data: {
    /** 源列表项 ID */
    srcListItemID: BlockId
    /** 目标笔记本 ID */
    targetNoteBook: NotebookId
    /** 目标路径（可选） */
    targetPath?: string
    /** 前一个路径（可选） */
    previousPath?: string
  }) => SyApiMethodResponse<{
    srcRootBlockID: string
    targetPath: string
  }>
  /**
   * 更新索引
   * @path /api/filetree/upsertIndexes
   */
  upsertIndexes: (data: {
    /** 路径列表 */
    paths: string[]
  }) => SyApiMethodResponse<any>
  /**
   * 删除索引
   * @path /api/filetree/removeIndexes
   */
  removeIndexes: (data: {
    /** 路径列表 */
    paths: string[]
  }) => SyApiMethodResponse<any>
  /**
   * 列出文档树
   * @path /api/filetree/listDocTree
   */
  listDocTree: (data: {
    /** 笔记本 ID */
    notebook: NotebookId
    /** 路径 */
    path: string
  }) => SyApiMethodResponse<{
    tree: Array<{
      id: string
      children?: Array<{
        id: string
        children?: any[]
      }>
    }>
  }>
  /**
   * 移动本地闪念速记
   * @path /api/filetree/moveLocalShorthands
   */
  moveLocalShorthands: (data: {
    /** 笔记本 ID */
    notebook: NotebookId
    /** 路径（可选） */
    path?: string
    /** 父块 ID（可选） */
    parentID?: BlockId
  }) => SyApiMethodResponse<any>
  /**
   * 刷新文件树（已废弃，请使用 /api/system/rebuildDataIndex）
   * @path /api/filetree/refreshFiletree
   * @deprecated 请使用 /api/system/rebuildDataIndex
   */
  refreshFiletree: () => SyApiMethodResponse<any>
}

SiYuanAPI.prototype.createDailyNote = function (notebook: string) {
  return this.request('/api/filetree/createDailyNote', { notebook })
}

SiYuanAPI.prototype.createDocWithMd = function (notebook: string, path: string, markdown: string) {
  return this.request('/api/filetree/createDocWithMd', {
    notebook,
    path,
    markdown,
  })
}

SiYuanAPI.prototype.renameDoc = function (notebook: string, path: string, title: string) {
  return this.request('/api/filetree/renameDoc', {
    doc: notebook,
    path,
    title,
  })
}

SiYuanAPI.prototype.removeDoc = function (notebook: string, path: string) {
  return this.request('/api/filetree/removeDoc', {
    notebook,
    path,
  })
}

SiYuanAPI.prototype.moveDocs = function (fromPaths: string[], toNotebook: string, toPath: string) {
  return this.request('/api/filetree/moveDocs', {
    fromPaths,
    toNotebook,
    toPath,
  })
}

SiYuanAPI.prototype.getHPathByPath = function (notebook: string, path: string) {
  return this.request('/api/filetree/getHPathByPath', {
    notebook,
    path,
  })
}

SiYuanAPI.prototype.getHPathByID = function (id: string) {
  return this.request('/api/filetree/getHPathByID', { id })
}

SiYuanAPI.prototype.getIDsByHPath = function (notebook: string, path: string) {
  return this.request('/api/filetree/getIDsByHPath', {
    notebook,
    path,
  })
}

SiYuanAPI.prototype.searchDocs = function (data: {
  k: string
  flashcard?: boolean
}) {
  return this.request('/api/filetree/searchDocs', data)
}

SiYuanAPI.prototype.listDocsByPath = function (data: {
  notebook: string
  path: string
  sort?: number
  flashcard?: boolean
  maxListCount?: number
  showHidden?: boolean
  ignoreMaxListHint?: boolean
  app?: string
}) {
  return this.request('/api/filetree/listDocsByPath', data)
}

SiYuanAPI.prototype.getDoc = function (data: {
  id: string
  index?: number
  query?: string
  queryMethod?: number
  queryTypes?: Record<string, boolean>
  mode?: number
  size?: number
  startID?: string
  endID?: string
  isBacklink?: boolean
  originalRefBlockIDs?: Record<string, string>
  highlight?: boolean
  reqId?: number
}) {
  return this.request('/api/filetree/getDoc', data)
}

SiYuanAPI.prototype.getDocCreateSavePath = function (data: {
  notebook: string
}) {
  return this.request('/api/filetree/getDocCreateSavePath', data)
}

SiYuanAPI.prototype.getRefCreateSavePath = function (data: {
  notebook: string
}) {
  return this.request('/api/filetree/getRefCreateSavePath', data)
}

SiYuanAPI.prototype.changeSort = function (data: {
  notebook: string
  paths: string[]
}) {
  return this.request('/api/filetree/changeSort', data)
}

SiYuanAPI.prototype.createDoc = function (data: {
  notebook: string
  path: string
  title: string
  md?: string
  sorts?: string[]
}) {
  return this.request('/api/filetree/createDoc', data)
}

SiYuanAPI.prototype.renameDocByID = function (data: {
  id: string
  title: string
}) {
  return this.request('/api/filetree/renameDocByID', data)
}

SiYuanAPI.prototype.removeDocByID = function (id: string) {
  return this.request('/api/filetree/removeDocByID', { id })
}

SiYuanAPI.prototype.removeDocs = function (data: {
  paths: string[]
}) {
  return this.request('/api/filetree/removeDocs', data)
}

SiYuanAPI.prototype.moveDocsByID = function (data: {
  fromIDs: string[]
  toID: string
}) {
  return this.request('/api/filetree/moveDocsByID', data)
}

SiYuanAPI.prototype.duplicateDoc = function (data: {
  id: string
}) {
  return this.request('/api/filetree/duplicateDoc', data)
}

SiYuanAPI.prototype.getHPathsByPaths = function (data: {
  paths: string[]
}) {
  return this.request('/api/filetree/getHPathsByPaths', data)
}

SiYuanAPI.prototype.getPathByID = function (id: string) {
  return this.request('/api/filetree/getPathByID', { id })
}

SiYuanAPI.prototype.getFullHPathByID = function (id: string) {
  return this.request('/api/filetree/getFullHPathByID', { id })
}

SiYuanAPI.prototype.doc2Heading = function (data: {
  srcID: string
  targetID: string
  after?: boolean
}) {
  return this.request('/api/filetree/doc2Heading', data)
}

SiYuanAPI.prototype.heading2Doc = function (data: {
  srcHeadingID: string
  targetNoteBook: string
  targetPath?: string
  previousPath?: string
}) {
  return this.request('/api/filetree/heading2Doc', data)
}

SiYuanAPI.prototype.li2Doc = function (data: {
  srcListItemID: string
  targetNoteBook: string
  targetPath?: string
  previousPath?: string
}) {
  return this.request('/api/filetree/li2Doc', data)
}

SiYuanAPI.prototype.upsertIndexes = function (data: {
  paths: string[]
}) {
  return this.request('/api/filetree/upsertIndexes', data)
}

SiYuanAPI.prototype.removeIndexes = function (data: {
  paths: string[]
}) {
  return this.request('/api/filetree/removeIndexes', data)
}

SiYuanAPI.prototype.listDocTree = function (data: {
  notebook: string
  path: string
}) {
  return this.request('/api/filetree/listDocTree', data)
}

SiYuanAPI.prototype.moveLocalShorthands = function (data: {
  notebook: string
  path?: string
  parentID?: string
}) {
  return this.request('/api/filetree/moveLocalShorthands', data)
}

SiYuanAPI.prototype.refreshFiletree = function () {
  return this.request('/api/filetree/refreshFiletree', {})
}

