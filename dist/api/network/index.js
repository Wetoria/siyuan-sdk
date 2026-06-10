import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.forwardProxy = function (url, method = 'GET', payload = {}, headers = [], timeout = 7000, contentType = 'text/html') {
    return this.request('/api/network/forwardProxy', {
        url,
        method,
        timeout,
        contentType,
        headers,
        payload,
    });
};
//# sourceMappingURL=index.js.map