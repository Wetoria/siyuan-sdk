import {
  SiYuanAPI,
  SyApiMethodResponse,
} from '../../core/index.js'

/**
 * File API 类型定义
 */
export interface FileAPI {
  /**
   * 获取文件内容
   * @path /api/file/getFile
   */
  getFile: (path: string) => SyApiMethodResponse<any>
  /**
   * 上传/创建文件
   * @path /api/file/putFile
   */
  putFile: (path: string, isDir: boolean, file: any) => SyApiMethodResponse<any>
  /**
   * 删除文件
   * @path /api/file/removeFile
   */
  removeFile: (path: string) => SyApiMethodResponse<any>
  /**
   * 读取目录
   * @path /api/file/readDir
   */
  readDir: (path: string) => SyApiMethodResponse<any>
  /**
   * 复制文件
   * @path /api/file/copyFile
   */
  copyFile: (data: {
    /** 源文件路径 */
    src: string
    /** 目标文件路径 */
    dest: string
  }) => SyApiMethodResponse<any>
  /**
   * 全局复制文件
   * @path /api/file/globalCopyFiles
   */
  globalCopyFiles: (data: {
    /** 源文件路径列表 */
    srcs: string[]
    /** 目标目录（相对于工作空间） */
    destDir: string
  }) => SyApiMethodResponse<any>
  /**
   * 重命名文件
   * @path /api/file/renameFile
   */
  renameFile: (data: {
    /** 源文件路径 */
    path: string
    /** 新文件路径 */
    newPath: string
  }) => SyApiMethodResponse<any>
  /**
   * 获取唯一文件名
   * @path /api/file/getUniqueFilename
   */
  getUniqueFilename: (data: {
    /** 文件路径 */
    path: string
  }) => SyApiMethodResponse<{
    path: string
  }>
}

SiYuanAPI.prototype.getFile = function (path: string) {
  return this.request('/api/file/getFile', { path })
}

SiYuanAPI.prototype.putFile = function (path: string, isDir: boolean, file: any) {
  const form = new FormData()
  form.append('path', path)
  form.append('isDir', isDir.toString())
  form.append('file', file)
  return this.request('/api/file/putFile', form)
}

SiYuanAPI.prototype.removeFile = function (path: string) {
  return this.request('/api/file/removeFile', { path })
}

SiYuanAPI.prototype.readDir = function (path: string) {
  return this.request('/api/file/readDir', { path })
}

SiYuanAPI.prototype.copyFile = function (data: {
  src: string
  dest: string
}) {
  return this.request('/api/file/copyFile', data)
}

SiYuanAPI.prototype.globalCopyFiles = function (data: {
  srcs: string[]
  destDir: string
}) {
  return this.request('/api/file/globalCopyFiles', data)
}

SiYuanAPI.prototype.renameFile = function (data: {
  path: string
  newPath: string
}) {
  return this.request('/api/file/renameFile', data)
}

SiYuanAPI.prototype.getUniqueFilename = function (data: {
  path: string
}) {
  return this.request('/api/file/getUniqueFilename', data)
}

