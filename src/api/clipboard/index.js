import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.readFilePaths = function () {
    return this.request('/api/clipboard/readFilePaths', {});
};
//# sourceMappingURL=index.js.map