import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.getNotebookHistory = function () {
    return this.request('/api/history/getNotebookHistory', {});
};
SiYuanAPI.prototype.rollbackNotebookHistory = function (data) {
    return this.request('/api/history/rollbackNotebookHistory', data);
};
SiYuanAPI.prototype.rollbackAssetsHistory = function (data) {
    return this.request('/api/history/rollbackAssetsHistory', data);
};
SiYuanAPI.prototype.getDocHistoryContent = function (data) {
    return this.request('/api/history/getDocHistoryContent', data);
};
SiYuanAPI.prototype.rollbackDocHistory = function (data) {
    return this.request('/api/history/rollbackDocHistory', data);
};
SiYuanAPI.prototype.clearWorkspaceHistory = function () {
    return this.request('/api/history/clearWorkspaceHistory', {});
};
SiYuanAPI.prototype.reindexHistory = function () {
    return this.request('/api/history/reindexHistory', {});
};
SiYuanAPI.prototype.searchHistory = function (data) {
    return this.request('/api/history/searchHistory', data);
};
SiYuanAPI.prototype.getHistoryItems = function (data) {
    return this.request('/api/history/getHistoryItems', data);
};
//# sourceMappingURL=index.js.map