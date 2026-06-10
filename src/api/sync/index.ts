import type { SyApiMethodResponse } from '../../core/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * 同步信息结果
 */
export interface IGetSyncInfoResult {
  synced: number
  stat: string
  kernels: any[]
  kernel: string
}

/**
 * 云同步目录列表结果
 */
export interface IListCloudSyncDirResult {
  syncDirs: any[]
  hSize: string
  checkedSyncDir: string
}

/**
 * Sync API 类型定义
 */
export interface SyncAPI {
  /**
   * 设置同步启用
   * @path /api/sync/setSyncEnable
   */
  setSyncEnable: (data: {
    /** 是否启用（必需） */
    enabled: boolean
  }) => SyApiMethodResponse<any>

  /**
   * 设置同步间隔
   * @path /api/sync/setSyncInterval
   */
  setSyncInterval: (data: {
    /** 间隔（秒）（必需） */
    interval: number
  }) => SyApiMethodResponse<any>

  /**
   * 设置同步感知
   * @path /api/sync/setSyncPerception
   */
  setSyncPerception: (data: {
    /** 是否启用（必需） */
    enabled: boolean
  }) => SyApiMethodResponse<any>

  /**
   * 设置同步生成冲突文档
   * @path /api/sync/setSyncGenerateConflictDoc
   */
  setSyncGenerateConflictDoc: (data: {
    /** 是否启用（必需） */
    enabled: boolean
  }) => SyApiMethodResponse<any>

  /**
   * 设置同步模式
   * @path /api/sync/setSyncMode
   */
  setSyncMode: (data: {
    /** 模式（必需） */
    mode: number
  }) => SyApiMethodResponse<any>

  /**
   * 设置同步提供商
   * @path /api/sync/setSyncProvider
   */
  setSyncProvider: (data: {
    /** 提供商（必需） */
    provider: number
  }) => SyApiMethodResponse<any>

  /**
   * 设置同步提供商 S3
   * @path /api/sync/setSyncProviderS3
   */
  setSyncProviderS3: (data: {
    /** S3 配置（必需） */
    s3: Record<string, any>
  }) => SyApiMethodResponse<any>

  /**
   * 设置同步提供商 WebDAV
   * @path /api/sync/setSyncProviderWebDAV
   */
  setSyncProviderWebDAV: (data: {
    /** WebDAV 配置（必需） */
    webdav: Record<string, any>
  }) => SyApiMethodResponse<any>

  /**
   * 设置同步提供商本地
   * @path /api/sync/setSyncProviderLocal
   */
  setSyncProviderLocal: (data: {
    /** 本地配置（必需） */
    local: Record<string, any>
  }) => SyApiMethodResponse<any>

  /**
   * 设置云同步目录
   * @path /api/sync/setCloudSyncDir
   */
  setCloudSyncDir: (data: {
    /** 目录名称（必需） */
    name: string
  }) => SyApiMethodResponse<any>

  /**
   * 创建云同步目录
   * @path /api/sync/createCloudSyncDir
   */
  createCloudSyncDir: (data: {
    /** 目录名称（必需） */
    name: string
  }) => SyApiMethodResponse<any>

  /**
   * 删除云同步目录
   * @path /api/sync/removeCloudSyncDir
   */
  removeCloudSyncDir: (data: {
    /** 目录名称（必需） */
    name: string
  }) => SyApiMethodResponse<any>

  /**
   * 列出云同步目录
   * @path /api/sync/listCloudSyncDir
   */
  listCloudSyncDir: () => SyApiMethodResponse<IListCloudSyncDirResult>

  /**
   * 执行同步
   * @path /api/sync/performSync
   */
  performSync: (data: {
    /** 是否上传（可选，完全手动同步模式需要） */
    upload?: boolean
    /** 是否移动端切换（可选） */
    mobileSwitch?: boolean
  }) => SyApiMethodResponse<any>

  /**
   * 执行启动同步
   * @path /api/sync/performBootSync
   */
  performBootSync: () => SyApiMethodResponse<number>

  /**
   * 获取启动同步状态
   * @path /api/sync/getBootSync
   */
  getBootSync: () => SyApiMethodResponse<any>

  /**
   * 获取同步信息
   * @path /api/sync/getSyncInfo
   */
  getSyncInfo: () => SyApiMethodResponse<IGetSyncInfoResult>

  /**
   * 导出同步提供商 S3
   * @path /api/sync/exportSyncProviderS3
   */
  exportSyncProviderS3: () => SyApiMethodResponse<{ name: string, zip: string }>

  /**
   * 导入同步提供商 S3
   * @path /api/sync/importSyncProviderS3
   */
  importSyncProviderS3: (file: File) => SyApiMethodResponse<any>

  /**
   * 导出同步提供商 WebDAV
   * @path /api/sync/exportSyncProviderWebDAV
   */
  exportSyncProviderWebDAV: () => SyApiMethodResponse<{ name: string, zip: string }>

  /**
   * 导入同步提供商 WebDAV
   * @path /api/sync/importSyncProviderWebDAV
   */
  importSyncProviderWebDAV: (file: File) => SyApiMethodResponse<any>
}

// 实现部分
SiYuanAPI.prototype.setSyncEnable = function (data: {
  enabled: boolean
}) {
  return this.request('/api/sync/setSyncEnable', data)
}

SiYuanAPI.prototype.setSyncInterval = function (data: {
  interval: number
}) {
  return this.request('/api/sync/setSyncInterval', data)
}

SiYuanAPI.prototype.setSyncPerception = function (data: {
  enabled: boolean
}) {
  return this.request('/api/sync/setSyncPerception', data)
}

SiYuanAPI.prototype.setSyncGenerateConflictDoc = function (data: {
  enabled: boolean
}) {
  return this.request('/api/sync/setSyncGenerateConflictDoc', data)
}

SiYuanAPI.prototype.setSyncMode = function (data: {
  mode: number
}) {
  return this.request('/api/sync/setSyncMode', data)
}

SiYuanAPI.prototype.setSyncProvider = function (data: {
  provider: number
}) {
  return this.request('/api/sync/setSyncProvider', data)
}

SiYuanAPI.prototype.setSyncProviderS3 = function (data: {
  s3: Record<string, any>
}) {
  return this.request('/api/sync/setSyncProviderS3', data)
}

SiYuanAPI.prototype.setSyncProviderWebDAV = function (data: {
  webdav: Record<string, any>
}) {
  return this.request('/api/sync/setSyncProviderWebDAV', data)
}

SiYuanAPI.prototype.setSyncProviderLocal = function (data: {
  local: Record<string, any>
}) {
  return this.request('/api/sync/setSyncProviderLocal', data)
}

SiYuanAPI.prototype.setCloudSyncDir = function (data: {
  name: string
}) {
  return this.request('/api/sync/setCloudSyncDir', data)
}

SiYuanAPI.prototype.createCloudSyncDir = function (data: {
  name: string
}) {
  return this.request('/api/sync/createCloudSyncDir', data)
}

SiYuanAPI.prototype.removeCloudSyncDir = function (data: {
  name: string
}) {
  return this.request('/api/sync/removeCloudSyncDir', data)
}

SiYuanAPI.prototype.listCloudSyncDir = function () {
  return this.request('/api/sync/listCloudSyncDir', {})
}

SiYuanAPI.prototype.performSync = function (data: {
  upload?: boolean
  mobileSwitch?: boolean
}) {
  return this.request('/api/sync/performSync', data)
}

SiYuanAPI.prototype.performBootSync = function () {
  return this.request('/api/sync/performBootSync', {})
}

SiYuanAPI.prototype.getBootSync = function () {
  return this.request('/api/sync/getBootSync', {})
}

SiYuanAPI.prototype.getSyncInfo = function () {
  return this.request('/api/sync/getSyncInfo', {})
}

SiYuanAPI.prototype.exportSyncProviderS3 = function () {
  return this.request('/api/sync/exportSyncProviderS3', {})
}

SiYuanAPI.prototype.importSyncProviderS3 = function (file: File) {
  const formData = new FormData()
  formData.append('file', file)
  return this.request('/api/sync/importSyncProviderS3', formData)
}

SiYuanAPI.prototype.exportSyncProviderWebDAV = function () {
  return this.request('/api/sync/exportSyncProviderWebDAV', {})
}

SiYuanAPI.prototype.importSyncProviderWebDAV = function (file: File) {
  const formData = new FormData()
  formData.append('file', file)
  return this.request('/api/sync/importSyncProviderWebDAV', formData)
}

