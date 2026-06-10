import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.getCloudSpace = function () {
    return this.request('/api/cloud/getCloudSpace', {});
};
//# sourceMappingURL=index.js.map