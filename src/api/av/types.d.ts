import { SiyuanID } from '@wetoria/siyuan-sdk';
/** 字段类型 */
export type KeyType = "block" | "text" | "number" | "date" | "select" | "mSelect" | "url" | "email" | "phone" | "mAsset" | "template" | "created" | "updated" | "checkbox" | "relation" | "rollup" | "lineNumber";
/** 数字格式 */
export type NumberFormat = "" | "commas" | "percent" | "USD" | "CNY" | "EUR" | "GBP" | "JPY" | "RUB" | "INR" | "KRW" | "CAD" | "CHF" | "THB" | "AUD" | "HKD" | "TWD" | "MOP" | "SGD" | "NZD";
/** 日期格式 */
export type DateFormat = "" | "duration";
/** 资源类型 */
export type AssetType = "file" | "image";
/** 创建时间格式 */
export type CreatedFormat = "" | "duration";
/** 更新时间格式 */
export type UpdatedFormat = "" | "duration";
/** 块值 */
export interface IValueBlock {
    /** 绑定的块 ID，非绑定块时为空 */
    id?: string;
    icon?: string;
    content: string;
    created?: number;
    updated?: number;
}
/** 文本值 */
export interface IValueText {
    content: string;
}
/** 数字值 */
export interface IValueNumber {
    content: number;
    isNotEmpty: boolean;
    format: NumberFormat;
    formattedContent: string;
}
/** 日期值 */
export interface IValueDate {
    content: number;
    isNotEmpty: boolean;
    hasEndDate: boolean;
    isNotTime: boolean;
    content2: number;
    isNotEmpty2: boolean;
    formattedContent: string;
}
/** 选择值 */
export interface IValueSelect {
    content: string;
    /** 颜色 1-14 */
    color: string;
}
/** URL 值 */
export interface IValueURL {
    content: string;
}
/** Email 值 */
export interface IValueEmail {
    content: string;
}
/** 电话值 */
export interface IValuePhone {
    content: string;
}
/** 资源值 */
export interface IValueAsset {
    type: AssetType;
    name: string;
    content: string;
}
/** 模板值 */
export interface IValueTemplate {
    content: string;
}
/** 创建时间值 */
export interface IValueCreated {
    content: number;
    isNotEmpty: boolean;
    content2: number;
    isNotEmpty2: boolean;
    formattedContent: string;
}
/** 更新时间值 */
export interface IValueUpdated {
    content: number;
    isNotEmpty: boolean;
    content2: number;
    isNotEmpty2: boolean;
    formattedContent: string;
}
/** 复选框值 */
export interface IValueCheckbox {
    checked: boolean;
}
/** 关联值 */
export interface IValueRelation {
    blockIDs: string[];
    contents: IAVValue[];
}
/** 汇总值 */
export interface IValueRollup {
    contents: IAVValue[];
}
/** 属性视图值 */
export interface IAVValue {
    id?: string;
    /** 字段 ID */
    keyID?: string;
    /** 项目 ID */
    blockID?: string;
    /** 字段类型 */
    type?: KeyType;
    /** 是否为非绑定块，注意这个字段只能在主键（KeyTypeBlock）上使用，其他类型的值不要使用 */
    isDetached?: boolean;
    createdAt?: number;
    updatedAt?: number;
    block?: IValueBlock;
    text?: IValueText;
    number?: IValueNumber;
    date?: IValueDate;
    mSelect?: IValueSelect[];
    url?: IValueURL;
    email?: IValueEmail;
    phone?: IValuePhone;
    mAsset?: IValueAsset[];
    template?: IValueTemplate;
    created?: IValueCreated;
    updated?: IValueUpdated;
    checkbox?: IValueCheckbox;
    relation?: IValueRelation;
    rollup?: IValueRollup;
}
/**
 * 属性视图视图信息
 */
export interface IAVViewInfo {
    id: string;
    icon: string;
    name: string;
    desc?: string;
    hideAttrViewName?: boolean;
    type: string;
    pageSize?: number;
}
/**
 * 属性视图渲染响应数据
 */
export interface IRenderAttributeViewResponse {
    name: string;
    id: SiyuanID;
    viewType: string;
    viewID: SiyuanID;
    views: IAVViewInfo[];
    view: any;
    isMirror: boolean;
}
/**
 * 属性视图搜索结果
 */
export interface ISearchAttributeViewResult {
    results: any[];
}
/**
 * 属性视图字段搜索结果
 */
export interface ISearchAttributeViewKeyResult {
    keys: any[];
}
/**
 * 属性视图过滤和排序
 */
export interface IAttributeViewFilterSort {
    filters: any[];
    sorts: any[];
}
/**
 * 属性视图主键值
 */
export interface IAttributeViewPrimaryKeyValues {
    name: string;
    blockIDs: SiyuanID[];
    rows: any[];
}
/**
 * 复制属性视图块响应
 */
export interface IDuplicateAttributeViewBlockResponse {
    avID: SiyuanID;
    blockID: SiyuanID;
}
/**
 * 镜像数据库块响应
 */
export interface IMirrorDatabaseBlocksResponse {
    refDefs: Array<{
        refID: SiyuanID;
        defIDs: SiyuanID[];
    }>;
}
/**
 * 属性视图添加块默认值
 */
export interface IAttributeViewAddingBlockDefaultValues {
    values: IAVValue[] | null;
}
/**
 * 设置属性视图块属性响应
 */
export interface ISetAttributeViewBlockAttrResponse {
    value: IAVValue;
}
//# sourceMappingURL=types.d.ts.map