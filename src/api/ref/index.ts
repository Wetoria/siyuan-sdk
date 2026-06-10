import type { SyApiMethodResponse } from '../../core/index.js'
import type { SiyuanID } from '../../types/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * 反向链接结果
 */
export interface IBacklinkResult {
  backlinks: any[]
  linkRefsCount: number
  backmentions: any[]
  mentionsCount: number
  k: string
  mk: string
  box?: SiyuanID
}

/**
 * 反向链接文档结果
 */
export interface IBacklinkDocResult {
  backlinks: any[]
  keywords: string[]
}

/**
 * 反向提及文档结果
 */
export interface IBackmentionDocResult {
  backmentions: any[]
  keywords: string[]
}

/**
 * Ref API 类型定义
 */
export interface RefAPI {
  /**
   * 刷新反向链接
   * @path /api/ref/refreshBacklink
   */
  refreshBacklink: (data: {
    /** 块 ID（必需） */
    id: SiyuanID
  }) => SyApiMethodResponse<any>

  /**
   * 获取反向链接
   * @path /api/ref/getBacklink
   */
  getBacklink: (data: {
    /** 块 ID（必需） */
    id: SiyuanID
    /** 关键词（必需） */
    k: string
    /** 提及关键词（必需） */
    mk: string
    /** 前置长度，默认 12（可选） */
    beforeLen?: number
    /** 是否包含子块（可选） */
    containChildren?: boolean
  }) => SyApiMethodResponse<IBacklinkResult>

  /**
   * 获取反向链接（版本 2）
   * @path /api/ref/getBacklink2
   */
  getBacklink2: (data: {
    /** 块 ID（必需） */
    id: SiyuanID
    /** 关键词（必需） */
    k: string
    /** 提及关键词（必需） */
    mk: string
    /** 排序方式（可选） */
    sort?: string
    /** 提及排序方式（可选） */
    mSort?: string
    /** 是否包含子块（可选） */
    containChildren?: boolean
  }) => SyApiMethodResponse<IBacklinkResult>

  /**
   * 获取反向链接文档
   * @path /api/ref/getBacklinkDoc
   */
  getBacklinkDoc: (data: {
    /** 定义块 ID（必需） */
    defID: SiyuanID
    /** 引用树 ID（必需） */
    refTreeID: SiyuanID
    /** 关键词（必需） */
    keyword: string
    /** 是否包含子块（可选） */
    containChildren?: boolean
    /** 是否高亮（可选） */
    highlight?: boolean
  }) => SyApiMethodResponse<IBacklinkDocResult>

  /**
   * 获取反向提及文档
   * @path /api/ref/getBackmentionDoc
   */
  getBackmentionDoc: (data: {
    /** 定义块 ID（必需） */
    defID: SiyuanID
    /** 引用树 ID（必需） */
    refTreeID: SiyuanID
    /** 关键词（必需） */
    keyword: string
    /** 是否包含子块（可选） */
    containChildren?: boolean
    /** 是否高亮（可选） */
    highlight?: boolean
  }) => SyApiMethodResponse<IBackmentionDocResult>
}

// 实现部分
SiYuanAPI.prototype.refreshBacklink = function (data: {
  id: SiyuanID
}) {
  return this.request('/api/ref/refreshBacklink', data)
}

SiYuanAPI.prototype.getBacklink = function (data: {
  id: SiyuanID
  k: string
  mk: string
  beforeLen?: number
  containChildren?: boolean
}) {
  return this.request('/api/ref/getBacklink', data)
}

SiYuanAPI.prototype.getBacklink2 = function (data: {
  id: SiyuanID
  k: string
  mk: string
  sort?: string
  mSort?: string
  containChildren?: boolean
}) {
  return this.request('/api/ref/getBacklink2', data)
}

SiYuanAPI.prototype.getBacklinkDoc = function (data: {
  defID: SiyuanID
  refTreeID: SiyuanID
  keyword: string
  containChildren?: boolean
  highlight?: boolean
}) {
  return this.request('/api/ref/getBacklinkDoc', data)
}

SiYuanAPI.prototype.getBackmentionDoc = function (data: {
  defID: SiyuanID
  refTreeID: SiyuanID
  keyword: string
  containChildren?: boolean
  highlight?: boolean
}) {
  return this.request('/api/ref/getBackmentionDoc', data)
}

