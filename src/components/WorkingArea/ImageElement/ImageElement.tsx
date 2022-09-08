import Konva from "konva"
import { FC, useMemo, useRef } from "react"
import { Image } from "react-konva/es/ReactKonvaCore"
import useImage from "use-image"
import KonvaEventObject = Konva.KonvaEventObject

interface TransformItem {
  id: string
  width: number
  height: number
  x: number
  y: number
  rotation: number
}

interface Props {
  width?: number
  height?: number
  img: string
  draggable?: boolean
  x?: number
  y?: number
  rotation?: number
  onDragStart?: (e: KonvaEventObject<DragEvent>) => void
  onDragEnd?: (e: KonvaEventObject<DragEvent>) => void
  onSelect?: (ref: any) => void
  dragBoundFunc?: (e: any) => { x: number; y: number }
  onTransformEnd?: (item: TransformItem) => void
  color?: string
  id: string
  changeColor?: boolean
}

const ImageElement: FC<Props> = ({
  width,
  height,
  img,
  draggable,
  x,
  y,
  rotation,
  onDragStart,
  onDragEnd,
  onSelect,
  dragBoundFunc,
  color,
  id,
  changeColor,
  onTransformEnd
}) => {
  const [image] = useImage(img)
  const shapeRef = useRef<any>(null)

  const canvas = useMemo(() => {
    if (changeColor) {
      if (!image) {
        return undefined
      }
      const el = document.createElement("canvas")

      el.width = image.width
      el.height = image.height
      const ctx = el.getContext("2d")
      if (ctx) {
        if (color) {
          ctx.fillStyle = color
          ctx.fillRect(0, 0, el.width, el.height)
          ctx.globalCompositeOperation = "destination-in"
          ctx.drawImage(image, 0, 0)
        }
      }
      return el
    } else {
      return image
    }
  }, [image, color])

  return (
    <>
      <Image
        id={id}
        image={canvas}
        x={x}
        y={y}
        rotation={rotation || 0}
        draggable={draggable}
        width={width}
        height={height}
        dragBoundFunc={dragBoundFunc}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        ref={shapeRef}
        onClick={() => onSelect && onSelect(shapeRef)}
        name="image"
        alt="No Image"
        onTransformEnd={() => {
          const node = shapeRef.current
          const scaleX = node.scaleX()
          const scaleY = node.scaleY()
          node.scaleX(1)
          node.scaleY(1)
          onTransformEnd &&
            onTransformEnd({
              id,
              x: node.x(),
              y: node.y(),
              width: Math.max(5, node.width() * scaleX),
              height: Math.max(node.height() * scaleY),
              rotation: node.rotation()
            })
        }}
      />
    </>
  )
}

export default ImageElement
