import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.getBazaarPlugin = function (data) {
    return this.request('/api/bazaar/getBazaarPlugin', data);
};
SiYuanAPI.prototype.getInstalledPlugin = function (data) {
    return this.request('/api/bazaar/getInstalledPlugin', data);
};
SiYuanAPI.prototype.installBazaarPlugin = function (data) {
    return this.request('/api/bazaar/installBazaarPlugin', data);
};
SiYuanAPI.prototype.uninstallBazaarPlugin = function (data) {
    return this.request('/api/bazaar/uninstallBazaarPlugin', data);
};
SiYuanAPI.prototype.getBazaarWidget = function (data) {
    return this.request('/api/bazaar/getBazaarWidget', data);
};
SiYuanAPI.prototype.getInstalledWidget = function (data) {
    return this.request('/api/bazaar/getInstalledWidget', data);
};
SiYuanAPI.prototype.installBazaarWidget = function (data) {
    return this.request('/api/bazaar/installBazaarWidget', data);
};
SiYuanAPI.prototype.uninstallBazaarWidget = function (data) {
    return this.request('/api/bazaar/uninstallBazaarWidget', data);
};
SiYuanAPI.prototype.getBazaarIcon = function (data) {
    return this.request('/api/bazaar/getBazaarIcon', data);
};
SiYuanAPI.prototype.getInstalledIcon = function (data) {
    return this.request('/api/bazaar/getInstalledIcon', data);
};
SiYuanAPI.prototype.installBazaarIcon = function (data) {
    return this.request('/api/bazaar/installBazaarIcon', data);
};
SiYuanAPI.prototype.uninstallBazaarIcon = function (data) {
    return this.request('/api/bazaar/uninstallBazaarIcon', data);
};
SiYuanAPI.prototype.getBazaarTemplate = function (data) {
    return this.request('/api/bazaar/getBazaarTemplate', data);
};
SiYuanAPI.prototype.getInstalledTemplate = function (data) {
    return this.request('/api/bazaar/getInstalledTemplate', data);
};
SiYuanAPI.prototype.installBazaarTemplate = function (data) {
    return this.request('/api/bazaar/installBazaarTemplate', data);
};
SiYuanAPI.prototype.uninstallBazaarTemplate = function (data) {
    return this.request('/api/bazaar/uninstallBazaarTemplate', data);
};
SiYuanAPI.prototype.getBazaarTheme = function (data) {
    return this.request('/api/bazaar/getBazaarTheme', data);
};
SiYuanAPI.prototype.getInstalledTheme = function (data) {
    return this.request('/api/bazaar/getInstalledTheme', data);
};
SiYuanAPI.prototype.installBazaarTheme = function (data) {
    return this.request('/api/bazaar/installBazaarTheme', data);
};
SiYuanAPI.prototype.uninstallBazaarTheme = function (data) {
    return this.request('/api/bazaar/uninstallBazaarTheme', data);
};
SiYuanAPI.prototype.getBazaarPackageREAME = function (data) {
    return this.request('/api/bazaar/getBazaarPackageREAME', data);
};
SiYuanAPI.prototype.getUpdatedPackage = function (data) {
    return this.request('/api/bazaar/getUpdatedPackage', data);
};
SiYuanAPI.prototype.batchUpdatePackage = function (data) {
    return this.request('/api/bazaar/batchUpdatePackage', data);
};
//# sourceMappingURL=index.js.map