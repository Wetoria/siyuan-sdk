import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.getDocOutline = function (data) {
    return this.request('/api/outline/getDocOutline', data);
};
//# sourceMappingURL=index.js.map