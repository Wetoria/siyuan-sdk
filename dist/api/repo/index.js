import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.initRepoKey = function () {
    return this.request('/api/repo/initRepoKey', {});
};
SiYuanAPI.prototype.initRepoKeyFromPassphrase = function (data) {
    return this.request('/api/repo/initRepoKeyFromPassphrase', data);
};
SiYuanAPI.prototype.resetRepo = function () {
    return this.request('/api/repo/resetRepo', {});
};
SiYuanAPI.prototype.purgeRepo = function () {
    return this.request('/api/repo/purgeRepo', {});
};
SiYuanAPI.prototype.purgeCloudRepo = function () {
    return this.request('/api/repo/purgeCloudRepo', {});
};
SiYuanAPI.prototype.importRepoKey = function (data) {
    return this.request('/api/repo/importRepoKey', data);
};
SiYuanAPI.prototype.createSnapshot = function (data) {
    return this.request('/api/repo/createSnapshot', data);
};
SiYuanAPI.prototype.tagSnapshot = function (data) {
    return this.request('/api/repo/tagSnapshot', data);
};
SiYuanAPI.prototype.checkoutRepo = function (data) {
    return this.request('/api/repo/checkoutRepo', data);
};
SiYuanAPI.prototype.getRepoSnapshots = function (data) {
    return this.request('/api/repo/getRepoSnapshots', data);
};
SiYuanAPI.prototype.getRepoTagSnapshots = function () {
    return this.request('/api/repo/getRepoTagSnapshots', {});
};
SiYuanAPI.prototype.removeRepoTagSnapshot = function (data) {
    return this.request('/api/repo/removeRepoTagSnapshot', data);
};
SiYuanAPI.prototype.getCloudRepoTagSnapshots = function () {
    return this.request('/api/repo/getCloudRepoTagSnapshots', {});
};
SiYuanAPI.prototype.getCloudRepoSnapshots = function (data) {
    return this.request('/api/repo/getCloudRepoSnapshots', data);
};
SiYuanAPI.prototype.removeCloudRepoTagSnapshot = function (data) {
    return this.request('/api/repo/removeCloudRepoTagSnapshot', data);
};
SiYuanAPI.prototype.uploadCloudSnapshot = function (data) {
    return this.request('/api/repo/uploadCloudSnapshot', data);
};
SiYuanAPI.prototype.downloadCloudSnapshot = function (data) {
    return this.request('/api/repo/downloadCloudSnapshot', data);
};
SiYuanAPI.prototype.diffRepoSnapshots = function (data) {
    return this.request('/api/repo/diffRepoSnapshots', data);
};
SiYuanAPI.prototype.openRepoSnapshotDoc = function (data) {
    return this.request('/api/repo/openRepoSnapshotDoc', data);
};
SiYuanAPI.prototype.getRepoFile = function (data) {
    return this.request('/api/repo/getRepoFile', data);
};
SiYuanAPI.prototype.setRepoIndexRetentionDays = function (data) {
    return this.request('/api/repo/setRepoIndexRetentionDays', data);
};
SiYuanAPI.prototype.setRetentionIndexesDaily = function (data) {
    return this.request('/api/repo/setRetentionIndexesDaily', data);
};
//# sourceMappingURL=index.js.map