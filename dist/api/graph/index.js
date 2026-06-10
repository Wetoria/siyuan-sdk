import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.resetGraph = function () {
    return this.request('/api/graph/resetGraph', {});
};
SiYuanAPI.prototype.resetLocalGraph = function () {
    return this.request('/api/graph/resetLocalGraph', {});
};
SiYuanAPI.prototype.getGraph = function (data) {
    return this.request('/api/graph/getGraph', data);
};
SiYuanAPI.prototype.getLocalGraph = function (data) {
    return this.request('/api/graph/getLocalGraph', data);
};
//# sourceMappingURL=index.js.map