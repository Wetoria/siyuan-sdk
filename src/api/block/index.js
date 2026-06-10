import { SiYuanAPI } from '../../core/index.js';
SiYuanAPI.prototype.insertBlock = function (data) {
    return this.request('/api/block/insertBlock', {
        ...data,
        dataType: data.dataType || 'markdown',
    });
};
SiYuanAPI.prototype.batchInsertBlock = function (data) {
    return this.request('/api/block/batchInsertBlock', data);
};
SiYuanAPI.prototype.prependBlock = function (dataType, data, parentID) {
    return this.request('/api/block/prependBlock', {
        dataType,
        data,
        parentID,
    });
};
SiYuanAPI.prototype.batchPrependBlock = function (data) {
    return this.request('/api/block/batchPrependBlock', data);
};
SiYuanAPI.prototype.appendBlock = function (dataType = 'markdown', data, parentID) {
    return this.request('/api/block/appendBlock', {
        dataType,
        data,
        parentID,
    });
};
SiYuanAPI.prototype.batchAppendBlock = function (data) {
    return this.request('/api/block/batchAppendBlock', data);
};
SiYuanAPI.prototype.appendMDToBlock = function (params) {
    return this.appendBlock('markdown', params.data, params.parentID);
};
SiYuanAPI.prototype.appendMDToBlockAndGetBlockId = async function (params) {
    const res = await this.appendBlock('markdown', params.data, params.parentID);
    return {
        code: res.code,
        msg: res.msg,
        data: res.data?.[0]?.doOperations?.[0]?.id,
    };
};
SiYuanAPI.prototype.appendDailyNoteBlock = function (dataType, data, notebook) {
    return this.request('/api/block/appendDailyNoteBlock', {
        dataType,
        data,
        notebook,
    });
};
SiYuanAPI.prototype.prependDailyNoteBlock = function (dataType, data, notebook) {
    return this.request('/api/block/prependDailyNoteBlock', {
        dataType,
        data,
        notebook,
    });
};
SiYuanAPI.prototype.updateBlock = function (dataType, data, id) {
    return this.request('/api/block/updateBlock', {
        dataType,
        data,
        id,
    });
};
SiYuanAPI.prototype.batchUpdateBlock = function (blocks) {
    return this.request('/api/block/batchUpdateBlock', { blocks });
};
SiYuanAPI.prototype.deleteBlock = function (id) {
    return this.request('/api/block/deleteBlock', { id });
};
SiYuanAPI.prototype.moveBlock = function (id, previousID, parentID) {
    return this.request('/api/block/moveBlock', {
        id,
        previousID,
        parentID,
    });
};
SiYuanAPI.prototype.moveOutlineHeading = function (data) {
    return this.request('/api/block/moveOutlineHeading', data);
};
SiYuanAPI.prototype.foldBlock = function (id) {
    return this.request('/api/block/foldBlock', { id });
};
SiYuanAPI.prototype.unfoldBlock = function (id) {
    return this.request('/api/block/unfoldBlock', { id });
};
SiYuanAPI.prototype.getBlockKramdown = function (id) {
    return this.request('/api/block/getBlockKramdown', { id });
};
SiYuanAPI.prototype.getChildBlocks = function (id) {
    return this.request('/api/block/getChildBlocks', { id });
};
SiYuanAPI.prototype.getBlocksIndexes = function (ids) {
    return this.request('/api/block/getBlocksIndexes', { ids });
};
SiYuanAPI.prototype.transferBlockRef = function (fromID, toID, refIDs) {
    return this.request('/api/block/transferBlockRef', {
        fromID,
        toID,
        refIDs,
    });
};
SiYuanAPI.prototype.getBlockInfo = async function (id) {
    const res = await this.sql(`select * from blocks where id = '${id}'`);
    console.log('getBlockInfo', res);
    const isInvalid = Array.isArray(res);
    return !isInvalid
        ? {
            code: res.code,
            msg: res.msg,
            data: res.data?.[0],
        }
        : res[0];
};
SiYuanAPI.prototype.getBlockDOM = function (id) {
    return this.request('/api/block/getBlockDOM', { id });
};
SiYuanAPI.prototype.getBlockDOMs = function (ids) {
    return this.request('/api/block/getBlockDOMs', { ids });
};
SiYuanAPI.prototype.getBlockDOMWithEmbed = function (id) {
    return this.request('/api/block/getBlockDOMWithEmbed', { id });
};
SiYuanAPI.prototype.getBlockDOMsWithEmbed = function (ids) {
    return this.request('/api/block/getBlockDOMsWithEmbed', { ids });
};
SiYuanAPI.prototype.getTailChildBlocks = function (data) {
    return this.request('/api/block/getTailChildBlocks', data);
};
SiYuanAPI.prototype.getBlockBreadcrumb = function (data) {
    return this.request('/api/block/getBlockBreadcrumb', data);
};
SiYuanAPI.prototype.getBlockIndex = function (id) {
    return this.request('/api/block/getBlockIndex', { id });
};
SiYuanAPI.prototype.getRefIDs = function (data) {
    return this.request('/api/block/getRefIDs', data);
};
SiYuanAPI.prototype.getRefIDsByFileAnnotationID = function (data) {
    return this.request('/api/block/getRefIDsByFileAnnotationID', data);
};
SiYuanAPI.prototype.getBlockDefIDsByRefText = function (data) {
    return this.request('/api/block/getBlockDefIDsByRefText', data);
};
SiYuanAPI.prototype.getRefText = function (id) {
    return this.request('/api/block/getRefText', { id });
};
SiYuanAPI.prototype.getDOMText = function (data) {
    return this.request('/api/block/getDOMText', data);
};
SiYuanAPI.prototype.getTreeStat = function (data) {
    return this.request('/api/block/getTreeStat', data);
};
SiYuanAPI.prototype.getBlocksWordCount = function (data) {
    return this.request('/api/block/getBlocksWordCount', data);
};
SiYuanAPI.prototype.getContentWordCount = function (data) {
    return this.request('/api/block/getContentWordCount', data);
};
SiYuanAPI.prototype.getRecentUpdatedBlocks = function () {
    return this.request('/api/block/getRecentUpdatedBlocks', {});
};
SiYuanAPI.prototype.getDocInfo = function (id) {
    return this.request('/api/block/getDocInfo', { id });
};
SiYuanAPI.prototype.getDocsInfo = function (data) {
    return this.request('/api/block/getDocsInfo', data);
};
SiYuanAPI.prototype.checkBlockExist = function (id) {
    return this.request('/api/block/checkBlockExist', { id });
};
SiYuanAPI.prototype.getUnfoldedParentID = function (id) {
    return this.request('/api/block/getUnfoldedParentID', { id });
};
SiYuanAPI.prototype.checkBlockFold = function (id) {
    return this.request('/api/block/checkBlockFold', { id });
};
SiYuanAPI.prototype.getHeadingLevelTransaction = function (data) {
    return this.request('/api/block/getHeadingLevelTransaction', data);
};
SiYuanAPI.prototype.getHeadingDeleteTransaction = function (id) {
    return this.request('/api/block/getHeadingDeleteTransaction', { id });
};
SiYuanAPI.prototype.getHeadingInsertTransaction = function (id) {
    return this.request('/api/block/getHeadingInsertTransaction', { id });
};
SiYuanAPI.prototype.getHeadingChildrenIDs = function (id) {
    return this.request('/api/block/getHeadingChildrenIDs', { id });
};
SiYuanAPI.prototype.getHeadingChildrenDOM = function (data) {
    return this.request('/api/block/getHeadingChildrenDOM', data);
};
SiYuanAPI.prototype.appendHeadingChildren = function (data) {
    return this.request('/api/block/appendHeadingChildren', data);
};
SiYuanAPI.prototype.getBlockSiblingID = function (id) {
    return this.request('/api/block/getBlockSiblingID', { id });
};
SiYuanAPI.prototype.getBlockRelevantIDs = function (id) {
    return this.request('/api/block/getBlockRelevantIDs', { id });
};
SiYuanAPI.prototype.getBlockTreeInfos = function (ids) {
    return this.request('/api/block/getBlockTreeInfos', { ids });
};
SiYuanAPI.prototype.checkBlockRef = function (data) {
    return this.request('/api/block/checkBlockRef', data);
};
SiYuanAPI.prototype.setBlockReminder = function (data) {
    return this.request('/api/block/setBlockReminder', data);
};
SiYuanAPI.prototype.swapBlockRef = function (data) {
    return this.request('/api/block/swapBlockRef', data);
};
//# sourceMappingURL=index.js.map