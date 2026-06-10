import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.searchTag = function (data) {
    return this.request('/api/search/searchTag', data);
};
SiYuanAPI.prototype.searchTemplate = function (data) {
    return this.request('/api/search/searchTemplate', data);
};
SiYuanAPI.prototype.removeTemplate = function (data) {
    return this.request('/api/search/removeTemplate', data);
};
SiYuanAPI.prototype.searchWidget = function (data) {
    return this.request('/api/search/searchWidget', data);
};
SiYuanAPI.prototype.searchRefBlock = function (data) {
    return this.request('/api/search/searchRefBlock', data);
};
SiYuanAPI.prototype.searchEmbedBlock = function (data) {
    return this.request('/api/search/searchEmbedBlock', data);
};
SiYuanAPI.prototype.getEmbedBlock = function (data) {
    return this.request('/api/search/getEmbedBlock', data);
};
SiYuanAPI.prototype.updateEmbedBlock = function (data) {
    return this.request('/api/search/updateEmbedBlock', data);
};
SiYuanAPI.prototype.fullTextSearchBlock = function (data) {
    return this.request('/api/search/fullTextSearchBlock', data);
};
SiYuanAPI.prototype.searchAsset = function (data) {
    return this.request('/api/search/searchAsset', data);
};
SiYuanAPI.prototype.findReplace = function (data) {
    return this.request('/api/search/findReplace', data);
};
SiYuanAPI.prototype.fullTextSearchAssetContent = function (data) {
    return this.request('/api/search/fullTextSearchAssetContent', data);
};
SiYuanAPI.prototype.getAssetContent = function (data) {
    return this.request('/api/search/getAssetContent', data);
};
SiYuanAPI.prototype.listInvalidBlockRefs = function (data) {
    return this.request('/api/search/listInvalidBlockRefs', data);
};
//# sourceMappingURL=index.js.map