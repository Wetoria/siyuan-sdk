import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.createDailyNote = function (notebook) {
    return this.request('/api/filetree/createDailyNote', { notebook });
};
SiYuanAPI.prototype.createDocWithMd = function (notebook, path, markdown) {
    return this.request('/api/filetree/createDocWithMd', {
        notebook,
        path,
        markdown,
    });
};
SiYuanAPI.prototype.renameDoc = function (notebook, path, title) {
    return this.request('/api/filetree/renameDoc', {
        doc: notebook,
        path,
        title,
    });
};
SiYuanAPI.prototype.removeDoc = function (notebook, path) {
    return this.request('/api/filetree/removeDoc', {
        notebook,
        path,
    });
};
SiYuanAPI.prototype.moveDocs = function (fromPaths, toNotebook, toPath) {
    return this.request('/api/filetree/moveDocs', {
        fromPaths,
        toNotebook,
        toPath,
    });
};
SiYuanAPI.prototype.getHPathByPath = function (notebook, path) {
    return this.request('/api/filetree/getHPathByPath', {
        notebook,
        path,
    });
};
SiYuanAPI.prototype.getHPathByID = function (id) {
    return this.request('/api/filetree/getHPathByID', { id });
};
SiYuanAPI.prototype.getIDsByHPath = function (notebook, path) {
    return this.request('/api/filetree/getIDsByHPath', {
        notebook,
        path,
    });
};
SiYuanAPI.prototype.searchDocs = function (data) {
    return this.request('/api/filetree/searchDocs', data);
};
SiYuanAPI.prototype.listDocsByPath = function (data) {
    return this.request('/api/filetree/listDocsByPath', data);
};
SiYuanAPI.prototype.getDoc = function (data) {
    return this.request('/api/filetree/getDoc', data);
};
SiYuanAPI.prototype.getDocCreateSavePath = function (data) {
    return this.request('/api/filetree/getDocCreateSavePath', data);
};
SiYuanAPI.prototype.getRefCreateSavePath = function (data) {
    return this.request('/api/filetree/getRefCreateSavePath', data);
};
SiYuanAPI.prototype.changeSort = function (data) {
    return this.request('/api/filetree/changeSort', data);
};
SiYuanAPI.prototype.createDoc = function (data) {
    return this.request('/api/filetree/createDoc', data);
};
SiYuanAPI.prototype.renameDocByID = function (data) {
    return this.request('/api/filetree/renameDocByID', data);
};
SiYuanAPI.prototype.removeDocByID = function (id) {
    return this.request('/api/filetree/removeDocByID', { id });
};
SiYuanAPI.prototype.removeDocs = function (data) {
    return this.request('/api/filetree/removeDocs', data);
};
SiYuanAPI.prototype.moveDocsByID = function (data) {
    return this.request('/api/filetree/moveDocsByID', data);
};
SiYuanAPI.prototype.duplicateDoc = function (data) {
    return this.request('/api/filetree/duplicateDoc', data);
};
SiYuanAPI.prototype.getHPathsByPaths = function (data) {
    return this.request('/api/filetree/getHPathsByPaths', data);
};
SiYuanAPI.prototype.getPathByID = function (id) {
    return this.request('/api/filetree/getPathByID', { id });
};
SiYuanAPI.prototype.getFullHPathByID = function (id) {
    return this.request('/api/filetree/getFullHPathByID', { id });
};
SiYuanAPI.prototype.doc2Heading = function (data) {
    return this.request('/api/filetree/doc2Heading', data);
};
SiYuanAPI.prototype.heading2Doc = function (data) {
    return this.request('/api/filetree/heading2Doc', data);
};
SiYuanAPI.prototype.li2Doc = function (data) {
    return this.request('/api/filetree/li2Doc', data);
};
SiYuanAPI.prototype.upsertIndexes = function (data) {
    return this.request('/api/filetree/upsertIndexes', data);
};
SiYuanAPI.prototype.removeIndexes = function (data) {
    return this.request('/api/filetree/removeIndexes', data);
};
SiYuanAPI.prototype.listDocTree = function (data) {
    return this.request('/api/filetree/listDocTree', data);
};
SiYuanAPI.prototype.moveLocalShorthands = function (data) {
    return this.request('/api/filetree/moveLocalShorthands', data);
};
SiYuanAPI.prototype.refreshFiletree = function () {
    return this.request('/api/filetree/refreshFiletree', {});
};
//# sourceMappingURL=index.js.map