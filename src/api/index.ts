import type { AccountAPI } from './account/index.js'
import type { AIAPI } from './ai/index.js'
import type { ArchiveAPI } from './archive/index.js'
import type { AssetAPI } from './asset/index.js'
import type { AttrAPI } from './attr/index.js'
import type { AvAPI } from './av/index.js'
import type { BazaarAPI } from './bazaar/index.js'
import type { BlockAPI } from './block/index.js'
import type { BookmarkAPI } from './bookmark/index.js'
import type { BroadcastAPI } from './broadcast/index.js'
import type { ClipboardAPI } from './clipboard/index.js'
import type { CloudAPI } from './cloud/index.js'
import type { ConvertAPI } from './convert/index.js'
import type { ExportAPI } from './export/index.js'
import type { ExtensionAPI } from './extension/index.js'
import type { FileAPI } from './file/index.js'
import type { FileTreeAPI } from './filetree/index.js'
import type { FormatAPI } from './format/index.js'
import type { GraphAPI } from './graph/index.js'
import type { HistoryAPI } from './history/index.js'
import type { IconAPI } from './icon/index.js'
import type { ImportAPI } from './import/index.js'
import type { InboxAPI } from './inbox/index.js'
import type { LuteAPI } from './lute/index.js'
import type { NetworkAPI } from './network/index.js'
import type { NotebookAPI } from './notebook/index.js'
import type { NotificationAPI } from './notification/index.js'
import type { OutlineAPI } from './outline/index.js'
import type { PetalAPI } from './petal/index.js'
import type { QueryAPI } from './query/index.js'
import type { RefAPI } from './ref/index.js'
import type { RepoAPI } from './repo/index.js'
import type { RiffAPI } from './riff/index.js'
import type { SearchAPI } from './search/index.js'
import type { SettingAPI } from './setting/index.js'
import type { SnippetAPI } from './snippet/index.js'
import type { SqliteAPI } from './sqlite/index.js'
import type { StorageAPI } from './storage/index.js'
import type { SyncAPI } from './sync/index.js'
import type { SystemAPI } from './system/index.js'
import type { TagAPI } from './tag/index.js'
import type { TemplateAPI } from './template/index.js'
import type { TransactionsAPI } from './transactions/index.js'
import type { UIAPI } from './ui/index.js'

// 导入所有 API 实现
import './account/index.js'
import './ai/index.js'
import './archive/index.js'
import './asset/index.js'
import './attr/index.js'
import './av/index.js'
import './bazaar/index.js'
import './block/index.js'
import './bookmark/index.js'
import './broadcast/index.js'
import './clipboard/index.js'
import './cloud/index.js'
import './convert/index.js'
import './export/index.js'
import './extension/index.js'
import './file/index.js'
import './filetree/index.js'
import './format/index.js'
import './graph/index.js'
import './history/index.js'
import './icon/index.js'
import './import/index.js'
import './inbox/index.js'
import './lute/index.js'
import './network/index.js'
import './notebook/index.js'
import './notification/index.js'
import './outline/index.js'
import './petal/index.js'
import './query/index.js'
import './ref/index.js'
import './repo/index.js'
import './riff/index.js'
import './search/index.js'
import './setting/index.js'
import './snippet/index.js'
import './sqlite/index.js'
import './storage/index.js'
import './sync/index.js'
import './system/index.js'
import './tag/index.js'
import './template/index.js'
import './transactions/index.js'
import './ui/index.js'

/**
 * Api types
 */
declare module '@wetoria/siyuan-sdk' {
  interface SiYuanAPI
    extends
    AccountAPI,
    AIAPI,
    ArchiveAPI,
    AssetAPI,
    AttrAPI,
    AvAPI,
    BazaarAPI,
    BlockAPI,
    BookmarkAPI,
    BroadcastAPI,
    ClipboardAPI,
    CloudAPI,
    ConvertAPI,
    ExportAPI,
    ExtensionAPI,
    FileAPI,
    FileTreeAPI,
    FormatAPI,
    GraphAPI,
    HistoryAPI,
    IconAPI,
    ImportAPI,
    InboxAPI,
    LuteAPI,
    NetworkAPI,
    NotebookAPI,
    NotificationAPI,
    OutlineAPI,
    PetalAPI,
    QueryAPI,
    RefAPI,
    RepoAPI,
    RiffAPI,
    SearchAPI,
    SettingAPI,
    SnippetAPI,
    SqliteAPI,
    StorageAPI,
    SyncAPI,
    SystemAPI,
    TagAPI,
    TemplateAPI,
    TransactionsAPI,
    UIAPI
  {}
}
