import Image from "next/image"
import { FC, useEffect, useState } from "react"
import { useDrag } from "react-dnd"
import useImage from "use-image"

//Styled components
import { Layout, Count } from "./Item.styled"

interface Props {
  data: {
    id: string
    img: string
  }
  handleDrag: (
    data: any,
    i: any,
    width: number | undefined,
    height: number | undefined
  ) => void
  count: number
}

const Item: FC<Props> = ({ data, handleDrag, count }) => {
  const [image] = useImage(data.img)
  const [width, setWidth] = useState<number>()
  const [height, setHeight] = useState<number>()

  useEffect(() => {
    if (image !== undefined) {
      setWidth(image.width)
      setHeight(image.height)
    }
  }, [image])

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "puzzle",
      item: { id: data.id },
      collect: monitor => ({
        isDragging: monitor.isDragging()
      }),
      end: (_item, monitor) => {
        const offset = monitor.getClientOffset()
        handleDrag(offset, data, width, height)
      }
    }),
    [data.id, width, height, handleDrag]
  )

  return (
    <Layout ref={drag} style={{ cursor: isDragging ? "grabbing" : "grab" }}>
      {/* <object
        type="image/svg+xml"
        data={data.img}
        width={50}
        height={50}
      ></object> */}
      <img
        src={data.img}
        alt="Puzzle"
        width={50}
        height={50}
        // objectFit="contain"
        // objectPosition="center center"
      />
      <Count>{10 - count}</Count>
    </Layout>
  )
}

export default Item
