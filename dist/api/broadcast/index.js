import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.broadcastPublish = function (formData) {
    return this.request('/api/broadcast/publish', formData);
};
SiYuanAPI.prototype.postMessage = function (data) {
    return this.request('/api/broadcast/postMessage', data);
};
SiYuanAPI.prototype.getChannels = function () {
    return this.request('/api/broadcast/getChannels', {});
};
SiYuanAPI.prototype.getChannelInfo = function (data) {
    return this.request('/api/broadcast/getChannelInfo', data);
};
//# sourceMappingURL=index.js.map