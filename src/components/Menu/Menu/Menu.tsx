import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"

//Styled Components
import {
  Layout,
  WalletBox,
  WalletItem,
  ImageContainer,
  SolvePuzzle,
  MenuItem
} from "./Menu.styled"

import { CopyToClipboard } from "react-copy-to-clipboard"

//Components
import Text from "components/Text"

//Context
import { useWallet } from "context/WalletContext"
import { Row } from "components/Layout"

//Assets
import { FiCopy } from "react-icons/fi"
import { FcCheckmark } from "react-icons/fc"
import { BiUserCircle } from "react-icons/bi"
import { AiOutlineSetting } from "react-icons/ai"
import { GrPower } from "react-icons/gr"
import ICImage from "assets/png/IC.png"
import TempImage from "assets/png/temp.png"

//TempData

const Data = [
  { image: ICImage, text: "Balance", amount: "0", unit: "ICP" },
  { image: TempImage, text: "Puzzle NFTs", amount: "0", unit: "NFTs" },
  { image: TempImage, text: "Puzzle NFTs", amount: "0", unit: "NFTs" }
]

//-------------------------------------------------------------

export interface MenuProps {
  flag: boolean
  setFlag: () => void
}

const Menu: React.FC<MenuProps> = ({ flag, setFlag }) => {
  const router = useRouter()
  const dropMenuRef = useRef<any>(null)
  const { principleId, setContextPrincipleID } = useWallet()
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    setCopied(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [copied])

  const handleClickOutside = (e: any) => {
    if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {
      return
    }
    setFlag()
  }

  useEffect(() => {
    if (flag) {
      document.addEventListener("click", handleClickOutside)
    } else {
      document.removeEventListener("click", handleClickOutside)
    }
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [flag])

  return (
    <Layout ref={dropMenuRef} show={flag}>
      <Row alignItems="center" gap={20}>
        <Text fWeight={700} fSize={16} padding="0px 0px 0px 15px">
          {principleId.substr(0, 15) +
            "..." +
            principleId.substr(principleId.length - 3, 3)}
        </Text>
        <CopyToClipboard onCopy={onCopy} text={principleId}>
          {copied ? (
            <FcCheckmark size={20} />
          ) : (
            <FiCopy size={20} style={{ cursor: "pointer" }} />
          )}
        </CopyToClipboard>
      </Row>
      <WalletBox>
        {Data.map((item, index) => (
          <WalletItem key={index}>
            <ImageContainer>
              <Image
                src={item.image}
                objectFit="contain"
                objectPosition="center center"
                alt="No Image"
                width={40}
                height={40}
              ></Image>
            </ImageContainer>
            <Row flexDirection="column" gap={5}>
              <Text>{item.text}</Text>
              <Row gap={5}>
                <Text fSize={15} fWeight={700}>
                  {item.amount}
                </Text>
                <Text fSize={15} fWeight={700}>
                  {item.unit}
                </Text>
              </Row>
            </Row>
          </WalletItem>
        ))}
        <SolvePuzzle>Solve Puzzles & win rewards</SolvePuzzle>
      </WalletBox>
      <MenuItem
        whileHover={{ scale: 1.1 }}
        // onClick={() => {
        //   router.push("/MyWallet")
        // }}
      >
        <BiUserCircle size={25} />
        <Text>My profile</Text>
      </MenuItem>
      <MenuItem
        whileHover={{ scale: 1.1 }}
        // onClick={() => {
        //   router.push("/EditProfile")
        // }}
      >
        <AiOutlineSetting size={25} />
        <Text>Edit profile</Text>
      </MenuItem>
      <MenuItem
        whileHover={{ scale: 1.1 }}
        onClick={() => {
          setContextPrincipleID("")
          setFlag()
        }}
      >
        <GrPower size={25} />
        <Text>Sign out</Text>
      </MenuItem>
    </Layout>
  )
}
export default Menu
