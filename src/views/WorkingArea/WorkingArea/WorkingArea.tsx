import Image from "next/image"

import React, { useRef, useState, useEffect } from "react"

import Switch from "react-switch"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

import Konva from "konva"
import { Layer, Stage, Rect } from "react-konva"
import { Transformer } from "react-konva/es/ReactKonvaCore"

import randomize from "randomatic"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation } from "swiper"

SwiperCore.use([Navigation])

import { puzzle } from "declarations/puzzle"

//Notification
import { Store } from "react-notifications-component"

//Context
import { useWallet } from "context/WalletContext"

//Modal
import { MintModal, SuccessModal, FileModal } from "components/Modal/index"

//Component
import {
  ImageElement,
  Drawer,
  Sidebar,
  ColorPicker
} from "components/WorkingArea"

//Styled components
import {
  Layout,
  Container,
  MenuBox,
  FileButton,
  ResizeButton,
  Background,
  MenuContainer,
  Canvas,
  DrawerContainer,
  TitleContainer,
  Title,
  SidebarContainer,
  ColorPickerContainer,
  MintButton,
  MintButtonContainer,
  ColourSwiperContainer,
  SwiperItem,
  NextItem,
  PrevItem,
  SwiperWrapper,
  PageLayout
} from "./WorkingArea.styled"

//Type
import { PuzzleItemProps } from "types/components/Working"

//Assets
import Temp from "assets/png/temp.png"
import DefaultPuzzle from "assets/svg/defaultPuzzle.svg"

import { AiOutlineFolderOpen } from "react-icons/ai"
import { IoResize } from "react-icons/io5"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"

import { Images } from "utils/ImageData"

const WorkingArea: React.FC = () => {
  const [fullScreen, setFullScreen] = useState(false)
  const [bgColor, setBgColor] = useState(true)

  const [title, setTitle] = useState<string>("")

  const [image, setImage] = useState(Temp)
  const [tokenID, setTokenID] = useState("")
  const [tokenAdd, setTokenAdd] = useState("")

  const { principleId } = useWallet()

  const [showColor, setShowColor] = useState(true)
  const [showDrawer, setShowDrawer] = useState(true)

  const [swiper, setSwiper] = useState<any>(null)
  const [colorSlide, setColorSlide] = useState(0)

  const [mintModal, setMintModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  const [fileModal, setFileModal] = useState(false)

  useEffect(() => {
    if (swiper) {
      swiper.slideTo(colorSlide, 300)
    }
  }, [swiper, colorSlide])

  const [activeElements, setActiveElements] = useState<any | null>([])
  const [scale, setScale] = useState(1)
  const [stagePosition, setStagePosition] = useState({ x: 0, y: 0 })
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [lockedImages, setLockedImages] = useState<string[]>([])

  useEffect(() => {
    trRef.current.nodes([])
    setActiveElements([])
  }, [lockedImages])

  const stageRef = useRef<any | null>(null)
  const trRef = useRef<any>(null)
  const layerRef = useRef<any>(null)
  const selectionImageRef = useRef<any>(null)

  const selection = useRef<any>({
    visible: false,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  })

  const handleScale = (type: string) => {
    const stage = stageRef.current
    const center = {
      x: stage.width() / 2,
      y: stage.height() / 2
    }

    const relatedTo = {
      x: (center.x - stage.x()) / scale,
      y: (center.y - stage.y()) / scale
    }

    const newScale =
      type === "+"
        ? Number((scale + 0.2).toFixed(1))
        : Number((scale - 0.2).toFixed(1))
    const newPos = {
      x: center.x - relatedTo.x * newScale,
      y: center.y - relatedTo.y * newScale
    }

    setScale(newScale)
    setStagePosition(newPos)
  }

  const handleDeletePuzzle = (itemId: string) => {
    if (itemId === "") {
      if (
        activeElements.length &&
        activeElements[0].attrs.id !== puzzles[0].id
      ) {
        const id = activeElements[0].attrs.id
        setPuzzles(current => current.filter(i => i.id !== id))
        setSelectedImages(current => current.filter(i => i !== id))
        setLockedImages(current => current.filter(i => i !== id))
        setActiveElements([])
        trRef.current.nodes([])
      }
    } else {
      setPuzzles(current => current.filter(i => i.id !== itemId))
      setSelectedImages(current => current.filter(i => i !== itemId))
      setLockedImages(current => current.filter(i => i !== itemId))
      setActiveElements([])
      trRef.current.nodes([])
    }
  }

  const [puzzles, setPuzzles] = useState<PuzzleItemProps[]>([])

  const toStoreFormat = (dataURI: string) => {
    let byteString: string = atob(dataURI.split(",")[1])
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0]
    let ab = new ArrayBuffer(byteString.length)
    let ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i)
    }
    return ia
  }

  const mint = async () => {
    trRef.current.nodes([])
    setActiveElements([])
    const dataURL = stageRef.current.toDataURL()
    setImage(dataURL)
    setMintModal(true)
  }

  const closeFileModal = () => {
    setFileModal(false)
  }
  const closeMintModal = () => {
    setMintModal(false)
  }

  const closeSuccessModal = () => {
    setSuccessModal(false)
  }

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage()
    if (clickedOnEmpty) {
      trRef.current.nodes([])
      setActiveElements([])
    }
  }

  const onClickTap = (e: any) => {
    let stage = e.target.getStage()
    let layer = layerRef.current
    let tr = trRef.current
    if (e.target === stage) {
      setActiveElements([])
      tr.nodes([])
      layer.draw()
      return
    }
    layer.draw()
  }

  const onMouseDown = (e: any) => {
    const isElement = e.target.findAncestor(".elements-container")
    const isTransformer = e.target.findAncestor("Transformer")
    const isImage = e.target.name() === "image"

    if (isElement || isTransformer || isImage) {
      return
    }

    const pos = e.target.getStage().getPointerPosition()
    selection.current.visible = true
    selection.current.x1 = pos.x
    selection.current.y1 = pos.y
    selection.current.x2 = pos.x
    selection.current.y2 = pos.y
    updateSelectionRect()
  }

  const onMouseMove = (e: any) => {
    if (!selection.current.visible) {
      return
    }
    const pos = e.target.getStage().getPointerPosition()
    selection.current.x2 = pos.x
    selection.current.y2 = pos.y
    updateSelectionRect()
  }

  const onMouseUp = () => {
    if (!selection.current.visible) {
      return
    }
    const selBox = selectionImageRef.current.getClientRect()

    const elements: any = []
    layerRef.current.find(".image").forEach((elementNode: any) => {
      const elBox = elementNode.getClientRect()
      if (Konva.Util.haveIntersection(selBox, elBox)) {
        elements.push(elementNode)
      }
    })

    if (!activeElements.length) {
      setActiveElements(elements)
    }

    trRef.current.nodes(!activeElements.length ? elements : activeElements)
    selection.current.visible = false
    updateSelectionRect()
  }

  const handleDragEnd = ({ target }: any, id: string) => {
    setPuzzles(current =>
      current.map(i => {
        if (i.id === id) {
          i.x = target.attrs.x
          i.y = target.attrs.y
          i.rotation = target.attrs.rotation
        }
        return i
      })
    )
  }

  const updateSelectionRect = () => {
    const node = selectionImageRef.current
    node.setAttrs({
      visible: selection.current.visible,
      x: Math.min(selection.current.x1, selection.current.x2),
      y: Math.min(selection.current.y1, selection.current.y2),
      width: Math.abs(selection.current.x1 - selection.current.x2),
      height: Math.abs(selection.current.y1 - selection.current.y2)
    })
    node.getLayer().batchDraw()
  }

  const addPuzzle = (element: PuzzleItemProps) => {
    console.log(element)
    setPuzzles(current => [...current, element])
    setSelectedImages(current => [...current, element.id])
  }

  const addImage = (elements: PuzzleItemProps[]) => {
    setPuzzles([puzzles[0]])
    elements.map((item, index) => {
      console.log(item)
      item.img = item.img.currentSrc
      addPuzzle(item)
    })
  }

  const handleChangePuzzleColor = (color: string) => {
    const id = activeElements[0].attrs.id
    setPuzzles(current =>
      current.map(i => {
        if (i.id === id) i.color = color
        return i
      })
    )
  }

  const MintNFT = async () => {
    closeMintModal()

    let s = toStoreFormat(image)

    let arr = []
    for (let i = 0; i < s.byteLength; i++) {
      arr[i] = s[i]
    }

    console.log(principleId)

    puzzle.upload(arr)

    const rImage = await puzzle.uploadFinalize("image/png", {
      name: "puzzle",
      tags: ["puzzleImage"],
      description: "testPuzzle",
      filename: "???"
    })
    console.log("-------------------------------")
    console.log(rImage)
    console.log("-------------------------------")
    const r: any = await puzzle.mint({ address: principleId })
    console.log(r["ok"].toString())
    setTokenID(r["ok"].toString())
    const add = await puzzle.tokenId(Number(r["ok"].toString()))
    setTokenAdd(add)
    console.log(puzzle.getAll)

    setSuccessModal(true)
  }

  const ImageDownload = (type: string) => {
    let link = document.createElement("a")
    link.download = title
    link.href = image
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <PageLayout>
      <FileModal
        show={fileModal}
        closeModal={closeFileModal}
        addImage={addImage}
      />
      <MintModal
        show={mintModal}
        pId={principleId}
        image={image}
        title={title}
        mintClick={MintNFT}
        closeModal={closeMintModal}
      />
      <SuccessModal
        show={successModal}
        pId={tokenAdd}
        image={image}
        tId={tokenID}
        download={ImageDownload}
        closeModal={closeSuccessModal}
      />
      <Layout screenMode={!fullScreen}>
        <MenuBox screenMode={!fullScreen}>
          <Switch
            checked={bgColor}
            onChange={setBgColor}
            onColor="#fff"
            onHandleColor="#000"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={22}
            width={80}
            className="react-switch"
            id="material-switch"
          />
          <FileButton
            onClick={() => {
              setFileModal(true)
            }}
          >
            <AiOutlineFolderOpen size={25} />
          </FileButton>

          <ResizeButton onClick={() => setFullScreen(!fullScreen)}>
            <IoResize size={20} />
          </ResizeButton>
        </MenuBox>
        <DndProvider backend={HTML5Backend}>
          <Container>
            <Background flag={bgColor} screenMode={!fullScreen} />
            <MenuContainer screenMode={!fullScreen}>
              <Switch
                checked={bgColor}
                onChange={setBgColor}
                onColor="#fff"
                onHandleColor="#000"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={15}
                width={40}
                className="react-switch"
                id="material-switch"
              />
              <FileButton
                onClick={() => {
                  setFileModal(true)
                }}
              >
                <AiOutlineFolderOpen size={25} />
              </FileButton>
              <ResizeButton onClick={() => setFullScreen(!fullScreen)}>
                <IoResize size={20} />
              </ResizeButton>
            </MenuContainer>
            <DrawerContainer>
              <Drawer
                show={showDrawer}
                setShow={setShowDrawer}
                bgColor={bgColor}
                handleScale={handleScale}
                scale={scale}
                isActive={activeElements.length}
                handleDeletePuzzle={handleDeletePuzzle}
              />
            </DrawerContainer>
            <TitleContainer>
              <Title
                show={showDrawer}
                flag={bgColor}
                placeholder="Title"
                onChange={(event: any) => setTitle(event.target.value)}
              />
            </TitleContainer>
            <MintButtonContainer onClick={() => mint()}>
              <MintButton>Mint</MintButton>
            </MintButtonContainer>
            <Canvas>
              <Stage
                width={fullScreen ? window.innerWidth : 1024}
                height={fullScreen ? window.innerHeight : 650}
                ref={stageRef}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                onTouchStart={checkDeselect}
                onClick={onClickTap}
                scale={{ x: scale, y: scale }}
                x={stagePosition.x}
                y={stagePosition.y}
                draggable={true}
              >
                <Layer ref={layerRef}>
                  {puzzles.map((i, index) => (
                    <ImageElement
                      key={index}
                      id={i.id}
                      img={i.img}
                      x={i.x}
                      y={i.y}
                      width={i.width}
                      height={i.height}
                      rotation={i.rotation}
                      color={i.color}
                      draggable={i.draggable && !lockedImages.includes(i.id)}
                      changeColor={i.changeColor}
                      onDragStart={e => e.target.moveToTop()}
                      onDragEnd={e => handleDragEnd(e, i.id)}
                      onTransformEnd={e =>
                        setPuzzles(current =>
                          current.map(i => {
                            if (i.id === e.id) {
                              return { ...i, ...e }
                            }
                            return i
                          })
                        )
                      }
                      onSelect={e => {
                        if (
                          e.current !== undefined &&
                          !lockedImages.includes(e.current.attrs.id)
                        ) {
                          let temp = []
                          temp.push(e.current)
                          setActiveElements(temp)
                          trRef.current.nodes(temp)
                          trRef.current.getLayer().batchDraw()
                        }
                      }}
                    />
                  ))}
                  <Transformer
                    ref={trRef}
                    resizeEnabled={
                      activeElements.length > 1 ||
                      (
                        activeElements.length &&
                        puzzles.at(
                          puzzles.findIndex(
                            e => e.id === activeElements[0].attrs.id
                          )
                        )
                      ).resizeEnabled
                    }
                    rotateEnabled={
                      activeElements.length > 1 ||
                      (
                        activeElements.length &&
                        puzzles.at(
                          puzzles.findIndex(
                            e => e.id === activeElements[0].attrs.id
                          )
                        )
                      ).rotateEnabled
                    }
                    boundBoxFunc={(oldBox, newBox) => {
                      if (newBox.width < 30 || newBox.height < 30) {
                        return oldBox
                      }
                      return newBox
                    }}
                  />
                  <Rect ref={selectionImageRef} />
                </Layer>
              </Stage>
            </Canvas>
            <SidebarContainer>
              <Sidebar
                screenMode={fullScreen}
                flag={bgColor}
                selectedImages={selectedImages}
                lockedImages={lockedImages}
                puzzles={puzzles}
                addPuzzle={addPuzzle}
                setLockedImages={setLockedImages}
                handleDeletePuzzle={handleDeletePuzzle}
              />
            </SidebarContainer>
            <ColorPickerContainer>
              <ColorPicker
                screenMode={fullScreen}
                index={colorSlide}
                show={showColor}
                setShow={setShowColor}
                flag={bgColor}
                active={
                  activeElements.length &&
                  puzzles.at(
                    puzzles.findIndex(e => e.id === activeElements[0].attrs.id)
                  )?.changeColor
                }
                color={
                  activeElements.length &&
                  puzzles.at(
                    puzzles.findIndex(e => e.id === activeElements[0].attrs.id)
                  )?.color
                }
                handleChangeColor={handleChangePuzzleColor}
              />
            </ColorPickerContainer>
            {showColor && (
              <ColourSwiperContainer screenMode={fullScreen}>
                <SwiperWrapper>
                  <Swiper
                    onSwiper={s => {
                      setSwiper(s)
                    }}
                    slidesPerView={5}
                    centeredSlides={true}
                    navigation={{
                      prevEl: ".prevItem",
                      nextEl: ".nextItem"
                    }}
                    onSlideChange={swiper => {
                      setColorSlide(swiper.activeIndex)
                    }}
                    slideToClickedSlide
                  >
                    {Images.map((i, index) => {
                      if (i.group === 6) {
                        return (
                          <SwiperSlide
                            key={index}
                            className={
                              "Co" + (colorSlide + 1).toString() === i.id
                                ? "Deck Deck-selected"
                                : "Deck Deck-unselected"
                            }
                          >
                            <SwiperItem
                              onClick={() => {
                                setColorSlide(+i.id.slice(-i.id.length + 2) - 1)
                              }}
                            >
                              <Image
                                src={i.img}
                                alt="No Image"
                                width={80}
                                height={80}
                              ></Image>
                            </SwiperItem>
                          </SwiperSlide>
                        )
                      }
                    })}
                  </Swiper>
                  <div className="prevItem">
                    <PrevItem>
                      <IoIosArrowBack size={25} color="#94899f" />
                    </PrevItem>
                  </div>
                  <div className="nextItem">
                    <NextItem>
                      <IoIosArrowForward size={25} color="#94899f" />
                    </NextItem>
                  </div>
                </SwiperWrapper>
              </ColourSwiperContainer>
            )}
          </Container>
        </DndProvider>
      </Layout>
    </PageLayout>
  )
}

export default WorkingArea
