import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.pushMsg = function (msg, timeout = 7000) {
    return this.request('/api/notification/pushMsg', {
        msg,
        timeout,
    });
};
SiYuanAPI.prototype.pushErrMsg = function (msg, timeout = 7000) {
    return this.request('/api/notification/pushErrMsg', {
        msg,
        timeout,
    });
};
//# sourceMappingURL=index.js.map