import { SiYuanAPI } from '../../core/index.js';
// 实现部分
SiYuanAPI.prototype.getDynamicIcon = function (params) {
    const query = new URLSearchParams();
    if (params.type)
        query.set('type', params.type);
    if (params.color)
        query.set('color', params.color);
    if (params.date)
        query.set('date', params.date);
    if (params.lang)
        query.set('lang', params.lang);
    if (params.weekdayType)
        query.set('weekdayType', params.weekdayType);
    return this.request(`/api/icon/getDynamicIcon?${query.toString()}`, {}, { method: 'GET' });
};
//# sourceMappingURL=index.js.map