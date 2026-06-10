/**
 * SiYuan SDK - API Client
 *
 * Supports maintaining baseURL and token, binding custom fetch, and dynamically adding methods
 *
 * 支持维护 baseURL 和 token，绑定自定义 fetch，动态添加方法
 *
 */
import { IWebSocketData } from 'siyuan';
/**
 * 标准 API 响应格式
 */
export interface SyApiResponse<T = any> {
    code: number;
    msg: string;
    data: T;
}
export type SyApiMethodResponse<T = any> = Promise<SyApiResponse<T> | IWebSocketData | T>;
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
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    /**
     * 请求头
     * @default {}
     * @description 请求头
     * @example { 'Content-Type': 'application/json' }
     */
    headers?: Record<string, string>;
    /**
     * 超时时间（毫秒）
     * @default 30000
     */
    timeout?: number;
}
/**
 * 基础 Fetch 函数类型（统一的结构）
 */
export type SyBaseApiMethod<T = any> = (url: string, data?: any, options?: RequestOptions) => SyApiMethodResponse<T>;
/**
 * 自定义 Fetch 函数类型（别名）
 */
export type CustomFetch<T = any> = SyBaseApiMethod<T>;
/**
 * API 配置（两种方式互斥）
 */
export type SiYuanAPIConfig = {
    baseURL: string;
    token: string;
    customFetch?: never;
} | {
    baseURL?: never;
    token?: never;
    customFetch: SyBaseApiMethod;
};
/**
 * SiYuan API 客户端
 */
export declare class SiYuanAPI {
    /** 基础 URL */
    private baseURL;
    /** 认证 Token（与 customFetch 互斥） */
    private token?;
    /** 自定义 fetch 函数（与 token 互斥） */
    private customFetch?;
    constructor(config: SiYuanAPIConfig);
    /**
     * 绑定所有原型方法到当前实例
     * 这样即使方法被解构，this 也能正确指向实例
     * @private
     */
    private _bindMethods;
    setConfig(config: SiYuanAPIConfig): void;
    /**
     * 获取当前配置
     */
    getConfig(): {
        baseURL: string;
        token?: string;
        customFetch?: CustomFetch;
    };
    /**
     * 默认的 baseFetch 实现（使用标准 fetch）
     */
    private _defaultBaseFetch;
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
    request<T = any>(url: string, data?: any, options?: RequestOptions): SyApiMethodResponse<T>;
    post<T = any>(url: string, data?: any, options?: RequestOptions): SyApiMethodResponse<T>;
    /**
     * 提取响应数据（用于插件模式，直接返回 data）
     * 如果 code === 0，返回 data；否则返回 null
     *
     * @param response - API 响应
     * @returns 提取的数据或 null
     */
    extractData<T>(response: SyApiResponse<T>): T | null;
}
/**
 * 创建 API 实例的便捷函数
 */
export declare function createAPI(config: SiYuanAPIConfig): SiYuanAPI;
//# sourceMappingURL=index.d.ts.map