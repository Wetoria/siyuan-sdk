export type * from '../api/av/types.js';
export * from './dom';
export * from './system';
export * from './transaction';
/**
 * Frequently used data structures in SiYuan
 */
/**
 * siyuan ID like 20241107110211-someHash
 */
export type SiyuanID = string;
export type DocumentId = string;
export type BlockId = string;
export type NotebookId = string;
export type PreviousID = BlockId;
export type ParentID = BlockId | DocumentId;
export type DataType = "markdown" | "dom";
export interface Notebook {
    id: NotebookId;
    name: string;
    icon: string;
    sort: number;
    closed: boolean;
}
export interface NotebookConf {
    name: string;
    closed: boolean;
    refCreateSavePath: string;
    createDocNameTemplate: string;
    dailyNoteSavePath: string;
    dailyNoteTemplatePath: string;
}
export type BlockType = "d" | "s" | "h" | "t" | "i" | "p" | "f" | "audio" | "video" | "other";
export type BlockSubType = "d1" | "d2" | "s1" | "s2" | "s3" | "t1" | "t2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "table" | "task" | "toggle" | "latex" | "quote" | "html" | "code" | "footnote" | "cite" | "collection" | "bookmark" | "attachment" | "comment" | "mindmap" | "spreadsheet" | "calendar" | "image" | "audio" | "video" | "other";
/**
 * 块属性接口 - 可以手动修改的属性
 * 注释掉的内容也存在，这里用于展示全部字段类型，但禁止手动修改
 */
export interface IBlockAttrs {
    "name"?: string;
    "alias"?: string;
    "memo"?: string;
    "bookmark"?: string;
    "tags"?: string;
    "fold"?: "1" | "";
    "heading-fold"?: "1" | "";
    "style"?: string;
    "scroll"?: string;
    "id"?: string;
    "title"?: string;
    "updated"?: string;
    "type"?: string;
    "icon"?: string;
    "status"?: string;
    "refcount"?: string;
    "parent-heading"?: string;
    "embed-content"?: string;
    "custom-avs"?: string;
    "custom-avs-names"?: string;
    "av-names"?: string;
    "data-av-type"?: string;
    "custom-riff-decks"?: string;
    [key: `custom-dailynote-${string}`]: string;
    [key: `custom-${string}`]: string;
}
/**
 * 允许设置的块属性类型
 * 排除了系统自动维护的属性：id、updated、type、status、refcount、parent-heading、embed-content、scroll
 */
export type ISettableBlockAttrs = Omit<IBlockAttrs, "id" | "updated" | "type" | "status" | "refcount" | "parent-heading" | "embed-content" | "scroll">;
export interface Block {
    alias: string;
    box: string;
    created: string;
    content: string;
    fcontent?: string;
    hash: string;
    hpath: string;
    /**
     * 块属性（Inline Attributes List）
     * For instance: "{: custom-type=\"query-code\" id=\"20230613234017-zkw3pr0\" updated=\"20230613234509\"}"
     */
    ial?: string;
    id: BlockId;
    length: number;
    markdown: string;
    memo: string;
    name: string;
    parent_id?: BlockId;
    path: string;
    root_id: DocumentId;
    /**
     * 块的排序值，用于控制块在文档中的显示顺序
     *
     * @example
     * - 文档块 (type="d"): `0`
     * - 标题块 (type="h", subtype="h1"|"h2"|"h3"|"h4"|"h5"|"h6"): `5`
     * - 段落块 (type="p"): `10`
     * - 代码块 (type="p", subtype="code"): `10`
     * - 数学公式块 (type="p", subtype="latex"): `10`
     * - 表格块 (type="p", subtype="table"): `10`
     * - HTML 块 (type="p", subtype="html"): `10`
     * - 列表块 (type="l"): `20`
     * - 列表项块 (type="l"): `20`
     * - 引述块 (type="p", subtype="quote"): `20`
     * - 超级块 (type="s"): `30`
     * - 数据库块 (type="d", subtype="collection"|"spreadsheet"): `30`
     */
    sort: number;
    subtype: BlockSubType;
    tag: string;
    type: BlockType;
    updated: string;
}
export interface IBreadcrumb {
    id: string;
    name: string;
    type: string;
    subType: string;
    children: any;
}
export interface backlinkData {
    dom: string;
    blockPaths: IBreadcrumb[];
    expand: boolean;
}
/**
 * 子块信息（用于 getChildBlocks 返回值）
 */
export interface ChildBlock {
    id: BlockId;
    type: BlockType;
    content?: string;
    markdown?: string;
}
/**
 * 块的 DOM 结构（用于 getBlockDOM 返回值）
 */
export interface BlockDOM {
    dom: string;
    id: BlockId;
}
//# sourceMappingURL=index.d.ts.map