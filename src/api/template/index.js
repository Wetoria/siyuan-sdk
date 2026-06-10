import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.render = function (id, path) {
    return this.request('/api/template/render', {
        id,
        path,
    });
};
SiYuanAPI.prototype.renderSprig = function (template) {
    return this.request('/api/template/renderSprig', { template });
};
SiYuanAPI.prototype.docSaveAsTemplate = function (data) {
    return this.request('/api/template/docSaveAsTemplate', data);
};
//# sourceMappingURL=index.js.map