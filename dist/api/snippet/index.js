import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.getSnippet = function (data) {
    return this.request('/api/snippet/getSnippet', data);
};
SiYuanAPI.prototype.setSnippet = function (data) {
    return this.request('/api/snippet/setSnippet', data);
};
SiYuanAPI.prototype.removeSnippet = function (data) {
    return this.request('/api/snippet/removeSnippet', data);
};
//# sourceMappingURL=index.js.map