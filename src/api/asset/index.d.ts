import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * Asset Files API 类型定义
 */
export interface AssetAPI {
    /**
     * 上传资源文件
     * @path /api/asset/upload
     */
    upload: (assetsDirPath: string, files: any[]) => SyApiMethodResponse<any>;
    /**
     * 上传资源到云端
     * @path /api/asset/uploadCloud
     */
    uploadCloud: (data: {
        /** 文档 ID */
        id: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 插入本地资源
     * @path /api/asset/insertLocalAssets
     */
    insertLocalAssets: (data: {
        /** 资源路径数组 */
        assetPaths: string[];
        /** 是否上传（可选，默认 true） */
        isUpload?: boolean;
        /** 文档 ID */
        id: SiyuanID;
    }) => SyApiMethodResponse<{
        succMap: Record<string, any>;
    }>;
    /**
     * 解析资源路径
     * @path /api/asset/resolveAssetPath
     */
    resolveAssetPath: (data: {
        /** 资源路径 */
        path: string;
    }) => SyApiMethodResponse<string>;
    /**
     * 设置文件注释
     * @path /api/asset/setFileAnnotation
     */
    setFileAnnotation: (data: {
        /** 文件路径 */
        path: string;
        /** 注释数据 */
        data: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取文件注释
     * @path /api/asset/getFileAnnotation
     */
    getFileAnnotation: (data: {
        /** 文件路径 */
        path: string;
    }) => SyApiMethodResponse<{
        data: string;
    }>;
    /**
     * 获取未使用的资源
     * @path /api/asset/getUnusedAssets
     */
    getUnusedAssets: () => SyApiMethodResponse<{
        unusedAssets: string[];
    }>;
    /**
     * 获取缺失的资源
     * @path /api/asset/getMissingAssets
     */
    getMissingAssets: () => SyApiMethodResponse<{
        missingAssets: string[];
    }>;
    /**
     * 删除未使用的资源
     * @path /api/asset/removeUnusedAsset
     */
    removeUnusedAsset: (data: {
        /** 资源路径 */
        path: string;
    }) => SyApiMethodResponse<{
        path: string;
    }>;
    /**
     * 删除所有未使用的资源
     * @path /api/asset/removeUnusedAssets
     */
    removeUnusedAssets: () => SyApiMethodResponse<{
        paths: string[];
    }>;
    /**
     * 获取文档图片资源
     * @path /api/asset/getDocImageAssets
     */
    getDocImageAssets: (data: {
        /** 文档 ID */
        id: SiyuanID;
    }) => SyApiMethodResponse<string[]>;
    /**
     * 获取文档资源
     * @path /api/asset/getDocAssets
     */
    getDocAssets: (data: {
        /** 文档 ID */
        id: SiyuanID;
    }) => SyApiMethodResponse<string[]>;
    /**
     * 重命名资源
     * @path /api/asset/renameAsset
     */
    renameAsset: (data: {
        /** 旧路径 */
        oldPath: string;
        /** 新名称 */
        newName: string;
    }) => SyApiMethodResponse<{
        newPath: string;
    }>;
    /**
     * 获取图片 OCR 文本
     * @path /api/asset/getImageOCRText
     */
    getImageOCRText: (data: {
        /** 图片路径（可选） */
        path?: string;
    }) => SyApiMethodResponse<{
        text: string;
    }>;
    /**
     * 设置图片 OCR 文本
     * @path /api/asset/setImageOCRText
     */
    setImageOCRText: (data: {
        /** 图片路径 */
        path: string;
        /** OCR 文本 */
        text: string;
    }) => SyApiMethodResponse<any>;
    /**
     * OCR 识别
     * @path /api/asset/ocr
     */
    ocr: (data: {
        /** 图片路径 */
        path: string;
    }) => SyApiMethodResponse<{
        text: string;
        ocrJSON: any;
    }>;
    /**
     * 完全重新索引资源内容
     * @path /api/asset/fullReindexAssetContent
     */
    fullReindexAssetContent: () => SyApiMethodResponse<any>;
    /**
     * 获取资源统计信息
     * @path /api/asset/statAsset
     */
    statAsset: (data: {
        /** 资源路径 */
        path: string;
    }) => SyApiMethodResponse<{
        size: number;
        hSize: string;
        created: number;
        hCreated: string;
        updated: number;
        hUpdated: string;
    }>;
}
//# sourceMappingURL=index.d.ts.map