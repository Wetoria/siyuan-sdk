import type { SyApiMethodResponse } from '../../core/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Notification API 类型定义
 */
export interface NotificationAPI {
  /**
   * 推送消息通知
   * @path /api/notification/pushMsg
   */
  pushMsg: (msg: string, timeout?: number) => SyApiMethodResponse<any>
  /**
   * 推送错误消息通知
   * @path /api/notification/pushErrMsg
   */
  pushErrMsg: (msg: string, timeout?: number) => SyApiMethodResponse<any>
}

SiYuanAPI.prototype.pushMsg = function (msg: string, timeout: number = 7000) {
  return this.request('/api/notification/pushMsg', {
    msg,
    timeout,
  })
}

SiYuanAPI.prototype.pushErrMsg = function (msg: string, timeout: number = 7000) {
  return this.request('/api/notification/pushErrMsg', {
    msg,
    timeout,
  })
}

