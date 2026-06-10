import type { SyApiMethodResponse } from '../../core/index.js'
import type { DocumentId } from '../../types/index.js'

// 实现
import { SiYuanAPI } from '../../core/index.js'

/**
 * Export API 类型定义
 */
export interface ExportAPI {
  /**
   * 导出笔记本 Markdown
   * @path /api/export/exportNotebookMd
   */
  exportNotebookMd: (data: {
    /** 笔记本 ID */
    notebook: string
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 批量导出 Markdown
   * @path /api/export/exportMds
   */
  exportMds: (data: {
    /** 文档 ID 列表 */
    ids: DocumentId[]
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出单个 Markdown
   * @path /api/export/exportMd
   */
  exportMd: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出 SY 格式
   * @path /api/export/exportSY
   */
  exportSY: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出笔记本 SY 格式
   * @path /api/export/exportNotebookSY
   */
  exportNotebookSY: (data: {
    /** 笔记本 ID */
    id: string
  }) => SyApiMethodResponse<{
    zip: string
  }>
  /**
   * 导出 HTML
   * @path /api/export/exportHTML
   */
  exportHTML: (data: {
    /** 文档 ID */
    id: DocumentId
    /** 是否导出 PDF */
    pdf: boolean
    /** 保存路径（可选，为空时使用临时目录） */
    savePath?: string
    /** 是否保持折叠（可选） */
    keepFold?: boolean
    /** 是否合并（可选） */
    merge?: boolean
  }) => SyApiMethodResponse<{
    id: string
    name: string
    content: string
    folder?: string
  }>
  /**
   * 导出预览 HTML
   * @path /api/export/exportPreviewHTML
   */
  exportPreviewHTML: (data: {
    /** 文档 ID */
    id: DocumentId
    /** 是否保持折叠（可选） */
    keepFold?: boolean
    /** 是否合并（可选） */
    merge?: boolean
    /** 是否导出图片（可选） */
    image?: boolean
  }) => SyApiMethodResponse<{
    id: string
    name: string
    content: string
    attrs: Record<string, string>
    type: string
  }>
  /**
   * 导出 Markdown HTML
   * @path /api/export/exportMdHTML
   */
  exportMdHTML: (data: {
    /** 文档 ID */
    id: DocumentId
    /** 保存路径（可选，为空时使用临时目录） */
    savePath?: string
  }) => SyApiMethodResponse<{
    id: string
    name: string
    content: string
    folder?: string
  }>
  /**
   * 导出 DOCX
   * @path /api/export/exportDocx
   */
  exportDocx: (data: {
    /** 文档 ID */
    id: DocumentId
    /** 保存路径 */
    savePath: string
    /** 是否移除资源 */
    removeAssets: boolean
    /** 是否合并（可选） */
    merge?: boolean
  }) => SyApiMethodResponse<{
    path: string
  }>
  /**
   * 处理 PDF
   * @path /api/export/processPDF
   */
  processPDF: (data: {
    /** 文档 ID */
    id: DocumentId
    /** 路径 */
    path: string
    /** 是否合并（可选） */
    merge?: boolean
    /** 是否移除资源 */
    removeAssets: boolean
    /** 是否添加水印 */
    watermark: boolean
  }) => SyApiMethodResponse<any>
  /**
   * 导出预览
   * @path /api/export/exportPreview
   */
  exportPreview: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    html: string
    fillCSSVar: boolean
  }>
  /**
   * 导出资源文件
   * @path /api/export/exportResources
   */
  exportResources: (
    paths: string[],
    name: string
  ) => SyApiMethodResponse<{
    path: string
  }>
  /**
   * 导出为文件
   * @path /api/export/exportAsFile
   */
  exportAsFile: (formData: FormData) => SyApiMethodResponse<{
    file: string
  }>
  /**
   * 导出数据
   * @path /api/export/exportData
   */
  exportData: () => SyApiMethodResponse<{
    zip: string
  }>
  /**
   * 导出文件夹数据
   * @path /api/export/exportDataInFolder
   */
  exportDataInFolder: (data: {
    /** 导出文件夹 */
    folder: string
  }) => SyApiMethodResponse<{
    name: string
  }>
  /**
   * 导出临时内容
   * @path /api/export/exportTempContent
   */
  exportTempContent: (data: {
    /** 内容 */
    content: string
  }) => SyApiMethodResponse<{
    url: string
  }>
  /**
   * 导出浏览器 HTML
   * @path /api/export/exportBrowserHTML
   */
  exportBrowserHTML: (data: {
    /** 文件夹 */
    folder: string
    /** HTML 内容 */
    html: string
    /** 名称 */
    name: string
  }) => SyApiMethodResponse<{
    zip: string
  }>
  /**
   * 导出到链滴
   * @path /api/export/export2Liandi
   */
  export2Liandi: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<any>
  /**
   * 导出为 reStructuredText
   * @path /api/export/exportReStructuredText
   */
  exportReStructuredText: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出为 AsciiDoc
   * @path /api/export/exportAsciiDoc
   */
  exportAsciiDoc: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出为 Textile
   * @path /api/export/exportTextile
   */
  exportTextile: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出为 OPML
   * @path /api/export/exportOPML
   */
  exportOPML: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出为 Org Mode
   * @path /api/export/exportOrgMode
   */
  exportOrgMode: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出为 MediaWiki
   * @path /api/export/exportMediaWiki
   */
  exportMediaWiki: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出为 ODT
   * @path /api/export/exportODT
   */
  exportODT: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出为 RTF
   * @path /api/export/exportRTF
   */
  exportRTF: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出为 EPUB
   * @path /api/export/exportEPUB
   */
  exportEPUB: (data: {
    /** 文档 ID */
    id: DocumentId
  }) => SyApiMethodResponse<{
    name: string
    zip: string
  }>
  /**
   * 导出属性视图
   * @path /api/export/exportAttributeView
   */
  exportAttributeView: (data: {
    /** 属性视图 ID */
    id: string
    /** 块 ID */
    blockID: string
  }) => SyApiMethodResponse<{
    zip: string
  }>
  /**
   * 导出 Markdown 内容
   * @path /api/export/exportMdContent
   */
  exportMdContent: (data: {
    /** 文档 ID */
    id: DocumentId
    /** 块引用模式（可选） */
    refMode?: number
    /** 块嵌入模式（可选） */
    embedMode?: number
    /** 是否包含 YAML Front Matter（可选，默认 true） */
    yfm?: boolean
    /** 是否填充 CSS 变量（可选） */
    fillCSSVar?: boolean
    /** 是否调整标题级别（可选） */
    adjustHeadingLevel?: boolean
    /** 是否使用图片标签（可选） */
    imgTag?: boolean
  }) => SyApiMethodResponse<{
    hPath: string
    content: string
  }>
}

SiYuanAPI.prototype.exportNotebookMd = function (data: {
  notebook: string
}) {
  return this.request('/api/export/exportNotebookMd', data)
}

SiYuanAPI.prototype.exportMds = function (data: {
  ids: string[]
}) {
  return this.request('/api/export/exportMds', data)
}

SiYuanAPI.prototype.exportMd = function (data: {
  id: string
}) {
  return this.request('/api/export/exportMd', data)
}

SiYuanAPI.prototype.exportSY = function (data: {
  id: string
}) {
  return this.request('/api/export/exportSY', data)
}

SiYuanAPI.prototype.exportNotebookSY = function (data: {
  id: string
}) {
  return this.request('/api/export/exportNotebookSY', data)
}

SiYuanAPI.prototype.exportHTML = function (data: {
  id: string
  pdf: boolean
  savePath?: string
  keepFold?: boolean
  merge?: boolean
}) {
  return this.request('/api/export/exportHTML', data)
}

SiYuanAPI.prototype.exportPreviewHTML = function (data: {
  id: string
  keepFold?: boolean
  merge?: boolean
  image?: boolean
}) {
  return this.request('/api/export/exportPreviewHTML', data)
}

SiYuanAPI.prototype.exportMdHTML = function (data: {
  id: string
  savePath?: string
}) {
  return this.request('/api/export/exportMdHTML', data)
}

SiYuanAPI.prototype.exportDocx = function (data: {
  id: string
  savePath: string
  removeAssets: boolean
  merge?: boolean
}) {
  return this.request('/api/export/exportDocx', data)
}

SiYuanAPI.prototype.processPDF = function (data: {
  id: string
  path: string
  merge?: boolean
  removeAssets: boolean
  watermark: boolean
}) {
  return this.request('/api/export/processPDF', data)
}

SiYuanAPI.prototype.exportPreview = function (data: {
  id: string
}) {
  return this.request('/api/export/exportPreview', data)
}

SiYuanAPI.prototype.exportResources = function (paths: string[], name: string) {
  return this.request('/api/export/exportResources', {
    paths,
    name,
  })
}

SiYuanAPI.prototype.exportAsFile = function (formData: FormData) {
  return this.request('/api/export/exportAsFile', formData)
}

SiYuanAPI.prototype.exportData = function () {
  return this.request('/api/export/exportData', {})
}

SiYuanAPI.prototype.exportDataInFolder = function (data: {
  folder: string
}) {
  return this.request('/api/export/exportDataInFolder', data)
}

SiYuanAPI.prototype.exportTempContent = function (data: {
  content: string
}) {
  return this.request('/api/export/exportTempContent', data)
}

SiYuanAPI.prototype.exportBrowserHTML = function (data: {
  folder: string
  html: string
  name: string
}) {
  return this.request('/api/export/exportBrowserHTML', data)
}

SiYuanAPI.prototype.export2Liandi = function (data: {
  id: string
}) {
  return this.request('/api/export/export2Liandi', data)
}

SiYuanAPI.prototype.exportReStructuredText = function (data: {
  id: string
}) {
  return this.request('/api/export/exportReStructuredText', data)
}

SiYuanAPI.prototype.exportAsciiDoc = function (data: {
  id: string
}) {
  return this.request('/api/export/exportAsciiDoc', data)
}

SiYuanAPI.prototype.exportTextile = function (data: {
  id: string
}) {
  return this.request('/api/export/exportTextile', data)
}

SiYuanAPI.prototype.exportOPML = function (data: {
  id: string
}) {
  return this.request('/api/export/exportOPML', data)
}

SiYuanAPI.prototype.exportOrgMode = function (data: {
  id: string
}) {
  return this.request('/api/export/exportOrgMode', data)
}

SiYuanAPI.prototype.exportMediaWiki = function (data: {
  id: string
}) {
  return this.request('/api/export/exportMediaWiki', data)
}

SiYuanAPI.prototype.exportODT = function (data: {
  id: string
}) {
  return this.request('/api/export/exportODT', data)
}

SiYuanAPI.prototype.exportRTF = function (data: {
  id: string
}) {
  return this.request('/api/export/exportRTF', data)
}

SiYuanAPI.prototype.exportEPUB = function (data: {
  id: string
}) {
  return this.request('/api/export/exportEPUB', data)
}

SiYuanAPI.prototype.exportAttributeView = function (data: {
  id: string
  blockID: string
}) {
  return this.request('/api/export/exportAttributeView', data)
}

SiYuanAPI.prototype.exportMdContent = function (data: {
  id: string
  refMode?: number
  embedMode?: number
  yfm?: boolean
  fillCSSVar?: boolean
  adjustHeadingLevel?: boolean
  imgTag?: boolean
}) {
  return this.request('/api/export/exportMdContent', data)
}

