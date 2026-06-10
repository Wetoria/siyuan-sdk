import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.upload = function (assetsDirPath, files) {
    const form = new FormData();
    form.append('assetsDirPath', assetsDirPath);
    for (const file of files) {
        form.append('file[]', file);
    }
    return this.request('/api/asset/upload', form);
};
SiYuanAPI.prototype.uploadCloud = function (data) {
    return this.request('/api/asset/uploadCloud', data);
};
SiYuanAPI.prototype.insertLocalAssets = function (data) {
    return this.request('/api/asset/insertLocalAssets', data);
};
SiYuanAPI.prototype.resolveAssetPath = function (data) {
    return this.request('/api/asset/resolveAssetPath', data);
};
SiYuanAPI.prototype.setFileAnnotation = function (data) {
    return this.request('/api/asset/setFileAnnotation', data);
};
SiYuanAPI.prototype.getFileAnnotation = function (data) {
    return this.request('/api/asset/getFileAnnotation', data);
};
SiYuanAPI.prototype.getUnusedAssets = function () {
    return this.request('/api/asset/getUnusedAssets', {});
};
SiYuanAPI.prototype.getMissingAssets = function () {
    return this.request('/api/asset/getMissingAssets', {});
};
SiYuanAPI.prototype.removeUnusedAsset = function (data) {
    return this.request('/api/asset/removeUnusedAsset', data);
};
SiYuanAPI.prototype.removeUnusedAssets = function () {
    return this.request('/api/asset/removeUnusedAssets', {});
};
SiYuanAPI.prototype.getDocImageAssets = function (data) {
    return this.request('/api/asset/getDocImageAssets', data);
};
SiYuanAPI.prototype.getDocAssets = function (data) {
    return this.request('/api/asset/getDocAssets', data);
};
SiYuanAPI.prototype.renameAsset = function (data) {
    return this.request('/api/asset/renameAsset', data);
};
SiYuanAPI.prototype.getImageOCRText = function (data) {
    return this.request('/api/asset/getImageOCRText', data);
};
SiYuanAPI.prototype.setImageOCRText = function (data) {
    return this.request('/api/asset/setImageOCRText', data);
};
SiYuanAPI.prototype.ocr = function (data) {
    return this.request('/api/asset/ocr', data);
};
SiYuanAPI.prototype.fullReindexAssetContent = function () {
    return this.request('/api/asset/fullReindexAssetContent', {});
};
SiYuanAPI.prototype.statAsset = function (data) {
    return this.request('/api/asset/statAsset', data);
};
//# sourceMappingURL=index.js.map