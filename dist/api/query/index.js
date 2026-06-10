import { SiYuanAPI } from '../../core/index.js';
import { trimSqlBlank } from '../../utils/index.js';
SiYuanAPI.prototype.sql = function (stmt, options = {}) {
    const { trim = true, } = options;
    const finalStmt = trim ? trimSqlBlank(stmt) : stmt;
    return this.request('/api/query/sql', {
        stmt: finalStmt,
    });
};
//# sourceMappingURL=index.js.map