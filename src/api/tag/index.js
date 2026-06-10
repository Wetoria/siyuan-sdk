import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.getTag = function (data) {
    return this.request('/api/tag/getTag', data);
};
SiYuanAPI.prototype.renameTag = function (data) {
    return this.request('/api/tag/renameTag', data);
};
SiYuanAPI.prototype.removeTag = function (data) {
    return this.request('/api/tag/removeTag', data);
};
//# sourceMappingURL=index.js.map