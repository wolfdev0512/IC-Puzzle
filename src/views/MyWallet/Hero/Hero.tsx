import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"

// styled component

import {
  Layout,
  Banner,
  Profile,
  PrincipalId,
  EditProfile,
  ShareProfile,
  UploadImage,
  Imagelayout
} from "./Hero.styled"

// components
import Text from "components/Text"
import { Col, Row } from "components/Layout"

// context
import { useWallet } from "context/WalletContext"

//assets

import TempImage from "assets/png/temp.png"
import ICImage from "assets/png/IC.png"
import { AiOutlineArrowUp, AiOutlineEllipsis } from "react-icons/ai"

// -----------------------------------------------------------

const Hero: React.FC = () => {
  const { principleId } = useWallet()
  const router = useRouter()
  return (
    <Layout id="MYWallet">
      <Banner data-aos="zoom-in"></Banner>
      <Profile data-aos="fade-up">
        <Image src={TempImage} alt="No Image" layout="fill" />
      </Profile>
      <PrincipalId data-aos="fade-up">
        <Imagelayout>
          <img src={ICImage} alt="No Image"></img>
        </Imagelayout>
        {principleId != ""
          ? principleId.substr(0, 15) + "..."
          : "Wallet Connect"}
      </PrincipalId>
      <div
        data-aos="fade-up"
        style={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Row
          padding="40px 0px 0px 0px"
          justifyContent="space-between"
          mWidth={400}
          responsive={{
            1024: { mWidth: 320, padding: "30px 0px 0px 0px" },
            768: { mWidth: 270, padding: "20px 0px 0px 0px" }
          }}
        >
          <EditProfile
            onClick={() => {
              router.push("/EditProfile")
            }}
          >
            Edit profile
          </EditProfile>
          <Row mWidth={120} gap={15}>
            <ShareProfile>
              <AiOutlineArrowUp size={25}></AiOutlineArrowUp>
            </ShareProfile>
            <UploadImage>
              <AiOutlineEllipsis size={25}></AiOutlineEllipsis>
            </UploadImage>
          </Row>
        </Row>
      </div>
    </Layout>
  )
}

export default Hero
