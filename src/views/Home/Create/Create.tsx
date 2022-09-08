import React from "react"
import { useRouter } from "next/router"

// Styled component
import { Layout, ItemList, CreateButton } from "./Create.styled"

// Component

import Text from "components/Text"
import { Row, Col } from "components/Layout"
import { NFTItem } from "components/NFTItem"

// context
import { useWallet } from "context/WalletContext"

//Notification
import { Store } from "react-notifications-component"

// -----------------------------------------------------------

const Create: React.FC = () => {
  const router = useRouter()
  const { principleId } = useWallet()
  return (
    <Layout id="CreateownNFT">
      <Row
        justifyContent="flex-end"
        padding="70px 0px 0px 0px"
        responsive={{ 1250: { justifyContent: "center" } }}
      >
        <Row mWidth={590}>
          <Col>
            <Text
              fSize={40}
              fWeight={800}
              responsive={{ 1250: { tAlign: "center" } }}
              data-aos="fade-right"
            >
              Create Your Own NFTs, Solve Community Puzzles, Build, Solve,
              Trade.
            </Text>
            <Text
              fSize={25}
              fWeight={600}
              padding="18px 0px 0px 0px"
              responsive={{ 1250: { tAlign: "center" } }}
              data-aos="fade-right"
            >
              An unique artistic NFT marketplace build with tools that provide
              users ability to digitally paint, customise, create NFTs using
              NFTs.
            </Text>
            <Row
              responsive={{ 1250: { justifyContent: "center" } }}
              data-aos="fade-right"
            >
              <CreateButton
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
                Create NFT
              </CreateButton>
            </Row>
          </Col>
        </Row>
      </Row>
      <Row
        justifyContent="flex-start"
        responsive={{
          1250: { justifyContent: "center", padding: "50px 0px 0px 0px" }
        }}
      >
        <ItemList>
          <NFTItem back="black" subBack="white" />
          <NFTItem back="white" subBack="black" />
          <NFTItem back="white" subBack="black" />
          <NFTItem back="black" subBack="white" />
        </ItemList>
      </Row>
    </Layout>
  )
}

export default Create
