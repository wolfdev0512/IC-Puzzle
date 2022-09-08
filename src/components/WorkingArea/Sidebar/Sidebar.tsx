import React, { useState } from "react"
import Image from "next/image"

import randomize from "randomatic"

// Styled Components
import {
  Layout,
  Iconlayout,
  Container,
  Tools,
  ItemLayout,
  Icon,
  Tab,
  Wrapper,
  Puzzles,
  PuzzleItem,
  Layers,
  LayerItem,
  LayerImage
} from "./Sidebar.styled"

// Components
import Item from "./components/Item"
import Text from "components/Text"
import { Row } from "components/Layout"

// Assets
import { AiOutlineLeft, AiFillDelete } from "react-icons/ai"
import { FaLock, FaLockOpen } from "react-icons/fa"
import { BsPlusLg } from "react-icons/bs"

import IdentityIcon from "assets/png/identity.png"
import CustomizationIcon from "assets/png/customization.png"
import ShapesIcon from "assets/png/shapes.png"
import PuzzlesIcon from "assets/png/puzzle.png"
import LayerIcon from "assets/png/layer.png"

// Data
import { Images } from "utils/ImageData"

//Type
import { SidebarProps } from "types/components/Working"

//Notification
import { Store } from "react-notifications-component"

const tools = [
  { id: 1, title: "IDENTITY", icon: IdentityIcon },
  { id: 2, title: "CUSTOMIZATION", icon: CustomizationIcon },
  { id: 3, title: "SHAPES", icon: ShapesIcon },
  { id: 4, title: "PUZZLE", icon: PuzzlesIcon },
  { id: 5, title: "LAYERS", icon: LayerIcon }
]

const Sidebar: React.FC<SidebarProps> = ({
  flag,
  selectedImages,
  screenMode,
  lockedImages,
  puzzles,
  addPuzzle,
  setLockedImages,
  handleDeletePuzzle
}) => {
  const [currentTab, setCurrentTab] = useState<number | null>(null)
  const [show, setShow] = useState(true)

  const addShape = (itemId: string) => {
    let puzzle = puzzles.filter(i => i.id === itemId)[0]
    let tempPuzzle: any
    do {
      tempPuzzle = {
        ...puzzle,
        x: puzzle.x - 50,
        y: puzzle.y - 50,
        id: itemId.substr(0, 3) + randomize("Aa0", 3)
      }
    } while (puzzles.filter(i => i.id === tempPuzzle.id) === [])
    addPuzzle(tempPuzzle)
  }

  const handleDrag = (
    data: any,
    i: any,
    width: number | undefined,
    height: number | undefined
  ) => {
    const sidebar = document.getElementById("Sidebar")?.getBoundingClientRect()
    if (sidebar) {
      let { x, y } = data
      let _x: number
      let _y: number

      if (width === undefined || height === undefined) {
        width = 0
        height = 0
      }

      if (!screenMode) {
        _x = x - (window.innerWidth - 1024) / 2 - width / 4
        _y = y - (window.innerHeight - 650) / 2 - height / 4 - 35
      } else {
        _x = x - width / 4
        _y = y - height / 4
      }

      let color = ""

      if (currentTab == 1) {
        color = "#000000"
      }

      if (currentTab == 3) {
        color = "#3BA7C6"
      }

      if (
        _x < sidebar.left - sidebar.width ||
        _y > sidebar.height + sidebar.top
      ) {
        let element
        let tempId: string

        do {
          tempId = i.id.substr(0, 3) + randomize("Aa0", 3)
          element = {
            ...i,
            id: tempId,
            x: _x,
            y: _y,
            width: width / 2,
            height: height / 2,
            rotation: 0,
            color: color
          }
        } while (puzzles.filter(i => i.id === tempId) === [])

        addPuzzle(element)
      }
    }
  }

  const countId = (id: string) => {
    let count: number = 0
    for (let i: number = 0; i < selectedImages.length; i++) {
      if (selectedImages[i].substr(0, 3) == id) {
        count++
      }
    }
    return count
  }

  return (
    <Layout id="Sidebar">
      <Iconlayout flag={show} onClick={() => setShow(!show)}>
        <AiOutlineLeft color={flag ? "white" : "black"} size={20} />
      </Iconlayout>
      {show && (
        <Container>
          <Tools>
            {tools.map(i => (
              <ItemLayout
                key={i.id}
                onClick={() => setCurrentTab(i.id)}
                flag={currentTab === i.id}
              >
                <Icon>
                  <Image src={i.icon} alt="puzzle" width={15} height={15} />
                </Icon>
                <Text fSize={14} fWeight={500} fColor="#0B1D35">
                  {i.title}
                </Text>
              </ItemLayout>
            ))}
          </Tools>
          <Tab flag={currentTab !== null}>
            <Wrapper>
              {currentTab !== 5 ? (
                <Puzzles>
                  {Images.map(i => {
                    if (i.group === currentTab) {
                      return (
                        <PuzzleItem
                          key={i.id}
                          flag={countId(i.id) >= 10 || currentTab !== 3}
                        >
                          <Item
                            data={i}
                            key={i.id}
                            handleDrag={handleDrag}
                            count={countId(i.id)}
                          />
                        </PuzzleItem>
                      )
                    }
                  })}
                </Puzzles>
              ) : (
                <Layers>
                  {selectedImages.map((item, index) => {
                    return Images.map(i => {
                      if (i.id == item.substr(0, 3)) {
                        return (
                          <LayerItem key={index}>
                            <Row alignItems="center" gap={10}>
                              <LayerImage>
                                <Image
                                  src={i.img}
                                  height={25}
                                  width={25}
                                  alt="No image"
                                />
                              </LayerImage>
                              <Text fWeight={700} fSize={20}>
                                {index + 1}
                              </Text>
                            </Row>
                            <Row
                              alignItems="center"
                              justifyContent="flex-end"
                              padding="0px 10px 0px 0px"
                              gap={5}
                            >
                              {lockedImages.includes(item) ? (
                                <FaLock
                                  onClick={() =>
                                    setLockedImages(current =>
                                      current.filter(i => i !== item)
                                    )
                                  }
                                />
                              ) : (
                                <FaLockOpen
                                  onClick={() =>
                                    setLockedImages(current => [
                                      ...current,
                                      item
                                    ])
                                  }
                                />
                              )}
                              <BsPlusLg
                                onClick={() => {
                                  if (countId(item.substr(0, 3)) < 10) {
                                    addShape(item)
                                  } else {
                                    Store.addNotification({
                                      title: "Warning",
                                      message: "You can only add 10",
                                      type: "danger",
                                      insert: "top",
                                      container: "top-right",
                                      animationIn: [
                                        "animate__animated",
                                        "animate__fadeIn"
                                      ],
                                      animationOut: [
                                        "animate__animated",
                                        "animate__fadeOut"
                                      ],
                                      dismiss: {
                                        duration: 5000,
                                        onScreen: true
                                      }
                                    })
                                  }
                                }}
                              />
                              <AiFillDelete
                                onClick={() => {
                                  handleDeletePuzzle(item)
                                }}
                              />
                            </Row>
                          </LayerItem>
                        )
                      }
                    })
                  })}
                </Layers>
              )}
            </Wrapper>
          </Tab>
        </Container>
      )}
    </Layout>
  )
}

export default Sidebar
