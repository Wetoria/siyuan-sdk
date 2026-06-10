import type { SyApiMethodResponse } from '../../core/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Bookmark API 类型定义
 */
export interface BookmarkAPI {
  /**
   * 获取书签
   * @path /api/bookmark/getBookmark
   */
  getBookmark: () => SyApiMethodResponse<any>

  /**
   * 重命名书签
   * @path /api/bookmark/renameBookmark
   */
  renameBookmark: (data: {
    /** 旧书签名称（必需） */
    oldBookmark: string
    /** 新书签名称（必需） */
    newBookmark: string
  }) => SyApiMethodResponse<any>

  /**
   * 删除书签
   * @path /api/bookmark/removeBookmark
   */
  removeBookmark: (data: {
    /** 书签名称（必需） */
    bookmark: string
  }) => SyApiMethodResponse<any>
}

// 实现部分
SiYuanAPI.prototype.getBookmark = function () {
  return this.request('/api/bookmark/getBookmark', {})
}

SiYuanAPI.prototype.renameBookmark = function (data: {
  oldBookmark: string
  newBookmark: string
}) {
  return this.request('/api/bookmark/renameBookmark', data)
}

SiYuanAPI.prototype.removeBookmark = function (data: {
  bookmark: string
}) {
  return this.request('/api/bookmark/removeBookmark', data)
}

