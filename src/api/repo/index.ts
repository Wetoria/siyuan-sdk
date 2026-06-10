import type { SyApiMethodResponse } from '../../core/index.js'
import type { SiyuanID } from '../../types/index.js'
import { SiYuanAPI } from '../../core/index.js'

/**
 * 快照列表结果
 */
export interface IGetRepoSnapshotsResult {
  snapshots: any[]
  pageCount: number
  totalCount: number
}

/**
 * 快照差异结果
 */
export interface IDiffRepoSnapshotsResult {
  addsLeft: any[]
  updatesLeft: any[]
  updatesRight: any[]
  removesRight: any[]
  left: string
  right: string
}

/**
 * 快照文档结果
 */
export interface IOpenRepoSnapshotDocResult {
  title: string
  content: string
  displayInText: boolean
  updated: string
}

/**
 * Repo API 类型定义
 */
export interface RepoAPI {
  /**
   * 初始化仓库密钥
   * @path /api/repo/initRepoKey
   */
  initRepoKey: () => SyApiMethodResponse<{ key: string }>

  /**
   * 从密码短语初始化仓库密钥
   * @path /api/repo/initRepoKeyFromPassphrase
   */
  initRepoKeyFromPassphrase: (data: {
    /** 密码短语（必需） */
    pass: string
  }) => SyApiMethodResponse<{ key: string }>

  /**
   * 重置仓库
   * @path /api/repo/resetRepo
   */
  resetRepo: () => SyApiMethodResponse<any>

  /**
   * 清空仓库
   * @path /api/repo/purgeRepo
   */
  purgeRepo: () => SyApiMethodResponse<any>

  /**
   * 清空云仓库
   * @path /api/repo/purgeCloudRepo
   */
  purgeCloudRepo: () => SyApiMethodResponse<any>

  /**
   * 导入仓库密钥
   * @path /api/repo/importRepoKey
   */
  importRepoKey: (data: {
    /** Base64 编码的密钥（必需） */
    key: string
  }) => SyApiMethodResponse<{ key: string }>

  /**
   * 创建快照
   * @path /api/repo/createSnapshot
   */
  createSnapshot: (data: {
    /** 备注（必需） */
    memo: string
  }) => SyApiMethodResponse<any>

  /**
   * 标记快照
   * @path /api/repo/tagSnapshot
   */
  tagSnapshot: (data: {
    /** 快照 ID（必需） */
    id: string
    /** 标签名称（必需） */
    name: string
  }) => SyApiMethodResponse<any>

  /**
   * 检出仓库
   * @path /api/repo/checkoutRepo
   */
  checkoutRepo: (data: {
    /** 快照 ID（必需） */
    id: string
  }) => SyApiMethodResponse<any>

  /**
   * 获取仓库快照列表
   * @path /api/repo/getRepoSnapshots
   */
  getRepoSnapshots: (data: {
    /** 页码（必需） */
    page: number
  }) => SyApiMethodResponse<IGetRepoSnapshotsResult>

  /**
   * 获取仓库标签快照列表
   * @path /api/repo/getRepoTagSnapshots
   */
  getRepoTagSnapshots: () => SyApiMethodResponse<{ snapshots: any[] }>

  /**
   * 删除仓库标签快照
   * @path /api/repo/removeRepoTagSnapshot
   */
  removeRepoTagSnapshot: (data: {
    /** 标签名称（必需） */
    tag: string
  }) => SyApiMethodResponse<any>

  /**
   * 获取云仓库标签快照列表
   * @path /api/repo/getCloudRepoTagSnapshots
   */
  getCloudRepoTagSnapshots: () => SyApiMethodResponse<{ snapshots: any[] }>

  /**
   * 获取云仓库快照列表
   * @path /api/repo/getCloudRepoSnapshots
   */
  getCloudRepoSnapshots: (data: {
    /** 页码（必需） */
    page: number
  }) => SyApiMethodResponse<IGetRepoSnapshotsResult>

  /**
   * 删除云仓库标签快照
   * @path /api/repo/removeCloudRepoTagSnapshot
   */
  removeCloudRepoTagSnapshot: (data: {
    /** 标签名称（必需） */
    tag: string
  }) => SyApiMethodResponse<any>

  /**
   * 上传云快照
   * @path /api/repo/uploadCloudSnapshot
   */
  uploadCloudSnapshot: (data: {
    /** 标签名称（必需） */
    tag: string
    /** 快照 ID（必需） */
    id: string
  }) => SyApiMethodResponse<any>

  /**
   * 下载云快照
   * @path /api/repo/downloadCloudSnapshot
   */
  downloadCloudSnapshot: (data: {
    /** 标签名称（必需） */
    tag: string
    /** 快照 ID（必需） */
    id: string
  }) => SyApiMethodResponse<any>

  /**
   * 比较快照差异
   * @path /api/repo/diffRepoSnapshots
   */
  diffRepoSnapshots: (data: {
    /** 左侧快照 ID（必需） */
    left: string
    /** 右侧快照 ID（必需） */
    right: string
  }) => SyApiMethodResponse<IDiffRepoSnapshotsResult>

  /**
   * 打开快照文档
   * @path /api/repo/openRepoSnapshotDoc
   */
  openRepoSnapshotDoc: (data: {
    /** 文档 ID（必需） */
    id: SiyuanID
  }) => SyApiMethodResponse<IOpenRepoSnapshotDocResult>

  /**
   * 获取仓库文件
   * @path /api/repo/getRepoFile
   */
  getRepoFile: (data: {
    /** 文件 ID（必需） */
    id: SiyuanID
  }) => SyApiMethodResponse<Blob>

  /**
   * 设置仓库索引保留天数
   * @path /api/repo/setRepoIndexRetentionDays
   */
  setRepoIndexRetentionDays: (data: {
    /** 天数（必需，最小 1，默认 180） */
    days: number
  }) => SyApiMethodResponse<any>

  /**
   * 设置每日保留索引数
   * @path /api/repo/setRetentionIndexesDaily
   */
  setRetentionIndexesDaily: (data: {
    /** 索引数（必需，最小 1，默认 180） */
    indexes: number
  }) => SyApiMethodResponse<any>
}

// 实现部分
SiYuanAPI.prototype.initRepoKey = function () {
  return this.request('/api/repo/initRepoKey', {})
}

SiYuanAPI.prototype.initRepoKeyFromPassphrase = function (data: {
  pass: string
}) {
  return this.request('/api/repo/initRepoKeyFromPassphrase', data)
}

SiYuanAPI.prototype.resetRepo = function () {
  return this.request('/api/repo/resetRepo', {})
}

SiYuanAPI.prototype.purgeRepo = function () {
  return this.request('/api/repo/purgeRepo', {})
}

SiYuanAPI.prototype.purgeCloudRepo = function () {
  return this.request('/api/repo/purgeCloudRepo', {})
}

SiYuanAPI.prototype.importRepoKey = function (data: {
  key: string
}) {
  return this.request('/api/repo/importRepoKey', data)
}

SiYuanAPI.prototype.createSnapshot = function (data: {
  memo: string
}) {
  return this.request('/api/repo/createSnapshot', data)
}

SiYuanAPI.prototype.tagSnapshot = function (data: {
  id: string
  name: string
}) {
  return this.request('/api/repo/tagSnapshot', data)
}

SiYuanAPI.prototype.checkoutRepo = function (data: {
  id: string
}) {
  return this.request('/api/repo/checkoutRepo', data)
}

SiYuanAPI.prototype.getRepoSnapshots = function (data: {
  page: number
}) {
  return this.request('/api/repo/getRepoSnapshots', data)
}

SiYuanAPI.prototype.getRepoTagSnapshots = function () {
  return this.request('/api/repo/getRepoTagSnapshots', {})
}

SiYuanAPI.prototype.removeRepoTagSnapshot = function (data: {
  tag: string
}) {
  return this.request('/api/repo/removeRepoTagSnapshot', data)
}

SiYuanAPI.prototype.getCloudRepoTagSnapshots = function () {
  return this.request('/api/repo/getCloudRepoTagSnapshots', {})
}

SiYuanAPI.prototype.getCloudRepoSnapshots = function (data: {
  page: number
}) {
  return this.request('/api/repo/getCloudRepoSnapshots', data)
}

SiYuanAPI.prototype.removeCloudRepoTagSnapshot = function (data: {
  tag: string
}) {
  return this.request('/api/repo/removeCloudRepoTagSnapshot', data)
}

SiYuanAPI.prototype.uploadCloudSnapshot = function (data: {
  tag: string
  id: string
}) {
  return this.request('/api/repo/uploadCloudSnapshot', data)
}

SiYuanAPI.prototype.downloadCloudSnapshot = function (data: {
  tag: string
  id: string
}) {
  return this.request('/api/repo/downloadCloudSnapshot', data)
}

SiYuanAPI.prototype.diffRepoSnapshots = function (data: {
  left: string
  right: string
}) {
  return this.request('/api/repo/diffRepoSnapshots', data)
}

SiYuanAPI.prototype.openRepoSnapshotDoc = function (data: {
  id: SiyuanID
}) {
  return this.request('/api/repo/openRepoSnapshotDoc', data)
}

SiYuanAPI.prototype.getRepoFile = function (data: {
  id: SiyuanID
}) {
  return this.request('/api/repo/getRepoFile', data)
}

SiYuanAPI.prototype.setRepoIndexRetentionDays = function (data: {
  days: number
}) {
  return this.request('/api/repo/setRepoIndexRetentionDays', data)
}

SiYuanAPI.prototype.setRetentionIndexesDaily = function (data: {
  indexes: number
}) {
  return this.request('/api/repo/setRetentionIndexesDaily', data)
}

