import type { SyApiMethodResponse } from '../../core/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * Account API 类型定义
 */
export interface AccountAPI {
  /**
   * 登录
   * @path /api/account/login
   */
  login: (data: {
    /** 用户名（必需） */
    userName: string
    /** 密码（必需） */
    userPassword: string
    /** 验证码（必需） */
    captcha: string
    /** 云区域（必需） */
    cloudRegion: number
  }) => SyApiMethodResponse<any>

  /**
   * 检查激活码
   * @path /api/account/checkActivationcode
   */
  checkActivationcode: (data: {
    /** 激活码（必需） */
    data: string
  }) => SyApiMethodResponse<any>

  /**
   * 使用激活码
   * @path /api/account/useActivationcode
   */
  useActivationcode: (data: {
    /** 激活码（必需） */
    data: string
  }) => SyApiMethodResponse<any>

  /**
   * 停用账户
   * @path /api/account/deactivate
   */
  deactivate: () => SyApiMethodResponse<any>

  /**
   * 开始免费试用
   * @path /api/account/startFreeTrial
   */
  startFreeTrial: () => SyApiMethodResponse<any>
}

// 实现部分
SiYuanAPI.prototype.login = function (data: {
  userName: string
  userPassword: string
  captcha: string
  cloudRegion: number
}) {
  return this.request('/api/account/login', data)
}

SiYuanAPI.prototype.checkActivationcode = function (data: {
  data: string
}) {
  return this.request('/api/account/checkActivationcode', data)
}

SiYuanAPI.prototype.useActivationcode = function (data: {
  data: string
}) {
  return this.request('/api/account/useActivationcode', data)
}

SiYuanAPI.prototype.deactivate = function () {
  return this.request('/api/account/deactivate', {})
}

SiYuanAPI.prototype.startFreeTrial = function () {
  return this.request('/api/account/startFreeTrial', {})
}

