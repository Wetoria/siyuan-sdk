import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.renderAttributeView = function (data) {
    return this.request('/api/av/renderAttributeView', data);
};
SiYuanAPI.prototype.renderHistoryAttributeView = function (data) {
    return this.request('/api/av/renderHistoryAttributeView', data);
};
SiYuanAPI.prototype.renderSnapshotAttributeView = function (data) {
    return this.request('/api/av/renderSnapshotAttributeView', data);
};
SiYuanAPI.prototype.getAttributeViewKeys = function (data) {
    return this.request('/api/av/getAttributeViewKeys', data);
};
SiYuanAPI.prototype.setAttributeViewBlockAttr = function (data) {
    return this.request('/api/av/setAttributeViewBlockAttr', data);
};
SiYuanAPI.prototype.batchSetAttributeViewBlockAttrs = function (data) {
    return this.request('/api/av/batchSetAttributeViewBlockAttrs', data);
};
SiYuanAPI.prototype.searchAttributeView = function (data) {
    return this.request('/api/av/searchAttributeView', data);
};
SiYuanAPI.prototype.getAttributeView = function (data) {
    return this.request('/api/av/getAttributeView', data);
};
SiYuanAPI.prototype.searchAttributeViewRelationKey = function (data) {
    return this.request('/api/av/searchAttributeViewRelationKey', data);
};
SiYuanAPI.prototype.searchAttributeViewNonRelationKey = function (data) {
    return this.request('/api/av/searchAttributeViewNonRelationKey', data);
};
SiYuanAPI.prototype.searchAttributeViewRollupDestKeys = function (data) {
    return this.request('/api/av/searchAttributeViewRollupDestKeys', data);
};
SiYuanAPI.prototype.getAttributeViewFilterSort = function (data) {
    return this.request('/api/av/getAttributeViewFilterSort', data);
};
SiYuanAPI.prototype.addAttributeViewKey = function (data) {
    return this.request('/api/av/addAttributeViewKey', data);
};
SiYuanAPI.prototype.removeAttributeViewKey = function (data) {
    return this.request('/api/av/removeAttributeViewKey', data);
};
SiYuanAPI.prototype.sortAttributeViewViewKey = function (data) {
    return this.request('/api/av/sortAttributeViewViewKey', data);
};
SiYuanAPI.prototype.sortAttributeViewKey = function (data) {
    return this.request('/api/av/sortAttributeViewKey', data);
};
SiYuanAPI.prototype.addAttributeViewBlocks = function (data) {
    return this.request('/api/av/addAttributeViewBlocks', data);
};
SiYuanAPI.prototype.removeAttributeViewBlocks = function (data) {
    return this.request('/api/av/removeAttributeViewBlocks', data);
};
SiYuanAPI.prototype.getAttributeViewPrimaryKeyValues = function (data) {
    return this.request('/api/av/getAttributeViewPrimaryKeyValues', data);
};
SiYuanAPI.prototype.setDatabaseBlockView = function (data) {
    return this.request('/api/av/setDatabaseBlockView', data);
};
SiYuanAPI.prototype.getMirrorDatabaseBlocks = function (data) {
    return this.request('/api/av/getMirrorDatabaseBlocks', data);
};
SiYuanAPI.prototype.getAttributeViewKeysByAvID = function (data) {
    return this.request('/api/av/getAttributeViewKeysByAvID', data);
};
SiYuanAPI.prototype.getAttributeViewKeysByID = function (data) {
    return this.request('/api/av/getAttributeViewKeysByID', data);
};
SiYuanAPI.prototype.duplicateAttributeViewBlock = function (data) {
    return this.request('/api/av/duplicateAttributeViewBlock', data);
};
SiYuanAPI.prototype.appendAttributeViewDetachedBlocksWithValues = function (data) {
    return this.request('/api/av/appendAttributeViewDetachedBlocksWithValues', data);
};
SiYuanAPI.prototype.getCurrentAttrViewImages = function (data) {
    return this.request('/api/av/getCurrentAttrViewImages', data);
};
SiYuanAPI.prototype.changeAttrViewLayout = function (data) {
    return this.request('/api/av/changeAttrViewLayout', data);
};
SiYuanAPI.prototype.setAttrViewGroup = function (data) {
    return this.request('/api/av/setAttrViewGroup', data);
};
SiYuanAPI.prototype.batchReplaceAttributeViewBlocks = function (data) {
    return this.request('/api/av/batchReplaceAttributeViewBlocks', data);
};
SiYuanAPI.prototype.getAttributeViewAddingBlockDefaultValues = function (data) {
    return this.request('/api/av/getAttributeViewAddingBlockDefaultValues', data);
};
SiYuanAPI.prototype.getAttributeViewBoundBlockIDsByItemIDs = function (data) {
    return this.request('/api/av/getAttributeViewBoundBlockIDsByItemIDs', data);
};
SiYuanAPI.prototype.getAttributeViewItemIDsByBoundIDs = function (data) {
    return this.request('/api/av/getAttributeViewItemIDsByBoundIDs', data);
};
SiYuanAPI.prototype.getAttributeViewColumns = async function (data) {
    const result = await this.renderAttributeView({
        id: data.avID,
        viewID: data.viewID,
    });
    if (result.code !== 0) {
        throw new Error(result.msg);
    }
    const columns = result.data.view.columns;
    return columns;
};
//# sourceMappingURL=index.js.map