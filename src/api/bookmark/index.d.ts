import type { SyApiMethodResponse } from '../../core/index.js';
/**
 * Bookmark API 类型定义
 */
export interface BookmarkAPI {
    /**
     * 获取书签
     * @path /api/bookmark/getBookmark
     */
    getBookmark: () => SyApiMethodResponse<any>;
    /**
     * 重命名书签
     * @path /api/bookmark/renameBookmark
     */
    renameBookmark: (data: {
        /** 旧书签名称（必需） */
        oldBookmark: string;
        /** 新书签名称（必需） */
        newBookmark: string;
    }) => SyApiMethodResponse<any>;
    /**
     * 删除书签
     * @path /api/bookmark/removeBookmark
     */
    removeBookmark: (data: {
        /** 书签名称（必需） */
        bookmark: string;
    }) => SyApiMethodResponse<any>;
}
//# sourceMappingURL=index.d.ts.map