import { SyApiMethodResponse, SyApiResponse } from '../../core/index.js';
/**
 * File API 类型定义
 */
export interface FileAPI {
    /**
     * 获取文件内容
     * @path /api/file/getFile
     * @param path - The file path
     * @returns - Promise<string | SyApiResponse<string | null>>
     *   返回值可能是：
     *   - 文件存在时：直接返回文件内容（字符串）
     *   - 文件不存在或出错时：标准结构 { code: number, msg: string, data: null }
     *     - code: 404 表示文件不存在
     *     - code: 403 表示路径无效或权限不足
     *     - code: 405 表示路径是目录
     *     - code: 500 表示读取文件失败
     */
    getFile: (path: string) => Promise<string | SyApiResponse<string | null>>;
    /**
     * 上传/创建文件
     * @path /api/file/putFile
     */
    putFile: (path: string, isDir: boolean, file: any) => SyApiMethodResponse<any>;
    /**
     * 删除文件
     * @path /api/file/removeFile
     */
    removeFile: (path: string) => SyApiMethodResponse<any>;
    /**
     * 读取目录
     * @path /api/file/readDir
     */
    readDir: (path: string) => SyApiMethodResponse<any>;
    /**
     * 复制文件
     * @path /api/file/copyFile
     */
    copyFile: (data: {
        /** 源文件路径 */
        src: string;
        /** 目标文件路径 */
        dest: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 全局复制文件
     * @path /api/file/globalCopyFiles
     */
    globalCopyFiles: (data: {
        /** 源文件路径列表 */
        srcs: string[];
        /** 目标目录（相对于工作空间） */
        destDir: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 重命名文件
     * @path /api/file/renameFile
     */
    renameFile: (data: {
        /** 源文件路径 */
        path: string;
        /** 新文件路径 */
        newPath: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取唯一文件名
     * @path /api/file/getUniqueFilename
     */
    getUniqueFilename: (data: {
        /** 文件路径 */
        path: string;
    }) => SyApiMethodResponse<{
        path: string;
    }>;
}
//# sourceMappingURL=index.d.ts.map