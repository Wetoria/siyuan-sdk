import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.createRiffDeck = function (data) {
    return this.request('/api/riff/createRiffDeck', data);
};
SiYuanAPI.prototype.renameRiffDeck = function (data) {
    return this.request('/api/riff/renameRiffDeck', data);
};
SiYuanAPI.prototype.removeRiffDeck = function (data) {
    return this.request('/api/riff/removeRiffDeck', data);
};
SiYuanAPI.prototype.getRiffDecks = function () {
    return this.request('/api/riff/getRiffDecks', {});
};
SiYuanAPI.prototype.addRiffCards = function (data) {
    return this.request('/api/riff/addRiffCards', data);
};
SiYuanAPI.prototype.removeRiffCards = function (data) {
    return this.request('/api/riff/removeRiffCards', data);
};
SiYuanAPI.prototype.getRiffDueCards = function (data) {
    return this.request('/api/riff/getRiffDueCards', data);
};
SiYuanAPI.prototype.getTreeRiffDueCards = function (data) {
    return this.request('/api/riff/getTreeRiffDueCards', data);
};
SiYuanAPI.prototype.getNotebookRiffDueCards = function (data) {
    return this.request('/api/riff/getNotebookRiffDueCards', data);
};
SiYuanAPI.prototype.reviewRiffCard = function (data) {
    return this.request('/api/riff/reviewRiffCard', data);
};
SiYuanAPI.prototype.skipReviewRiffCard = function (data) {
    return this.request('/api/riff/skipReviewRiffCard', data);
};
SiYuanAPI.prototype.getRiffCards = function (data) {
    return this.request('/api/riff/getRiffCards', data);
};
SiYuanAPI.prototype.getTreeRiffCards = function (data) {
    return this.request('/api/riff/getTreeRiffCards', data);
};
SiYuanAPI.prototype.getNotebookRiffCards = function (data) {
    return this.request('/api/riff/getNotebookRiffCards', data);
};
SiYuanAPI.prototype.resetRiffCards = function (data) {
    return this.request('/api/riff/resetRiffCards', data);
};
SiYuanAPI.prototype.batchSetRiffCardsDueTime = function (data) {
    return this.request('/api/riff/batchSetRiffCardsDueTime', data);
};
SiYuanAPI.prototype.getRiffCardsByBlockIDs = function (data) {
    return this.request('/api/riff/getRiffCardsByBlockIDs', data);
};
//# sourceMappingURL=index.js.map