import type { SyApiMethodResponse } from '../../core/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Extension API 类型定义
 */
export interface ExtensionAPI {
  /**
   * 扩展复制
   * @path /api/extension/copy
   */
  extensionCopy: (formData: FormData) => SyApiMethodResponse<any>
}

// 实现部分
SiYuanAPI.prototype.extensionCopy = function (formData: FormData) {
  return this.request('/api/extension/copy', formData)
}

