import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.setAccount = function (data) {
    return this.request('/api/setting/setAccount', data);
};
SiYuanAPI.prototype.setEditor = function (data) {
    return this.request('/api/setting/setEditor', data);
};
SiYuanAPI.prototype.setExport = function (data) {
    return this.request('/api/setting/setExport', data);
};
SiYuanAPI.prototype.setFiletree = function (data) {
    return this.request('/api/setting/setFiletree', data);
};
SiYuanAPI.prototype.setSearch = function (data) {
    return this.request('/api/setting/setSearch', data);
};
SiYuanAPI.prototype.setKeymap = function (data) {
    return this.request('/api/setting/setKeymap', data);
};
SiYuanAPI.prototype.setAppearance = function (data) {
    return this.request('/api/setting/setAppearance', data);
};
SiYuanAPI.prototype.getCloudUser = function (data) {
    return this.request('/api/setting/getCloudUser', data);
};
SiYuanAPI.prototype.logoutCloudUser = function () {
    return this.request('/api/setting/logoutCloudUser', {});
};
SiYuanAPI.prototype.login2faCloudUser = function (data) {
    return this.request('/api/setting/login2faCloudUser', data);
};
SiYuanAPI.prototype.setEmoji = function (data) {
    return this.request('/api/setting/setEmoji', data);
};
SiYuanAPI.prototype.setFlashcard = function (data) {
    return this.request('/api/setting/setFlashcard', data);
};
SiYuanAPI.prototype.setAI = function (data) {
    return this.request('/api/setting/setAI', data);
};
SiYuanAPI.prototype.setBazaar = function (data) {
    return this.request('/api/setting/setBazaar', data);
};
SiYuanAPI.prototype.setPublish = function (data) {
    return this.request('/api/setting/setPublish', data);
};
SiYuanAPI.prototype.getPublish = function () {
    return this.request('/api/setting/getPublish', {});
};
SiYuanAPI.prototype.refreshVirtualBlockRef = function () {
    return this.request('/api/setting/refreshVirtualBlockRef', {});
};
SiYuanAPI.prototype.addVirtualBlockRefInclude = function (data) {
    return this.request('/api/setting/addVirtualBlockRefInclude', data);
};
SiYuanAPI.prototype.addVirtualBlockRefExclude = function (data) {
    return this.request('/api/setting/addVirtualBlockRefExclude', data);
};
SiYuanAPI.prototype.setSnippetConfig = function (data) {
    return this.request('/api/setting/setSnippet', data);
};
SiYuanAPI.prototype.setEditorReadOnly = function (data) {
    return this.request('/api/setting/setEditorReadOnly', data);
};
//# sourceMappingURL=index.js.map