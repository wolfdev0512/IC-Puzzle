import { PuzzleItemProps } from "types/components/Working"

export interface MintModalProps {
  show: boolean
  pId: string
  image: any
  title: string
  mintClick: () => void
  closeModal: () => void
}

export interface SuccessModalProps {
  show: boolean
  pId: string
  image: any
  tId: string
  download: (type: string) => void
  closeModal: () => void
}

export interface FileModalProps {
  show: boolean
  closeModal: () => void
  addImage: (_puzzle: PuzzleItemProps[]) => void
}
