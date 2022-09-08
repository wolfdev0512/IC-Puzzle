import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

// Styled component
import {
  Layout,
  ImageContainer,
  GoApp,
  ICImageLayout,
  TextPuzzle,
  TextIC,
  MoButContainer
} from "./Hero.styled"

// Assets
// import LanHero from "assets/png/Hero_Index.png"
import IC from "assets/png/IC.png"

// Component

import Text from "components/Text"
import { Row, Col } from "components/Layout"

// context
import { useWallet } from "context/WalletContext"

//Notification
import { Store } from "react-notifications-component"

// -----------------------------------------------------------

const Hero: React.FC = () => {
  const router = useRouter()

  const { principleId } = useWallet()
  return (
    <Layout>
      <TextPuzzle data-aos="fade-right">
        <Col
          padding="10px 30px 0px 0px"
          mWidth={230}
          responsive={{ 900: { padding: "0px", mWidth: 900 } }}
        >
          <Text
            fWeight={800}
            fSize={50}
            lHeight={56}
            tAlign="center"
            responsive={{
              1024: { fSize: 40 },
              900: { fSize: 50 },
              768: { fSize: 40 },
              375: { fSize: 30 }
            }}
          >
            ICPuzzle
          </Text>
          <Text
            padding="9px 0px 0px 18px"
            fWeight={600}
            fSize={20}
            lHeight={28}
            tAlign="left"
            responsive={{
              1024: { fSize: 20 },
              900: { padding: "30px 0px 0px 0px", tAlign: "center" },
              768: { padding: "15px 0px 0px 0px", fSize: 16 },
              375: { fSize: 14 }
            }}
          >
            Create, Solve, Play, Buy, Sell, Trade.
          </Text>
          <Row
            justifyContent="flex-end"
            padding="50px 18px 0px 0px"
            responsive={{ 900: { display: "none" } }}
          >
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
              Go to App
            </GoApp>
          </Row>
        </Col>
      </TextPuzzle>
      <ImageContainer data-aos="zoom-in">
        <img src="/image/Hero_Index.png" alt="No Image" />
      </ImageContainer>
      <TextIC data-aos="fade-left">
        <Col>
          <Text
            fWeight={600}
            fSize={24}
            lHeight={30}
            responsive={{
              1200: { fSize: 20 },
              900: { fSize: 25, tAlign: "center" },
              768: { fSize: 16 },
              375: { fSize: 14 }
            }}
          >
            Built & hosted on
          </Text>
          <Text
            fWeight={800}
            fSize={25}
            lHeight={30}
            responsive={{
              1024: { fSize: 20 },
              900: {
                padding: "15px 0px 0px 0px",
                fSize: 50,
                lHeight: 54,
                tAlign: "center"
              },
              768: { fSize: 40 },
              375: { fSize: 30 }
            }}
          >
            The Internet
          </Text>
          <Row
            gap={10}
            responsive={{
              900: { flexDirection: "column", alignItems: "center" }
            }}
          >
            <Text
              mode="span"
              fWeight={800}
              fSize={25}
              lHeight={30}
              responsive={{
                1024: { fSize: 20 },
                900: {
                  padding: "8px 0px 0px 0px",
                  fSize: 50,
                  lHeight: 54,
                  tAlign: "center"
                },
                768: { fSize: 40, lHeight: 40 },
                375: { fSize: 30, lHeight: 30 }
              }}
            >
              Computer
            </Text>
            <ICImageLayout>
              <Image src={IC} alt="No Image" layout="fill"></Image>
            </ICImageLayout>
          </Row>
        </Col>
      </TextIC>
      <MoButContainer data-aos="fade-left">
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
          Go to App
        </GoApp>
      </MoButContainer>
    </Layout>
  )
}

export default Hero
