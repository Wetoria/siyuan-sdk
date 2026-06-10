import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.getBookmark = function () {
    return this.request('/api/bookmark/getBookmark', {});
};
SiYuanAPI.prototype.renameBookmark = function (data) {
    return this.request('/api/bookmark/renameBookmark', data);
};
SiYuanAPI.prototype.removeBookmark = function (data) {
    return this.request('/api/bookmark/removeBookmark', data);
};
//# sourceMappingURL=index.js.map