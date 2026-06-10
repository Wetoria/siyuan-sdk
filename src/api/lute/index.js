import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.spinBlockDOM = function (data) {
    return this.request('/api/lute/spinBlockDOM', data);
};
SiYuanAPI.prototype.html2BlockDOM = function (data) {
    return this.request('/api/lute/html2BlockDOM', data);
};
SiYuanAPI.prototype.copyStdMarkdown = function (data) {
    return this.request('/api/lute/copyStdMarkdown', data);
};
//# sourceMappingURL=index.js.map