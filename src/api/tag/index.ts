import type { SyApiMethodResponse } from '../../core/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Tag API 类型定义
 */
export interface TagAPI {
  /**
   * 获取标签
   * @path /api/tag/getTag
   */
  getTag: (data: {
    /** 应用名称（必需） */
    app: string
    /** 排序模式（可选） */
    sort?: number
    /** 忽略最大列表提示（可选） */
    ignoreMaxListHint?: boolean
  }) => SyApiMethodResponse<any>

  /**
   * 重命名标签
   * @path /api/tag/renameTag
   */
  renameTag: (data: {
    /** 旧标签名称（必需） */
    oldLabel: string
    /** 新标签名称（必需） */
    newLabel: string
  }) => SyApiMethodResponse<any>

  /**
   * 删除标签
   * @path /api/tag/removeTag
   */
  removeTag: (data: {
    /** 标签名称（必需） */
    label: string
  }) => SyApiMethodResponse<any>
}

// 实现部分
SiYuanAPI.prototype.getTag = function (data: {
  app: string
  sort?: number
  ignoreMaxListHint?: boolean
}) {
  return this.request('/api/tag/getTag', data)
}

SiYuanAPI.prototype.renameTag = function (data: {
  oldLabel: string
  newLabel: string
}) {
  return this.request('/api/tag/renameTag', data)
}

SiYuanAPI.prototype.removeTag = function (data: {
  label: string
}) {
  return this.request('/api/tag/removeTag', data)
}

