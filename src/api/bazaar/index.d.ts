import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Bazaar API 类型定义
 */
export interface BazaarAPI {
    /**
     * 获取集市插件
     * @path /api/bazaar/getBazaarPlugin
     */
    getBazaarPlugin: (data: {
        /** 前端类型（必需） */
        frontend: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 获取已安装插件
     * @path /api/bazaar/getInstalledPlugin
     */
    getInstalledPlugin: (data: {
        /** 前端类型（必需） */
        frontend: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 安装集市插件
     * @path /api/bazaar/installBazaarPlugin
     */
    installBazaarPlugin: (data: {
        /** 前端类型（必需） */
        frontend: string;
        /** 仓库 URL（必需） */
        repoURL: string;
        /** 仓库哈希（必需） */
        repoHash: string;
        /** 包名（必需） */
        packageName: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 卸载集市插件
     * @path /api/bazaar/uninstallBazaarPlugin
     */
    uninstallBazaarPlugin: (data: {
        /** 前端类型（必需） */
        frontend: string;
        /** 包名（必需） */
        packageName: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 获取集市挂件
     * @path /api/bazaar/getBazaarWidget
     */
    getBazaarWidget: (data: {
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 获取已安装挂件
     * @path /api/bazaar/getInstalledWidget
     */
    getInstalledWidget: (data: {
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 安装集市挂件
     * @path /api/bazaar/installBazaarWidget
     */
    installBazaarWidget: (data: {
        /** 仓库 URL（必需） */
        repoURL: string;
        /** 仓库哈希（必需） */
        repoHash: string;
        /** 包名（必需） */
        packageName: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 卸载集市挂件
     * @path /api/bazaar/uninstallBazaarWidget
     */
    uninstallBazaarWidget: (data: {
        /** 包名（必需） */
        packageName: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 获取集市图标
     * @path /api/bazaar/getBazaarIcon
     */
    getBazaarIcon: (data: {
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 获取已安装图标
     * @path /api/bazaar/getInstalledIcon
     */
    getInstalledIcon: (data: {
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 安装集市图标
     * @path /api/bazaar/installBazaarIcon
     */
    installBazaarIcon: (data: {
        /** 仓库 URL（必需） */
        repoURL: string;
        /** 仓库哈希（必需） */
        repoHash: string;
        /** 包名（必需） */
        packageName: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
        appearance: any;
    }>;
    /**
     * 卸载集市图标
     * @path /api/bazaar/uninstallBazaarIcon
     */
    uninstallBazaarIcon: (data: {
        /** 包名（必需） */
        packageName: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
        appearance: any;
    }>;
    /**
     * 获取集市模板
     * @path /api/bazaar/getBazaarTemplate
     */
    getBazaarTemplate: (data: {
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 获取已安装模板
     * @path /api/bazaar/getInstalledTemplate
     */
    getInstalledTemplate: (data: {
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 安装集市模板
     * @path /api/bazaar/installBazaarTemplate
     */
    installBazaarTemplate: (data: {
        /** 仓库 URL（必需） */
        repoURL: string;
        /** 仓库哈希（必需） */
        repoHash: string;
        /** 包名（必需） */
        packageName: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 卸载集市模板
     * @path /api/bazaar/uninstallBazaarTemplate
     */
    uninstallBazaarTemplate: (data: {
        /** 包名（必需） */
        packageName: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 获取集市主题
     * @path /api/bazaar/getBazaarTheme
     */
    getBazaarTheme: (data: {
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 获取已安装主题
     * @path /api/bazaar/getInstalledTheme
     */
    getInstalledTheme: (data: {
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 安装集市主题
     * @path /api/bazaar/installBazaarTheme
     */
    installBazaarTheme: (data: {
        /** 仓库 URL（必需） */
        repoURL: string;
        /** 仓库哈希（必需） */
        repoHash: string;
        /** 包名（必需） */
        packageName: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 卸载集市主题
     * @path /api/bazaar/uninstallBazaarTheme
     */
    uninstallBazaarTheme: (data: {
        /** 包名（必需） */
        packageName: string;
        /** 关键词（可选） */
        keyword?: string;
    }) => SyApiMethodResponse<{
        packages: any[];
    }>;
    /**
     * 获取集市包 README
     * @path /api/bazaar/getBazaarPackageREAME
     */
    getBazaarPackageREAME: (data: {
        /** 仓库 URL（必需） */
        repoURL: string;
        /** 仓库哈希（必需） */
        repoHash: string;
        /** 包类型（必需） */
        packageType: string;
    }) => SyApiMethodResponse<{
        html: string;
    }>;
    /**
     * 获取已更新包
     * @path /api/bazaar/getUpdatedPackage
     */
    getUpdatedPackage: (data: {
        /** 前端类型（必需） */
        frontend: string;
    }) => SyApiMethodResponse<{
        plugins: any[];
        widgets: any[];
        icons: any[];
        themes: any[];
        templates: any[];
    }>;
    /**
     * 批量更新包
     * @path /api/bazaar/batchUpdatePackage
     */
    batchUpdatePackage: (data: {
        /** 前端类型（必需） */
        frontend: string;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map