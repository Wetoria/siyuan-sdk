import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.flushTransactions = function () {
    return this.request('/api/sqlite/flushTransaction', {});
};
//# sourceMappingURL=index.js.map