import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.importStdMd = function (data) {
    return this.request('/api/import/importStdMd', data);
};
SiYuanAPI.prototype.importZipMd = function (file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.request('/api/import/importZipMd', formData);
};
SiYuanAPI.prototype.importData = function (file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.request('/api/import/importData', formData);
};
SiYuanAPI.prototype.importSY = function (file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.request('/api/import/importSY', formData);
};
//# sourceMappingURL=index.js.map