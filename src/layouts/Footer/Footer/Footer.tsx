import React from "react"
import Image from "next/image"

// styled component
import {
  Layout,
  EmailInputContainer,
  EmailInput,
  SignUpButton,
  ImageContainer,
  Contact,
  MobileLayout,
  IconContainer
} from "./Footer.styled"

// assets
// import Logo from "assets/png/MainLogo.png"
import Discord from "assets/png/discord.png"
import Twitter from "assets/png/twitter.png"

// component

import Text from "components/Text"
import { Col, Row } from "components/Layout"
import { MdOutlineEmail } from "react-icons/md"
import { BsDiscord, BsTwitter } from "react-icons/bs"

// -----------------------------------------------------------

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Layout>
        <Row alignItems="center" gap={8} padding="0px 0px 20px 0px">
          <ImageContainer>
            <img src={"/image/MainLogo.png"} alt="No Image" />
          </ImageContainer>
          <Text
            fSize={30}
            lHeight={30}
            fWeight={800}
            fColor="#000000"
            responsive={{ 1024: { fSize: 20, fWeight: 700 } }}
          >
            ICPuzzle
          </Text>
        </Row>
        <Row padding="0px 0px 24px 0px" gap={16}>
          <EmailInputContainer>
            <MdOutlineEmail color="#666666" width={20} height={20} />
            <EmailInput placeholder="Email address" />
          </EmailInputContainer>
          <SignUpButton>Sign Up</SignUpButton>
        </Row>
        <Row padding="0px 0px 68px 5px" gap={20}>
          <BsTwitter
            size={40}
            onClick={() => {
              window.location.href = "https://twitter.com/myartbar"
            }}
          />
        </Row>
        <Contact>
          <Col>
            <Text
              fSize={16}
              lHeight={18}
              fWeight={600}
              tFont="Montserrat"
              fStyle="normal"
              fColor="#000000"
              padding="0px 0px 7px 0px"
            >
              Contact Us
            </Text>
            <Text
              fSize={16}
              lHeight={18}
              fWeight={600}
              fColor="#000000"
              padding="0px 0px 10px 0px"
            >
              Terms of Services
            </Text>
          </Col>
        </Contact>
        <Row alignItems="flex-end" justifyContent="center">
          <Text
            fSize={16}
            lHeight={18}
            fWeight={600}
            fColor="#000000"
            padding="0px 0px 12px 0px"
          >
            2022. All Rights reserved.
          </Text>
        </Row>
      </Layout>
      <MobileLayout>
        <Row padding="0px 0px 10px 0px">
          <Row alignItems="center" gap={8}>
            <ImageContainer>
              <img src={"/image/MainLogo.png"} alt="No Image" />
            </ImageContainer>
            <Text
              fSize={30}
              lHeight={30}
              fWeight={800}
              fColor="#000000"
              responsive={{ 1024: { fSize: 20, fWeight: 700 } }}
            >
              ICPuzzle
            </Text>
          </Row>
          <Row
            gap={20}
            alignItems="center"
            justifyContent="flex-end"
            responsive={{ 425: { gap: 10 } }}
          >
            <IconContainer>
              <Image
                src={Twitter}
                alt="No Image"
                width={30}
                height={30}
                onClick={() => {
                  window.location.href = "https://twitter.com/myartbar"
                }}
              />
            </IconContainer>
          </Row>
        </Row>

        <EmailInputContainer>
          <MdOutlineEmail color="#666666" width={20} height={20} />
          <EmailInput placeholder="Email address" />
        </EmailInputContainer>
        <SignUpButton>Sign Up</SignUpButton>
        <Row
          justifyContent="space-between"
          alignItems="flex-end"
          padding="40px 0px 0px 0px"
        >
          <Row>
            <Text fWeight={500} fSize={14} lHeight={24} fColor="#0B1D35">
              Terms of use
            </Text>
          </Row>
          <Row justifyContent="center">
            <Text
              fWeight={500}
              fSize={14}
              lHeight={24}
              fColor="#0B1D35"
              tAlign="center"
            >
              Privacy Policy
            </Text>
          </Row>
          <Row></Row>
        </Row>
      </MobileLayout>
    </React.Fragment>
  )
}

export default Footer
