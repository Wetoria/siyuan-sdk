/**
 * SiYuan SDK - API Client
 * 支持维护 baseURL 和 token，绑定自定义 fetch，动态添加方法
 */


/**
 * 标准 API 响应格式
 */
export interface ApiResponse<T = any> {
  code: number
  msg: string
  data: T
}



/**
 * 请求选项
 */
export interface RequestOptions {
  /** 请求方法 */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  /** 请求头 */
  headers?: Record<string, string>
  /** 超时时间（毫秒） */
  timeout?: number
}




/**
 * 基础 Fetch 函数类型（统一的结构）
 */
export type BaseFetch<T = any> = (
  url: string,
  data?: any,
  options?: RequestOptions
) => Promise<ApiResponse<T>>

/**
 * 自定义 Fetch 函数类型（别名）
 */
export type CustomFetch<T = any> = BaseFetch<T>



/**
 * API 配置（两种方式互斥）
 */
export type SiYuanAPIConfig =
  | { baseURL: string, token: string, customFetch?: never }
  | { baseURL?: never, token?: never, customFetch: BaseFetch }


/**
 * SiYuan API 客户端
 */
export class SiYuanAPI {
  /** 基础 URL */
  private baseURL: string
  /** 认证 Token（与 customFetch 互斥） */
  private token?: string
  /** 自定义 fetch 函数（与 token 互斥） */
  private customFetch?: CustomFetch


  constructor(config: SiYuanAPIConfig) {
    this.setConfig(config)
  }

  setConfig(config: SiYuanAPIConfig): void {
    // 根据配置类型设置属性
    if ('customFetch' in config) {
      // 使用 customFetch
      this.baseURL = '' // customFetch 模式下 baseURL 可能不需要
      this.customFetch = config.customFetch
      this.token = undefined
    } else {
      // 使用 baseURL + token
      this.baseURL = config.baseURL
      this.token = config.token
      this.customFetch = undefined
    }
  }

  /**
   * 获取当前配置
   */
  getConfig(): {
    baseURL: string
    token?: string
    customFetch?: CustomFetch
  } {
    return {
      baseURL: this.baseURL,
      token: this.token,
      customFetch: this.customFetch,
    }
  }

  /**
   * 默认的 baseFetch 实现（使用标准 fetch）
   */
  private async _defaultBaseFetch(
    url: string,
    data?: any,
    options?: RequestOptions,
  ): Promise<any> {
    const baseURL = this.baseURL || ''
    const fullURL = url.startsWith('http')
      ? url
      : `${baseURL.replace(/\/$/, '')}${url}`

    const method = options?.method || 'POST'
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options?.headers,
    }

    // 如果有 token，添加到请求头
    if (this.token) {
      headers.Authorization = `Token ${this.token}`
    }

    const requestInit: RequestInit = {
      method,
      headers,
    }

    // 处理请求体
    if (data !== undefined) {
      if (data instanceof FormData) {
        delete headers['Content-Type']
        requestInit.body = data
      } else {
        requestInit.body = JSON.stringify(data)
      }
    }

    // 处理超时
    const timeout = options?.timeout || 30000
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(fullURL, {
        ...requestInit,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const contentType = response.headers.get('content-type')

      if (contentType && contentType.includes('application/json')) {
        return await response.json()
      } else {
        return await response.text()
      }
    } catch (error: any) {
      clearTimeout(timeoutId)
      if (error.name === 'AbortError') {
        throw new Error(`Request timeout after ${timeout}ms`)
      }
      throw error
    }
  }

  /**
   * 内部请求方法
   * 如果存在自定义 fetch，使用自定义 fetch；否则使用默认的 baseFetch（会自动设置 baseURL 和 token）
   * 返回思源标准格式 ApiResponse<T>
   * 此方法为内部方法，禁止外部修改或覆盖
   * 允许在注入的 API 方法中使用
   *
   * @param url - API 端点路径
   * @param data - 请求数据
   * @param options - 请求选项
   * @returns ApiResponse<T>
   *
   * @internal
   */
  protected async request<T = any>(
    url: string,
    data?: any,
    options?: RequestOptions,
  ): Promise<ApiResponse<T>> {
    // 如果提供了自定义 fetch，使用自定义 fetch
    if (this.customFetch) {
      return await this.customFetch(url, data, options) as ApiResponse<T>
    }

    // 否则使用默认的 baseFetch
    return await this._defaultBaseFetch(url, data, options) as ApiResponse<T>
  }
}

/**
 * 创建 API 实例的便捷函数
 */
export function createAPI(config: SiYuanAPIConfig): SiYuanAPI {
  return new SiYuanAPI(config)
}


declare module '@wetoria/siyuan-sdk' {
  interface SiYuanAPI {
    sql: (stmt: string) => Promise<ApiResponse<any>>
  }
}

SiYuanAPI.prototype.sql = function (stmt: string): Promise<ApiResponse<any>> {
  return this.request('/api/query/sql', {
    stmt,
  })
}


