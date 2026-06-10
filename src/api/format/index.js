import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.autoSpace = function (data) {
    return this.request('/api/format/autoSpace', data);
};
SiYuanAPI.prototype.netImg2LocalAssets = function (data) {
    return this.request('/api/format/netImg2LocalAssets', data);
};
SiYuanAPI.prototype.netAssets2LocalAssets = function (data) {
    return this.request('/api/format/netAssets2LocalAssets', data);
};
//# sourceMappingURL=index.js.map