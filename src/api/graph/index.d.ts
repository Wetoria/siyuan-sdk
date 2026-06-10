import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * 图谱结果
 */
export interface IGraphResult {
    nodes: any[];
    links: any[];
    conf: any;
    box?: SiyuanID;
    reqId?: any;
    id?: SiyuanID;
}
/**
 * Graph API 类型定义
 */
export interface GraphAPI {
    /**
     * 重置全局图谱
     * @path /api/graph/resetGraph
     */
    resetGraph: () => SyApiMethodResponse<{
        conf: any;
    }>;
    /**
     * 重置本地图谱
     * @path /api/graph/resetLocalGraph
     */
    resetLocalGraph: () => SyApiMethodResponse<{
        conf: any;
    }>;
    /**
     * 获取全局图谱
     * @path /api/graph/getGraph
     */
    getGraph: (data: {
        /** 请求 ID（可选） */
        reqId?: any;
        /** 查询关键词（必需） */
        k: string;
        /** 图谱配置（必需） */
        conf: Record<string, any>;
    }) => SyApiMethodResponse<IGraphResult>;
    /**
     * 获取本地图谱
     * @path /api/graph/getLocalGraph
     */
    getLocalGraph: (data: {
        /** 请求 ID（可选） */
        reqId?: any;
        /** 块 ID（必需） */
        id: SiyuanID;
        /** 关键词（必需） */
        k: string;
        /** 图谱配置（必需） */
        conf: Record<string, any>;
    }) => SyApiMethodResponse<IGraphResult>;
}
//# sourceMappingURL=index.d.ts.map