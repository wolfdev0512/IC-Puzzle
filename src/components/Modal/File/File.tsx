import React, { useRef, useEffect, useState } from "react"

// Styled Component
import {
  Layout,
  Modal,
  CanvasContainer,
  Tool,
  Input,
  CloseButton,
  Button
} from "./File.styled"

// Type
import { FileModalProps } from "types/components/Modal"
import { PuzzleItemProps } from "types/components/Working"

// Component
import Text from "components/Text"
import { Row } from "components/Layout"

// Assets
import { AiOutlineCloseCircle } from "react-icons/ai"
import Uploader from "assets/png/upload.png"

// Image
import ImageUploader from "react-image-upload"
import "react-image-upload/dist/index.css"
import useImage from "use-image"

// Validation
import { isEmpty } from "utils/helper-validation"

const Mint: React.FC<FileModalProps> = ({ show, closeModal, addImage }) => {
  const [defaultImage] = useImage(Uploader)

  const canvasRef = useRef<any | null>(null)

  const [row, setRow] = useState(1)
  const [column, setColumn] = useState(1)

  const changeRow = (e: any) => {
    setRow(e.target.value)
  }
  const changeColumn = (e: any) => {
    setColumn(e.target.value)
  }

  const [canvas, setCanvas] = useState<any>()
  const [ctx, setCTX] = useState<any>()

  const [image, setImage] = useState<any>()
  const [dImage, setDImage] = useState<any>()

  const [rectImg, setRectImg] = useState({ width: 0, height: 0 })
  const [rectTile, setRectTile] = useState({ width: 0, height: 0 })
  const [rect, setRect] = useState({ width: 0, height: 0 })

  const [tiles, setTiles] = useState<any>()

  const [rate, setRate] = useState(1)

  useEffect(() => {
    setDImage(defaultImage)
    let myCanvas: any = document.getElementById("myCanvas")

    let width = canvasRef.current.clientWidth
    let height = canvasRef.current.clientHeight

    myCanvas.width = width
    myCanvas.height = height

    let ctx = myCanvas.getContext("2d")

    setCanvas(myCanvas)
    setCTX(ctx)
    setRect({ width: width, height: height })
  }, [canvas, show])

  const getImageFileObject = (imageFile: any) => {
    setImage(imageFile)
  }

  const getImageTile = () => {
    let temp: PuzzleItemProps[] = []
    tiles.map((item: ImageData, index: number) => {
      let tempCanvas: any = document.getElementById("myCanvas")
      tempCanvas.width = item.width
      tempCanvas.height = item.height
      let ctx = tempCanvas.getContext("2d")
      ctx.putImageData(item, 0, 0)

      let image = new Image()
      image.src = tempCanvas.toDataURL()
      let tempItem: PuzzleItemProps = {
        id: "Img" + index,
        img: image,
        x: rectTile.width * (index % row),
        y: rectTile.height * ~~(index / row),
        width: rectTile.width,
        height: rectTile.height,
        rotation: 0,
        color: "#FFFFFF",
        draggable: true,
        changeColor: false,
        resizeEnabled: false,
        rotateEnabled: true
      }
      temp.push(tempItem)
    })
    addImage(temp)
    closeModal()
  }

  useEffect(() => {
    if (defaultImage !== undefined) {
      ctx.drawImage(
        defaultImage,
        -rect.width * 0.3,
        0,
        rect.width * 1.6,
        rect.height
      )
    }
  }, [dImage, show])

  useEffect(() => {
    if (!isEmpty(image) && row != 0 && column != 0) {
      getTiles()
    }
  }, [image, row, column])

  useEffect(() => {
    if (!isEmpty(image)) {
      drawTiles()
    }
  }, [tiles])

  const getTiles = () => {
    let img = new window.Image()
    let imgW
    let imgH
    let tempRate

    img.onload = function () {
      imgW = img.width
      imgH = img.height

      tempRate =
        (rect.width - 10) / imgW > (rect.height - 10) / imgH
          ? (rect.height - 10) / imgH
          : (rect.width - 10) / imgW

      setRate(tempRate)
      imgW = imgW * tempRate
      imgH = imgH * tempRate
      ctx.clearRect(0, 0, rect.width, rect.height)
      ctx.drawImage(img, 0, 0, imgW, imgH)
      setRectImg({ width: imgW, height: imgH })

      let tileWidth = ~~(imgW / row)
      let tileHeight = ~~(imgH / column)

      setRectTile({ width: tileWidth, height: tileHeight })

      let temp: any = []
      for (let i = 0; i < column; i++) {
        for (let j = 0; j < row; j++) {
          temp.push(
            ctx.getImageData(
              tileWidth * j,
              tileHeight * i,
              tileWidth,
              tileHeight
            )
          )
        }
      }
      setTiles(temp)
    }
    img.src = image.dataUrl
    ctx.clearRect(0, 0, imgW, imgH)
  }

  const runAfterImageDelete = (file: any) => {
    ctx.clearRect(0, 0, rect.width, rect.height)
  }

  const drawTiles = () => {
    ctx.clearRect(0, 0, rect.width, rect.height)
    for (let i = 0; i < column; i++) {
      for (let j = 0; j < row; j++) {
        let gapW = j > 0 ? 1.5 * j : 0
        let gapH = i > 0 ? 1.5 * i : 0

        let temp = tiles[i * row + j]
        let pointx = (rect.width - rectImg.width - j) / 2
        let pointy = (rect.height - rectImg.height - i) / 2

        ctx.putImageData(
          temp,
          rectTile.width * j + gapW + pointx,
          rectTile.height * i + gapH + pointy
        )
      }
    }
  }

  return (
    <Layout display={show}>
      <Modal>
        <CanvasContainer ref={canvasRef}>
          <canvas id="myCanvas"></canvas>
        </CanvasContainer>
        <Tool>
          <Text tAlign="center" fWeight={700} fSize={35} padding="20px">
            File Upload
          </Text>
          <ImageUploader
            style={{ width: "150px", height: "150px" }}
            onFileAdded={(img: any) => getImageFileObject(img)} // function that runs to confirm that your image actually exists
            onFileRemoved={(img: any) => runAfterImageDelete(img)} // function runs on once you delete your image
          />
          <Row justifyContent="space-between" padding="20px 0px 0px 0px">
            <Text fWeight={600}>Row</Text>
            <Input
              type="number"
              step={1}
              defaultValue={1}
              min={1}
              onChange={e => changeRow(e)}
            />
          </Row>
          <Row justifyContent="space-between" padding="20px 0px 0px 0px">
            <Text fWeight={600}>Column</Text>
            <Input
              type="number"
              step={1}
              defaultValue={1}
              min={1}
              onChange={e => changeColumn(e)}
            />
          </Row>
          <Button onClick={getImageTile}>O K</Button>
        </Tool>
        <CloseButton
          onClick={() => {
            closeModal()
          }}
        >
          <AiOutlineCloseCircle size={30} />
        </CloseButton>
      </Modal>
    </Layout>
  )
}

export default Mint
