import type { SyApiMethodResponse } from '../../core/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Network API 类型定义
 */
export interface NetworkAPI {
  /**
   * 转发代理请求
   * @path /api/network/forwardProxy
   */
  forwardProxy: (
    url: string,
    method?: string,
    payload?: any,
    headers?: any[],
    timeout?: number,
    contentType?: string
  ) => SyApiMethodResponse<any>
}

SiYuanAPI.prototype.forwardProxy = function (url: string, method: string = 'GET', payload: any = {}, headers: any[] = [], timeout: number = 7000, contentType: string = 'text/html') {
  return this.request('/api/network/forwardProxy', {
    url,
    method,
    timeout,
    contentType,
    headers,
    payload,
  })
}

