import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

// Styled component
import { Layout, LoginLayout, ImageContainer, GoApp } from "./WorkItem.styled"

// Component

import Text from "components/Text"
import { Row } from "components/Layout"
import { WalletConnect } from "components/Button"

// Asserts

import ICImage from "assets/png/IC.png"
import Work1 from "assets/png/work_1.png"

// context
import { useWallet } from "context/WalletContext"

//Notification
import { Store } from "react-notifications-component"

// -----------------------------------------------------------
import { WorkItemProps } from "types/components/Work"

const WorkItem: React.FC<WorkItemProps> = ({ image, detail, type, fSize }) => {
  const router = useRouter()

  const { principleId } = useWallet()
  if (type == 0) {
    return (
      <Layout data-aos="fade-up">
        <ImageContainer>
          <Image
            width={50}
            height={50}
            src={Work1}
            objectFit="contain"
            objectPosition="center center"
            alt="No Image"
          ></Image>
        </ImageContainer>
        <Text
          padding="28px 0px 0px 0px"
          fWeight={600}
          fSize={32}
          mWidth={270}
          lHeight={30}
        >
          WELCOME TO
        </Text>
        <Text fWeight={800} fSize={32} lHeight={32}>
          ICPUZZLE
        </Text>
      </Layout>
    )
  } else if (type == 1) {
    return (
      <LoginLayout data-aos="fade-up">
        <ImageContainer>
          <Image width={50} height={30} src={ICImage} alt="No Image"></Image>
        </ImageContainer>
        <Text
          padding="28px 0px 0px 0px "
          fWeight={600}
          fSize={24}
          fColor="white"
        >
          LOGIN
        </Text>
        <Text fWeight={600} fSize={18} fColor="white">
          using Stoic Wallet
        </Text>

        <Row justifyContent="flex-end">
          <WalletConnect type={3}></WalletConnect>
        </Row>
      </LoginLayout>
    )
  } else if (type == 2) {
    return (
      <Layout data-aos="fade-up">
        <GoApp
          onClick={() => {
            if (principleId === "") {
              Store.addNotification({
                title: "Warning",
                message: "You have to connect wallet",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              })
            } else {
              router.push("/workingarea")
            }
          }}
        >
          Go to app
        </GoApp>
        <Text padding="28px 0px 0px 0px " fWeight={600} fSize={fSize}>
          Choose between Personal or Community canvas. Community canvas is to
          solve puzzles and earn rewards or to create together.
        </Text>
      </Layout>
    )
  } else {
    return (
      <Layout data-aos="fade-up">
        <ImageContainer>
          <Image
            width={50}
            height={50}
            src={image}
            alt="No Image"
            objectFit="contain"
            objectPosition="center center"
          ></Image>
        </ImageContainer>
        <Text padding="28px 0px 0px 0px " fWeight={600} fSize={fSize}>
          {detail}
        </Text>
      </Layout>
    )
  }
}

export default WorkItem
