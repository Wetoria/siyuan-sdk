import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.getShorthands = function (data) {
    return this.request('/api/inbox/getShorthands', data);
};
SiYuanAPI.prototype.getShorthand = function (data) {
    return this.request('/api/inbox/getShorthand', data);
};
SiYuanAPI.prototype.removeShorthands = function (data) {
    return this.request('/api/inbox/removeShorthands', data);
};
//# sourceMappingURL=index.js.map