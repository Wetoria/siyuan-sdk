import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.login = function (data) {
    return this.request('/api/account/login', data);
};
SiYuanAPI.prototype.checkActivationcode = function (data) {
    return this.request('/api/account/checkActivationcode', data);
};
SiYuanAPI.prototype.useActivationcode = function (data) {
    return this.request('/api/account/useActivationcode', data);
};
SiYuanAPI.prototype.deactivate = function () {
    return this.request('/api/account/deactivate', {});
};
SiYuanAPI.prototype.startFreeTrial = function () {
    return this.request('/api/account/startFreeTrial', {});
};
//# sourceMappingURL=index.js.map