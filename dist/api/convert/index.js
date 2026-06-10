import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.pandoc = function (args) {
    return this.request('/api/convert/pandoc', { args });
};
//# sourceMappingURL=index.js.map