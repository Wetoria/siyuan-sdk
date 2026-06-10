/**
 * SiYuan SDK - API Client
 *
 * Supports maintaining baseURL and token, binding custom fetch, and dynamically adding methods
 *
 * 支持维护 baseURL 和 token，绑定自定义 fetch，动态添加方法
 *
 */

import { IWebSocketData } from 'siyuan'



/**
 * 标准 API 响应格式
 */
export interface SyApiResponse<T = any> {
  code: number
  msg: string
  data: T
}

export type SyApiMethodResponse<T = any> = Promise<SyApiResponse<T> | IWebSocketData | T>


/**
 * 请求选项
 */
export interface RequestOptions {
  /**
   * 请求方法
   * @default POST
   * @description 请求方法
   * @example 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
   */
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  /**
   * 请求头
   * @default {}
   * @description 请求头
   * @example { 'Content-Type': 'application/json' }
   */
  headers?: Record<string, string>
  /**
   * 超时时间（毫秒）
   * @default 30000
   */
  timeout?: number
}

/**
 * 基础 Fetch 函数类型（统一的结构）
 */
export type SyBaseApiMethod<T = any> = (
  url: string,
  data?: any,
  options?: RequestOptions
) => SyApiMethodResponse<T>

/**
 * 自定义 Fetch 函数类型（别名）
 */
export type CustomFetch<T = any> = SyBaseApiMethod<T>



/**
 * API 配置（两种方式互斥）
 */
export type SiYuanAPIConfig =
  | { baseURL: string, token: string, customFetch?: never }
  | { baseURL?: never, token?: never, customFetch: SyBaseApiMethod }


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
    // 自动绑定所有原型方法，确保在解构或箭头函数中调用时 this 不会丢失
    this._bindMethods()
  }

  /**
   * 绑定所有原型方法到当前实例
   * 这样即使方法被解构，this 也能正确指向实例
   * @private
   */
  private _bindMethods(): void {
    const prototype = SiYuanAPI.prototype
    const boundMethods = new Set<string>()

    // 获取原型上的所有属性名（包括不可枚举的）
    const propertyNames = Object.getOwnPropertyNames(prototype)

    for (const name of propertyNames) {
      // 跳过已绑定的方法和特殊方法
      if (
        boundMethods.has(name)
        || name === 'constructor'
        || name.startsWith('_')
        || name === 'setConfig'
        || name === 'getConfig'
        || name === 'extractData'
        || name === '_bindMethods'
        || name === 'request'
        || name === 'post'
      ) {
        continue
      }

      const descriptor = Object.getOwnPropertyDescriptor(prototype, name)

      // 只绑定函数类型的属性
      if (descriptor && typeof descriptor.value === 'function') {
        ;(this as any)[name] = descriptor.value.bind(this)
        boundMethods.add(name)
      }
    }
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
   * 返回思源标准格式 SyApiResponse<T>
   * 此方法为内部方法，禁止外部修改或覆盖
   * 允许在注入的 API 方法中使用
   *
   * @param url - API 端点路径
   * @param data - 请求数据
   * @param options - 请求选项
   * @returns SyApiResponse<T>
   *
   * @internal
   */
  async request<T = any>(
    url: string,
    data?: any,
    options?: RequestOptions,
  ): SyApiMethodResponse<T> {
    // 如果提供了自定义 fetch，使用自定义 fetch
    if (this.customFetch) {
      return await this.customFetch(url, data, options) as SyApiResponse<T>
    }

    // 否则使用默认的 baseFetch
    return await this._defaultBaseFetch(url, data, options) as SyApiResponse<T>
  }


  async post<T = any>(url: string, data?: any, options?: RequestOptions): SyApiMethodResponse<T> {
    return await this.request(url, data, {
      ...options,
      method: 'POST',
    }) as SyApiResponse<T>
  }


  /**
   * 提取响应数据（用于插件模式，直接返回 data）
   * 如果 code === 0，返回 data；否则返回 null
   *
   * @param response - API 响应
   * @returns 提取的数据或 null
   */
  extractData<T>(response: SyApiResponse<T>): T | null {
    return response.code === 0 ? response.data : null
  }
}

/**
 * 创建 API 实例的便捷函数
 */
export function createAPI(config: SiYuanAPIConfig): SiYuanAPI {
  return new SiYuanAPI(config)
}
