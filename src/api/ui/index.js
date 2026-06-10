import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.reloadUI = function () {
    return this.request('/api/ui/reloadUI', {});
};
SiYuanAPI.prototype.reloadIcon = function () {
    return this.request('/api/ui/reloadIcon', {});
};
SiYuanAPI.prototype.reloadAttributeView = function (data) {
    return this.request('/api/ui/reloadAttributeView', data);
};
SiYuanAPI.prototype.reloadProtyle = function (data) {
    return this.request('/api/ui/reloadProtyle', data);
};
SiYuanAPI.prototype.reloadFiletree = function () {
    return this.request('/api/ui/reloadFiletree', {});
};
SiYuanAPI.prototype.reloadTag = function () {
    return this.request('/api/ui/reloadTag', {});
};
//# sourceMappingURL=index.js.map