import type { SyApiMethodResponse } from '../../core/index.js';
import type { SiyuanID } from '../../types/index.js';
/**
 * UI API 类型定义
 */
export interface UIAPI {
    /**
     * 重新加载 UI
     * @path /api/ui/reloadUI
     */
    reloadUI: () => SyApiMethodResponse<any>;
    /**
     * 重新加载图标
     * @path /api/ui/reloadIcon
     */
    reloadIcon: () => SyApiMethodResponse<any>;
    /**
     * 重新加载属性视图
     * @path /api/ui/reloadAttributeView
     */
    reloadAttributeView: (data: {
        /** 属性视图 ID（必需） */
        id: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 重新加载编辑器
     * @path /api/ui/reloadProtyle
     */
    reloadProtyle: (data: {
        /** 块 ID（必需） */
        id: SiyuanID;
    }) => SyApiMethodResponse<any>;
    /**
     * 重新加载文件树
     * @path /api/ui/reloadFiletree
     */
    reloadFiletree: () => SyApiMethodResponse<any>;
    /**
     * 重新加载标签
     * @path /api/ui/reloadTag
     */
    reloadTag: () => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map