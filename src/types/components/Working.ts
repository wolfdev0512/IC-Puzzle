export interface DrawerProps {
  show: boolean
  isActive: boolean
  bgColor: boolean
  scale: number
  setShow: (type: boolean) => void
  handleScale: (type: string) => void
  handleDeletePuzzle: (itemId: string) => void
}

export interface PuzzleItemProps {
  id: string
  img: any
  x: number
  y: number
  width?: number | undefined
  height?: number | undefined
  rotation: number
  color?: string | undefined
  draggable?: boolean | undefined
  changeColor?: boolean | undefined
  resizeEnabled?: boolean | undefined
  rotateEnabled?: boolean | undefined
}

export interface SidebarProps {
  screenMode: boolean
  flag: boolean
  selectedImages: string[]
  puzzles: PuzzleItemProps[]
  lockedImages: string[]
  addPuzzle: (data: PuzzleItemProps) => void
  setLockedImages: React.Dispatch<React.SetStateAction<string[]>>
  handleDeletePuzzle: (itemId: string) => void
}
