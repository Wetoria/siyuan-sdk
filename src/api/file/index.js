import { SiYuanAPI, } from '../../core/index.js';
SiYuanAPI.prototype.getFile = async function (path) {
    try {
        const res = await this.request('/api/file/getFile', { path });
        if (res.code === 404) {
            return res;
        }
        else {
            return {
                code: 0,
                data: res,
            };
        }
    }
    catch {
        return {
            code: -1,
            msg: 'Failed to get file',
            data: null,
        };
    }
};
SiYuanAPI.prototype.putFile = function (path, isDir, file) {
    const form = new FormData();
    form.append('path', path);
    form.append('isDir', isDir.toString());
    form.append('file', file);
    return this.request('/api/file/putFile', form);
};
SiYuanAPI.prototype.removeFile = function (path) {
    return this.request('/api/file/removeFile', { path });
};
SiYuanAPI.prototype.readDir = function (path) {
    return this.request('/api/file/readDir', { path });
};
SiYuanAPI.prototype.copyFile = function (data) {
    return this.request('/api/file/copyFile', data);
};
SiYuanAPI.prototype.globalCopyFiles = function (data) {
    return this.request('/api/file/globalCopyFiles', data);
};
SiYuanAPI.prototype.renameFile = function (data) {
    return this.request('/api/file/renameFile', data);
};
SiYuanAPI.prototype.getUniqueFilename = function (data) {
    return this.request('/api/file/getUniqueFilename', data);
};
//# sourceMappingURL=index.js.map