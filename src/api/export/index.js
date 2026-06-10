// 实现
import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.exportNotebookMd = function (data) {
    return this.request('/api/export/exportNotebookMd', data);
};
SiYuanAPI.prototype.exportMds = function (data) {
    return this.request('/api/export/exportMds', data);
};
SiYuanAPI.prototype.exportMd = function (data) {
    return this.request('/api/export/exportMd', data);
};
SiYuanAPI.prototype.exportSY = function (data) {
    return this.request('/api/export/exportSY', data);
};
SiYuanAPI.prototype.exportNotebookSY = function (data) {
    return this.request('/api/export/exportNotebookSY', data);
};
SiYuanAPI.prototype.exportHTML = function (data) {
    return this.request('/api/export/exportHTML', data);
};
SiYuanAPI.prototype.exportPreviewHTML = function (data) {
    return this.request('/api/export/exportPreviewHTML', data);
};
SiYuanAPI.prototype.exportMdHTML = function (data) {
    return this.request('/api/export/exportMdHTML', data);
};
SiYuanAPI.prototype.exportDocx = function (data) {
    return this.request('/api/export/exportDocx', data);
};
SiYuanAPI.prototype.processPDF = function (data) {
    return this.request('/api/export/processPDF', data);
};
SiYuanAPI.prototype.exportPreview = function (data) {
    return this.request('/api/export/exportPreview', data);
};
SiYuanAPI.prototype.exportResources = function (paths, name) {
    return this.request('/api/export/exportResources', {
        paths,
        name,
    });
};
SiYuanAPI.prototype.exportAsFile = function (formData) {
    return this.request('/api/export/exportAsFile', formData);
};
SiYuanAPI.prototype.exportData = function () {
    return this.request('/api/export/exportData', {});
};
SiYuanAPI.prototype.exportDataInFolder = function (data) {
    return this.request('/api/export/exportDataInFolder', data);
};
SiYuanAPI.prototype.exportTempContent = function (data) {
    return this.request('/api/export/exportTempContent', data);
};
SiYuanAPI.prototype.exportBrowserHTML = function (data) {
    return this.request('/api/export/exportBrowserHTML', data);
};
SiYuanAPI.prototype.export2Liandi = function (data) {
    return this.request('/api/export/export2Liandi', data);
};
SiYuanAPI.prototype.exportReStructuredText = function (data) {
    return this.request('/api/export/exportReStructuredText', data);
};
SiYuanAPI.prototype.exportAsciiDoc = function (data) {
    return this.request('/api/export/exportAsciiDoc', data);
};
SiYuanAPI.prototype.exportTextile = function (data) {
    return this.request('/api/export/exportTextile', data);
};
SiYuanAPI.prototype.exportOPML = function (data) {
    return this.request('/api/export/exportOPML', data);
};
SiYuanAPI.prototype.exportOrgMode = function (data) {
    return this.request('/api/export/exportOrgMode', data);
};
SiYuanAPI.prototype.exportMediaWiki = function (data) {
    return this.request('/api/export/exportMediaWiki', data);
};
SiYuanAPI.prototype.exportODT = function (data) {
    return this.request('/api/export/exportODT', data);
};
SiYuanAPI.prototype.exportRTF = function (data) {
    return this.request('/api/export/exportRTF', data);
};
SiYuanAPI.prototype.exportEPUB = function (data) {
    return this.request('/api/export/exportEPUB', data);
};
SiYuanAPI.prototype.exportAttributeView = function (data) {
    return this.request('/api/export/exportAttributeView', data);
};
SiYuanAPI.prototype.exportMdContent = function (data) {
    return this.request('/api/export/exportMdContent', data);
};
//# sourceMappingURL=index.js.map