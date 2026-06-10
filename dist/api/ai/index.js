import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.chatGPT = function (data) {
    return this.request('/api/ai/chatGPT', data);
};
SiYuanAPI.prototype.chatGPTWithAction = function (data) {
    return this.request('/api/ai/chatGPTWithAction', data);
};
//# sourceMappingURL=index.js.map