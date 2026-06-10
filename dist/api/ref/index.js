import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.refreshBacklink = function (data) {
    return this.request('/api/ref/refreshBacklink', data);
};
SiYuanAPI.prototype.getBacklink = function (data) {
    return this.request('/api/ref/getBacklink', data);
};
SiYuanAPI.prototype.getBacklink2 = function (data) {
    return this.request('/api/ref/getBacklink2', data);
};
SiYuanAPI.prototype.getBacklinkDoc = function (data) {
    return this.request('/api/ref/getBacklinkDoc', data);
};
SiYuanAPI.prototype.getBackmentionDoc = function (data) {
    return this.request('/api/ref/getBackmentionDoc', data);
};
//# sourceMappingURL=index.js.map