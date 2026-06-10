import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.bootProgress = function () {
    return this.request('/api/system/bootProgress', {}, { method: 'GET' });
};
SiYuanAPI.prototype.version = function () {
    return this.request('/api/system/version', {}, { method: 'GET' });
};
SiYuanAPI.prototype.currentTime = function () {
    return this.request('/api/system/currentTime', {});
};
SiYuanAPI.prototype.getCaptcha = function () {
    return this.request('/api/system/getCaptcha', {}, { method: 'GET' });
};
SiYuanAPI.prototype.uiproc = function (data) {
    return this.request(`/api/system/uiproc?pid=${data.pid}`, {});
};
SiYuanAPI.prototype.loginAuth = function (data) {
    return this.request('/api/system/loginAuth', data);
};
SiYuanAPI.prototype.logoutAuth = function () {
    return this.request('/api/system/logoutAuth', {});
};
SiYuanAPI.prototype.getEmojiConf = function () {
    return this.request('/api/system/getEmojiConf', {});
};
SiYuanAPI.prototype.setAPIToken = function (data) {
    return this.request('/api/system/setAPIToken', data);
};
SiYuanAPI.prototype.setAccessAuthCode = function (data) {
    return this.request('/api/system/setAccessAuthCode', data);
};
SiYuanAPI.prototype.setFollowSystemLockScreen = function (data) {
    return this.request('/api/system/setFollowSystemLockScreen', data);
};
SiYuanAPI.prototype.setNetworkServe = function (data) {
    return this.request('/api/system/setNetworkServe', data);
};
SiYuanAPI.prototype.setAutoLaunch = function (data) {
    return this.request('/api/system/setAutoLaunch', data);
};
SiYuanAPI.prototype.setDownloadInstallPkg = function (data) {
    return this.request('/api/system/setDownloadInstallPkg', data);
};
SiYuanAPI.prototype.setNetworkProxy = function (data) {
    return this.request('/api/system/setNetworkProxy', data);
};
SiYuanAPI.prototype.setWorkspaceDir = function (data) {
    return this.request('/api/system/setWorkspaceDir', data);
};
SiYuanAPI.prototype.getWorkspaces = function () {
    return this.request('/api/system/getWorkspaces', {});
};
SiYuanAPI.prototype.getMobileWorkspaces = function () {
    return this.request('/api/system/getMobileWorkspaces', {});
};
SiYuanAPI.prototype.checkWorkspaceDir = function (data) {
    return this.request('/api/system/checkWorkspaceDir', data);
};
SiYuanAPI.prototype.createWorkspaceDir = function (data) {
    return this.request('/api/system/createWorkspaceDir', data);
};
SiYuanAPI.prototype.removeWorkspaceDir = function (data) {
    return this.request('/api/system/removeWorkspaceDir', data);
};
SiYuanAPI.prototype.removeWorkspaceDirPhysically = function (data) {
    return this.request('/api/system/removeWorkspaceDirPhysically', data);
};
SiYuanAPI.prototype.setAppearanceMode = function (data) {
    return this.request('/api/system/setAppearanceMode', data);
};
SiYuanAPI.prototype.setUILayout = function (data) {
    return this.request('/api/system/setUILayout', data);
};
SiYuanAPI.prototype.getSysFonts = function () {
    return this.request('/api/system/getSysFonts', {});
};
SiYuanAPI.prototype.exit = function (data) {
    return this.request('/api/system/exit', data);
};
SiYuanAPI.prototype.getConf = function () {
    return this.request('/api/system/getConf', {});
};
SiYuanAPI.prototype.checkUpdate = function (data) {
    return this.request('/api/system/checkUpdate', data);
};
SiYuanAPI.prototype.exportLog = function () {
    return this.request('/api/system/exportLog', {});
};
SiYuanAPI.prototype.getChangelog = function () {
    return this.request('/api/system/getChangelog', {});
};
SiYuanAPI.prototype.getNetwork = function () {
    return this.request('/api/system/getNetwork', {});
};
SiYuanAPI.prototype.exportConf = function () {
    return this.request('/api/system/exportConf', {});
};
SiYuanAPI.prototype.importConf = function (formData) {
    return this.request('/api/system/importConf', formData);
};
SiYuanAPI.prototype.getWorkspaceInfo = function () {
    return this.request('/api/system/getWorkspaceInfo', {});
};
SiYuanAPI.prototype.reloadUI = function () {
    return this.request('/api/system/reloadUI', {});
};
SiYuanAPI.prototype.addMicrosoftDefenderExclusion = function () {
    return this.request('/api/system/addMicrosoftDefenderExclusion', {});
};
SiYuanAPI.prototype.ignoreAddMicrosoftDefenderExclusion = function () {
    return this.request('/api/system/ignoreAddMicrosoftDefenderExclusion', {});
};
SiYuanAPI.prototype.vacuumDataIndex = function () {
    return this.request('/api/system/vacuumDataIndex', {});
};
SiYuanAPI.prototype.rebuildDataIndex = function () {
    return this.request('/api/system/rebuildDataIndex', {});
};
//# sourceMappingURL=index.js.map