import { SiYuanAPI, } from '../../core/index.js';
SiYuanAPI.prototype.zip = function (data) {
    return this.request('/api/archive/zip', data);
};
SiYuanAPI.prototype.unzip = function (zipPath, path) {
    return this.request('/api/archive/unzip', {
        zipPath,
        path,
    });
};
//# sourceMappingURL=index.js.map