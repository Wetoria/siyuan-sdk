import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.lsNotebooks = function () {
    return this.request('/api/notebook/lsNotebooks', '');
};
SiYuanAPI.prototype.openNotebook = function (notebook) {
    return this.request('/api/notebook/openNotebook', { notebook });
};
SiYuanAPI.prototype.closeNotebook = function (notebook) {
    return this.request('/api/notebook/closeNotebook', { notebook });
};
SiYuanAPI.prototype.renameNotebook = function (notebook, name) {
    return this.request('/api/notebook/renameNotebook', {
        notebook,
        name,
    });
};
SiYuanAPI.prototype.createNotebook = function (name) {
    return this.request('/api/notebook/createNotebook', { name });
};
SiYuanAPI.prototype.removeNotebook = function (notebook) {
    return this.request('/api/notebook/removeNotebook', { notebook });
};
SiYuanAPI.prototype.getNotebookConf = function (notebook) {
    return this.request('/api/notebook/getNotebookConf', { notebook });
};
SiYuanAPI.prototype.setNotebookConf = function (notebook, conf) {
    return this.request('/api/notebook/setNotebookConf', {
        notebook,
        conf,
    });
};
SiYuanAPI.prototype.changeSortNotebook = function (data) {
    return this.request('/api/notebook/changeSortNotebook', data);
};
SiYuanAPI.prototype.setNotebookIcon = function (data) {
    return this.request('/api/notebook/setNotebookIcon', data);
};
SiYuanAPI.prototype.getNotebookInfo = function (data) {
    return this.request('/api/notebook/getNotebookInfo', data);
};
//# sourceMappingURL=index.js.map