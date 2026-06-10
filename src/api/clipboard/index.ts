import type { SyApiMethodResponse } from '../../core/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Clipboard API 类型定义
 */
export interface ClipboardAPI {
  /**
   * 读取文件路径
   * @path /api/clipboard/readFilePaths
   */
  readFilePaths: () => SyApiMethodResponse<string[]>
}

// 实现部分
SiYuanAPI.prototype.readFilePaths = function () {
  return this.request('/api/clipboard/readFilePaths', {})
}

