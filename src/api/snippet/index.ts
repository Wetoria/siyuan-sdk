import type { SyApiMethodResponse } from '../../core/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Snippet API 类型定义
 */
export interface SnippetAPI {
  /**
   * 获取片段
   * @path /api/snippet/getSnippet
   */
  getSnippet: (data: {
    /** 类型：js/css/all（必需） */
    type: string
    /** 启用状态：0-禁用，1-启用，2-全部（必需） */
    enabled: number
    /** 关键词（可选） */
    keyword?: string
  }) => SyApiMethodResponse<any[]>

  /**
   * 设置片段
   * @path /api/snippet/setSnippet
   */
  setSnippet: (data: {
    /** 片段数组（必需） */
    snippets: Array<{
      id: string
      name: string
      type: string
      content: string
      enabled: boolean
      disabledInPublish?: boolean
    }>
  }) => SyApiMethodResponse<any>

  /**
   * 删除片段
   * @path /api/snippet/removeSnippet
   */
  removeSnippet: (data: {
    /** 片段 ID（必需） */
    id: string
  }) => SyApiMethodResponse<any>
}

// 实现部分
SiYuanAPI.prototype.getSnippet = function (data: {
  type: string
  enabled: number
  keyword?: string
}) {
  return this.request('/api/snippet/getSnippet', data)
}

SiYuanAPI.prototype.setSnippet = function (data: {
  snippets: Array<{
    id: string
    name: string
    type: string
    content: string
    enabled: boolean
    disabledInPublish?: boolean
  }>
}) {
  return this.request('/api/snippet/setSnippet', data)
}

SiYuanAPI.prototype.removeSnippet = function (data: {
  id: string
}) {
  return this.request('/api/snippet/removeSnippet', data)
}

