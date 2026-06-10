import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.setBlockAttrs = function (id, attrs) {
    return this.request('/api/attr/setBlockAttrs', {
        id,
        attrs,
    });
};
SiYuanAPI.prototype.getBlockAttrs = function (id) {
    return this.request('/api/attr/getBlockAttrs', { id });
};
SiYuanAPI.prototype.batchSetBlockAttrs = function (blockAttrs) {
    return this.request('/api/attr/batchSetBlockAttrs', { blockAttrs });
};
SiYuanAPI.prototype.batchGetBlockAttrs = function (ids) {
    return this.request('/api/attr/batchGetBlockAttrs', { ids });
};
SiYuanAPI.prototype.getBookmarkLabels = function () {
    return this.request('/api/attr/getBookmarkLabels', {});
};
SiYuanAPI.prototype.resetBlockAttrs = function (data) {
    return this.request('/api/attr/resetBlockAttrs', data);
};
//# sourceMappingURL=index.js.map