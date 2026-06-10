import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.extensionCopy = function (formData) {
    return this.request('/api/extension/copy', formData);
};
//# sourceMappingURL=index.js.map