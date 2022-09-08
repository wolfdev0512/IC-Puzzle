import React from "react"
import Image from "next/image"

//styled components
import { Layout, Iconlayout, MenuIconlayout } from "./Drawer.styled"

//assets
import { AiOutlineRight } from "react-icons/ai"
import { MdDelete } from "react-icons/md"

import ScaleUp from "assets/png/scaleUp.png"
import ScaleDown from "assets/png/scaleDown.png"

//type
import { DrawerProps } from "types/components/Working"

//=================================================================

const Drawer: React.FC<DrawerProps> = ({
  scale,
  isActive,
  handleScale,
  handleDeletePuzzle,
  bgColor,
  show,
  setShow
}) => {
  return (
    <Layout>
      <Iconlayout flag={show} onClick={() => setShow(!show)}>
        <AiOutlineRight size={20} color={bgColor ? "white" : "black"} />
      </Iconlayout>
      {show && (
        <>
          <MenuIconlayout onClick={() => scale < 2.8 && handleScale("+")}>
            <Image src={ScaleUp} width={20} height={20} alt="No Image"></Image>
          </MenuIconlayout>
          <MenuIconlayout onClick={() => scale > 0.4 && handleScale("-")}>
            <Image
              src={ScaleDown}
              width={20}
              height={20}
              alt="No Image"
            ></Image>
          </MenuIconlayout>
          <MenuIconlayout onClick={() => handleDeletePuzzle("")}>
            <MdDelete size={20} color={!isActive ? "grey" : "black"} />
          </MenuIconlayout>
        </>
      )}
    </Layout>
  )
}

export default Drawer
