import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.setLocalStorage = function (data) {
    return this.request('/api/storage/setLocalStorage', data);
};
SiYuanAPI.prototype.getLocalStorage = function () {
    return this.request('/api/storage/getLocalStorage', {});
};
SiYuanAPI.prototype.setLocalStorageVal = function (data) {
    return this.request('/api/storage/setLocalStorageVal', data);
};
SiYuanAPI.prototype.removeLocalStorageVals = function (data) {
    return this.request('/api/storage/removeLocalStorageVals', data);
};
SiYuanAPI.prototype.setCriterion = function (data) {
    return this.request('/api/storage/setCriterion', data);
};
SiYuanAPI.prototype.getCriteria = function () {
    return this.request('/api/storage/getCriteria', {});
};
SiYuanAPI.prototype.removeCriterion = function (data) {
    return this.request('/api/storage/removeCriterion', data);
};
SiYuanAPI.prototype.getRecentDocs = function (data) {
    return this.request('/api/storage/getRecentDocs', data);
};
SiYuanAPI.prototype.updateRecentDocViewTime = function (data) {
    return this.request('/api/storage/updateRecentDocViewTime', data);
};
SiYuanAPI.prototype.updateRecentDocCloseTime = function (data) {
    return this.request('/api/storage/updateRecentDocCloseTime', data);
};
SiYuanAPI.prototype.updateRecentDocOpenTime = function (data) {
    return this.request('/api/storage/updateRecentDocOpenTime', data);
};
SiYuanAPI.prototype.getOutlineStorage = function (data) {
    return this.request('/api/storage/getOutlineStorage', data);
};
SiYuanAPI.prototype.setOutlineStorage = function (data) {
    return this.request('/api/storage/setOutlineStorage', data);
};
SiYuanAPI.prototype.removeOutlineStorage = function (data) {
    return this.request('/api/storage/removeOutlineStorage', data);
};
//# sourceMappingURL=index.js.map