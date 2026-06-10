import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * 云空间信息
 */
export interface ICloudSpaceResult {
    sync: number;
    backup: number;
    hAssetSize: string;
    hSize: string;
    hTotalSize: string;
    hExchangeSize: string;
    hTrafficUploadSize: string;
    hTrafficDownloadSize: string;
    hTrafficAPIGet: string;
    hTrafficAPIPut: string;
}
/**
 * Cloud API 类型定义
 */
export interface CloudAPI {
    /**
     * 获取云空间
     * @path /api/cloud/getCloudSpace
     */
    getCloudSpace: () => SyApiMethodResponse<ICloudSpaceResult>;
}
//# sourceMappingURL=index.d.ts.map