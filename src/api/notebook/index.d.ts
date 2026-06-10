import type { SyApiMethodResponse } from '../../core/index.js';
import type { Notebook, NotebookId } from '../../types/index.js';
export interface RespLsNotebooks {
    notebooks: Notebook[];
}
/**
 * Notebook API 类型定义
 */
export interface NotebookAPI {
    /**
     * List all notebooks
     * @path /api/notebook/lsNotebooks
     * @returns - Promise<{ notebooks: Notebook[] }>
     */
    lsNotebooks: () => SyApiMethodResponse<RespLsNotebooks>;
    /**
     * 打开笔记本
     * @path /api/notebook/openNotebook
     */
    openNotebook: (notebook: NotebookId) => SyApiMethodResponse<any>;
    /**
     * 关闭笔记本
     * @path /api/notebook/closeNotebook
     */
    closeNotebook: (notebook: NotebookId) => SyApiMethodResponse<any>;
    /**
     * 重命名笔记本
     * @path /api/notebook/renameNotebook
     */
    renameNotebook: (notebook: NotebookId, name: string) => SyApiMethodResponse<any>;
    /**
     * 创建笔记本
     * @path /api/notebook/createNotebook
     */
    createNotebook: (name: string) => SyApiMethodResponse<any>;
    /**
     * 删除笔记本
     * @path /api/notebook/removeNotebook
     */
    removeNotebook: (notebook: NotebookId) => SyApiMethodResponse<any>;
    /**
     * 获取笔记本配置
     * @path /api/notebook/getNotebookConf
     */
    getNotebookConf: (notebook: NotebookId) => SyApiMethodResponse<any>;
    /**
     * 设置笔记本配置
     * @path /api/notebook/setNotebookConf
     */
    setNotebookConf: (notebook: NotebookId, conf: any) => SyApiMethodResponse<any>;
    /**
     * 改变笔记本排序
     * @path /api/notebook/changeSortNotebook
     */
    changeSortNotebook: (data: {
        /** 笔记本 ID 列表（按排序顺序） */
        notebooks: NotebookId[];
    }) => SyApiMethodResponse<any>;
    /**
     * 设置笔记本图标
     * @path /api/notebook/setNotebookIcon
     */
    setNotebookIcon: (data: {
        /** 笔记本 ID */
        notebook: NotebookId;
        /** 图标 */
        icon: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 获取笔记本信息
     * @path /api/notebook/getNotebookInfo
     */
    getNotebookInfo: (data: {
        /** 笔记本 ID */
        notebook: NotebookId;
    }) => SyApiMethodResponse<{
        boxInfo: any;
    }>;
}
//# sourceMappingURL=index.d.ts.map