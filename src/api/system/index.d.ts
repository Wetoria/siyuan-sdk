import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * System API 类型定义
 */
export interface SystemAPI {
    /**
     * 获取启动进度
     * @path /api/system/bootProgress
     */
    bootProgress: () => SyApiMethodResponse<{
        progress: number;
        details: string;
    }>;
    /**
     * 获取版本号
     * @path /api/system/version
     */
    version: () => SyApiMethodResponse<string>;
    /**
     * 获取当前时间戳
     * @path /api/system/currentTime
     */
    currentTime: () => SyApiMethodResponse<number>;
    /**
     * 获取验证码
     * @path /api/system/getCaptcha
     */
    getCaptcha: () => SyApiMethodResponse<any>;
    /**
     * 添加 UI 进程
     * @path /api/system/uiproc
     */
    uiproc: (data: {
        /** 进程 ID */
        pid: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 登录认证
     * @path /api/system/loginAuth
     */
    loginAuth: (data: any) => SyApiMethodResponse<any>;
    /**
     * 登出认证
     * @path /api/system/logoutAuth
     */
    logoutAuth: () => SyApiMethodResponse<any>;
    /**
     * 获取表情配置
     * @path /api/system/getEmojiConf
     */
    getEmojiConf: () => SyApiMethodResponse<any[]>;
    /**
     * 设置 API Token
     * @path /api/system/setAPIToken
     */
    setAPIToken: (data: {
        /** Token */
        token: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置访问授权码
     * @path /api/system/setAccessAuthCode
     */
    setAccessAuthCode: (data: {
        /** 访问授权码 */
        accessAuthCode: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置跟随系统锁屏
     * @path /api/system/setFollowSystemLockScreen
     */
    setFollowSystemLockScreen: (data: {
        /** 锁屏模式 */
        lockScreenMode: number;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置网络服务
     * @path /api/system/setNetworkServe
     */
    setNetworkServe: (data: {
        /** 是否启用网络服务 */
        networkServe: boolean;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置自动启动
     * @path /api/system/setAutoLaunch
     */
    setAutoLaunch: (data: {
        /** 自动启动模式 */
        autoLaunch: number;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置下载安装包
     * @path /api/system/setDownloadInstallPkg
     */
    setDownloadInstallPkg: (data: {
        /** 是否下载安装包 */
        downloadInstallPkg: boolean;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置网络代理
     * @path /api/system/setNetworkProxy
     */
    setNetworkProxy: (data: {
        /** 代理协议 */
        scheme: string;
        /** 代理主机 */
        host: string;
        /** 代理端口 */
        port: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置工作空间目录
     * @path /api/system/setWorkspaceDir
     */
    setWorkspaceDir: (data: {
        /** 工作空间路径 */
        path: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取工作空间列表
     * @path /api/system/getWorkspaces
     */
    getWorkspaces: () => SyApiMethodResponse<Array<{
        path: string;
        closed: boolean;
    }>>;
    /**
     * 获取移动端工作空间列表
     * @path /api/system/getMobileWorkspaces
     */
    getMobileWorkspaces: () => SyApiMethodResponse<string[]>;
    /**
     * 检查工作空间目录
     * @path /api/system/checkWorkspaceDir
     */
    checkWorkspaceDir: (data: {
        /** 路径 */
        path: string;
    }) => SyApiMethodResponse<{
        isWorkspace: boolean;
    }>;
    /**
     * 创建工作空间目录
     * @path /api/system/createWorkspaceDir
     */
    createWorkspaceDir: (data: {
        /** 路径 */
        path: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 移除工作空间目录
     * @path /api/system/removeWorkspaceDir
     */
    removeWorkspaceDir: (data: {
        /** 路径 */
        path: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 物理删除工作空间目录
     * @path /api/system/removeWorkspaceDirPhysically
     */
    removeWorkspaceDirPhysically: (data: {
        /** 路径 */
        path: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 设置外观模式
     * @path /api/system/setAppearanceMode
     */
    setAppearanceMode: (data: {
        /** 模式：0-浅色，1-深色 */
        mode: number;
    }) => SyApiMethodResponse<{
        appearance: any;
    }>;
    /**
     * 设置 UI 布局
     * @path /api/system/setUILayout
     */
    setUILayout: (data: {
        /** UI 布局配置 */
        layout: any;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取系统字体
     * @path /api/system/getSysFonts
     */
    getSysFonts: () => SyApiMethodResponse<string[]>;
    /**
     * 退出应用
     * @path /api/system/exit
     */
    exit: (data: {
        /** 是否强制退出（可选） */
        force?: boolean;
        /** 执行安装包模式：0-默认检查新版本，1-不执行新版本安装，2-执行新版本安装（可选） */
        execInstallPkg?: number;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取配置
     * @path /api/system/getConf
     */
    getConf: () => SyApiMethodResponse<{
        conf: any;
        start: boolean;
        isPublish: boolean;
    }>;
    /**
     * 检查更新
     * @path /api/system/checkUpdate
     */
    checkUpdate: (data: {
        /** 是否显示消息 */
        showMsg: boolean;
    }) => SyApiMethodResponse<any>;
    /**
     * 导出日志
     * @path /api/system/exportLog
     */
    exportLog: () => SyApiMethodResponse<{
        zip: string;
    }>;
    /**
     * 获取更新日志
     * @path /api/system/getChangelog
     */
    getChangelog: () => SyApiMethodResponse<{
        show: boolean;
        html: string;
    }>;
    /**
     * 获取网络配置
     * @path /api/system/getNetwork
     */
    getNetwork: () => SyApiMethodResponse<{
        proxy: any;
    }>;
    /**
     * 导出配置
     * @path /api/system/exportConf
     */
    exportConf: () => SyApiMethodResponse<{
        name: string;
        zip: string;
    }>;
    /**
     * 导入配置
     * @path /api/system/importConf
     */
    importConf: (formData: FormData) => SyApiMethodResponse<any>;
    /**
     * 获取工作空间信息
     * @path /api/system/getWorkspaceInfo
     */
    getWorkspaceInfo: () => SyApiMethodResponse<{
        workspaceDir: string;
        siyuanVer: string;
    }>;
    /**
     * 重新加载 UI
     * @path /api/system/reloadUI
     * @deprecated 请使用 /api/ui/reloadUI
     */
    reloadUI: () => SyApiMethodResponse<any>;
    /**
     * 添加 Microsoft Defender 排除项
     * @path /api/system/addMicrosoftDefenderExclusion
     */
    addMicrosoftDefenderExclusion: () => SyApiMethodResponse<any>;
    /**
     * 忽略添加 Microsoft Defender 排除项
     * @path /api/system/ignoreAddMicrosoftDefenderExclusion
     */
    ignoreAddMicrosoftDefenderExclusion: () => SyApiMethodResponse<any>;
    /**
     * 清理数据索引
     * @path /api/system/vacuumDataIndex
     */
    vacuumDataIndex: () => SyApiMethodResponse<any>;
    /**
     * 重建数据索引
     * @path /api/system/rebuildDataIndex
     */
    rebuildDataIndex: () => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map