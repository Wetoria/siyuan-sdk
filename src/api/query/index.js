import { SiYuanAPI, } from '../../core/index.js';
import { trimSqlBlank } from '../../utils/index.js';
// 实现部分
SiYuanAPI.prototype.sql = function (stmt, options = {}) {
    const { trim = true, } = options;
    const finalStmt = trim ? trimSqlBlank(stmt) : stmt;
    return this.request('/api/query/sql', {
        stmt: finalStmt,
    });
};
SiYuanAPI.prototype.getBlockByID = async function (blockId) {
    const res = await this.sql(`select * from blocks where id ='${blockId}'`);
    return {
        code: res.code,
        msg: res.msg,
        data: res.data?.[0] ?? null,
    };
};
//# sourceMappingURL=index.js.map