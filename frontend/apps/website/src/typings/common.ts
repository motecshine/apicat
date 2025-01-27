import Node from '@/components/AcTree/model/node'
export declare interface Language {
  name: string
  lang: string
}

/**
 * 当前操作的节点信息
 */
export declare type ActiveNodeInfo = { node: Node | undefined; id: number | undefined }
