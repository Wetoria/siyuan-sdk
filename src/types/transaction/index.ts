import {
  BlockId,
  DocumentId,
} from '../index'

export enum ActionTypes {
  insert = 'insert',
  update = 'update',
  delete = 'delete',
  move = 'move',
  foldHeading = 'foldHeading',
  unfoldHeading = 'unfoldHeading',
  setAttrs = 'setAttrs',
  updateAttrs = 'updateAttrs',
  append = 'append',
  insertAttrViewBlock = 'insertAttrViewBlock',
  removeAttrViewBlock = 'removeAttrViewBlock',
  addAttrViewCol = 'addAttrViewCol',
  removeAttrViewCol = 'removeAttrViewCol',
  addFlashcards = 'addFlashcards',
  removeFlashcards = 'removeFlashcards',
  updateAttrViewCell = 'updateAttrViewCell',
  updateAttrViewCol = 'updateAttrViewCol',
  updateAttrViewColTemplate = 'updateAttrViewColTemplate',
  sortAttrViewRow = 'sortAttrViewRow',
  sortAttrViewCol = 'sortAttrViewCol',
  sortAttrViewKey = 'sortAttrViewKey',
  setAttrViewColPin = 'setAttrViewColPin',
  setAttrViewColHidden = 'setAttrViewColHidden',
  setAttrViewColWrap = 'setAttrViewColWrap',
  setAttrViewColWidth = 'setAttrViewColWidth',
  updateAttrViewColOptions = 'updateAttrViewColOptions',
  removeAttrViewColOption = 'removeAttrViewColOption',
  updateAttrViewColOption = 'updateAttrViewColOption',
  setAttrViewName = 'setAttrViewName',
  doUpdateUpdated = 'doUpdateUpdated',
  duplicateAttrViewKey = 'duplicateAttrViewKey',
  setAttrViewColIcon = 'setAttrViewColIcon',
  setAttrViewFilters = 'setAttrViewFilters',
  setAttrViewSorts = 'setAttrViewSorts',
  setAttrViewColCalc = 'setAttrViewColCalc',
  updateAttrViewColNumberFormat = 'updateAttrViewColNumberFormat',
  replaceAttrViewBlock = 'replaceAttrViewBlock',
  addAttrViewView = 'addAttrViewView',
  setAttrViewViewName = 'setAttrViewViewName',
  removeAttrViewView = 'removeAttrViewView',
  setAttrViewViewIcon = 'setAttrViewViewIcon',
  duplicateAttrViewView = 'duplicateAttrViewView',
  sortAttrViewView = 'sortAttrViewView',
  setAttrViewPageSize = 'setAttrViewPageSize',
  updateAttrViewColRelation = 'updateAttrViewColRelation',
  moveOutlineHeading = 'moveOutlineHeading',
  updateAttrViewColRollup = 'updateAttrViewColRollup',
  hideAttrViewName = 'hideAttrViewName',
  setAttrViewCardSize = 'setAttrViewCardSize',
  setAttrViewCardAspectRatio = 'setAttrViewCardAspectRatio',
  setAttrViewCoverFrom = 'setAttrViewCoverFrom',
  setAttrViewCoverFromAssetKeyID = 'setAttrViewCoverFromAssetKeyID',
  setAttrViewFitImage = 'setAttrViewFitImage',
  setAttrViewShowIcon = 'setAttrViewShowIcon',
  setAttrViewWrapField = 'setAttrViewWrapField',
  setAttrViewColDateFillCreated = 'setAttrViewColDateFillCreated',
  setAttrViewColDateFillSpecificTime = 'setAttrViewColDateFillSpecificTime',
  setAttrViewViewDesc = 'setAttrViewViewDesc',
  setAttrViewColDesc = 'setAttrViewColDesc',
  setAttrViewBlockView = 'setAttrViewBlockView',
  setAttrViewGroup = 'setAttrViewGroup',
  removeAttrViewGroup = 'removeAttrViewGroup',
  hideAttrViewAllGroups = 'hideAttrViewAllGroups',
  syncAttrViewTableColWidth = 'syncAttrViewTableColWidth',
  hideAttrViewGroup = 'hideAttrViewGroup',
  sortAttrViewGroup = 'sortAttrViewGroup',
  foldAttrViewGroup = 'foldAttrViewGroup',
  setAttrViewDisplayFieldName = 'setAttrViewDisplayFieldName',
  setAttrViewFillColBackgroundColor = 'setAttrViewFillColBackgroundColor',
  setAttrViewUpdatedIncludeTime = 'setAttrViewUpdatedIncludeTime',
  setAttrViewCreatedIncludeTime = 'setAttrViewCreatedIncludeTime',
}

export interface doOperation {
  action: ActionTypes
  data: string
  id: BlockId
  parentID: BlockId | DocumentId
  previousID: BlockId
  nextID?: string
  retData: null
  blockIDs?: string[] | null
  blockID?: string
  deckID?: string
  avID?: string
  srcIDs?: string[] | null
  srcs?: string[] | null
  isDetached?: boolean
  ignoreFillFilter?: boolean
  name?: string
  type?: string
  format?: string
  keyID?: string
  rowID?: string
  isTwoWay?: boolean
  backRelationKeyID?: string
  removeDest?: boolean
  layout?: string
}


export interface TransactionItem {
  timestamp: string
  doOperations: doOperation[]
  undoOperations: doOperation[] | null
}
