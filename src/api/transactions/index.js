import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.performTransactions = function (data) {
    return this.request('/api/transactions', data);
};
//# sourceMappingURL=index.js.map