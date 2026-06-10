import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.setSyncEnable = function (data) {
    return this.request('/api/sync/setSyncEnable', data);
};
SiYuanAPI.prototype.setSyncInterval = function (data) {
    return this.request('/api/sync/setSyncInterval', data);
};
SiYuanAPI.prototype.setSyncPerception = function (data) {
    return this.request('/api/sync/setSyncPerception', data);
};
SiYuanAPI.prototype.setSyncGenerateConflictDoc = function (data) {
    return this.request('/api/sync/setSyncGenerateConflictDoc', data);
};
SiYuanAPI.prototype.setSyncMode = function (data) {
    return this.request('/api/sync/setSyncMode', data);
};
SiYuanAPI.prototype.setSyncProvider = function (data) {
    return this.request('/api/sync/setSyncProvider', data);
};
SiYuanAPI.prototype.setSyncProviderS3 = function (data) {
    return this.request('/api/sync/setSyncProviderS3', data);
};
SiYuanAPI.prototype.setSyncProviderWebDAV = function (data) {
    return this.request('/api/sync/setSyncProviderWebDAV', data);
};
SiYuanAPI.prototype.setSyncProviderLocal = function (data) {
    return this.request('/api/sync/setSyncProviderLocal', data);
};
SiYuanAPI.prototype.setCloudSyncDir = function (data) {
    return this.request('/api/sync/setCloudSyncDir', data);
};
SiYuanAPI.prototype.createCloudSyncDir = function (data) {
    return this.request('/api/sync/createCloudSyncDir', data);
};
SiYuanAPI.prototype.removeCloudSyncDir = function (data) {
    return this.request('/api/sync/removeCloudSyncDir', data);
};
SiYuanAPI.prototype.listCloudSyncDir = function () {
    return this.request('/api/sync/listCloudSyncDir', {});
};
SiYuanAPI.prototype.performSync = function (data) {
    return this.request('/api/sync/performSync', data);
};
SiYuanAPI.prototype.performBootSync = function () {
    return this.request('/api/sync/performBootSync', {});
};
SiYuanAPI.prototype.getBootSync = function () {
    return this.request('/api/sync/getBootSync', {});
};
SiYuanAPI.prototype.getSyncInfo = function () {
    return this.request('/api/sync/getSyncInfo', {});
};
SiYuanAPI.prototype.exportSyncProviderS3 = function () {
    return this.request('/api/sync/exportSyncProviderS3', {});
};
SiYuanAPI.prototype.importSyncProviderS3 = function (file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.request('/api/sync/importSyncProviderS3', formData);
};
SiYuanAPI.prototype.exportSyncProviderWebDAV = function () {
    return this.request('/api/sync/exportSyncProviderWebDAV', {});
};
SiYuanAPI.prototype.importSyncProviderWebDAV = function (file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.request('/api/sync/importSyncProviderWebDAV', formData);
};
//# sourceMappingURL=index.js.map