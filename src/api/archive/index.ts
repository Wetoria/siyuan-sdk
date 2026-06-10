import {
  SiYuanAPI,
  SyApiMethodResponse,
} from '../../core/index.js'

/**
 * Archive API 类型定义
 */
export interface ArchiveAPI {
  /**
   * 压缩文件或目录为 ZIP
   * @path /api/archive/zip
   */
  zip: (data: {
    /** 要压缩的文件或目录路径 */
    path: string
    /** ZIP 文件保存路径 */
    zipPath: string
  }) => SyApiMethodResponse<any>
  /**
   * 解压 ZIP 文件
   * @path /api/archive/unzip
   */
  unzip: <T = any>(
    zipPath: string,
    path: string
  ) => SyApiMethodResponse<T>
}

SiYuanAPI.prototype.zip = function (data: {
  path: string
  zipPath: string
}) {
  return this.request('/api/archive/zip', data)
}

SiYuanAPI.prototype.unzip = function <T = any>(zipPath: string, path: string): SyApiMethodResponse<T> {
  return this.request('/api/archive/unzip', {
    zipPath,
    path,
  })
}

