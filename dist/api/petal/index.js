import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.loadPetals = function (data) {
    return this.request('/api/petal/loadPetals', data);
};
SiYuanAPI.prototype.setPetalEnabled = function (data) {
    return this.request('/api/petal/setPetalEnabled', data);
};
//# sourceMappingURL=index.js.map