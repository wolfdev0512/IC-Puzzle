import React from "react"
import Image from "next/image"

// Styled component
import { Layout, PlayerContainer, PlayContainer } from "./Video.styled"

// Component

import Text from "components/Text"
import { Row, Col } from "components/Layout"

//Assets

import Play from "assets/png/play.png"

// -----------------------------------------------------------

const Video: React.FC = () => {
  return (
    <Layout id="ICPuzzle">
      <PlayerContainer data-aos="fade-right">
        <PlayContainer whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Image src={Play} alt="No Image" width={70} height={70}></Image>
        </PlayContainer>
      </PlayerContainer>

      <Row
        mWidth={550}
        alignItems="center"
        padding="0px 0px 0px 130px"
        responsive={{
          1200: { mWidth: 500, padding: "0px 0px 0px 80px" },
          1024: { mWidth: 400 },
          900: { mWidth: 550, padding: "0px 0px 0px 0px" },
          600: { mWidth: 400 },
          425: { mWidth: 320 }
        }}
        data-aos="fade-left"
      >
        <Col>
          <Text
            fColor="#0B1D35"
            fWeight={800}
            fSize={50}
            lHeight={56}
            responsive={{
              1024: { fSize: 40 },
              900: { fSize: 50, tAlign: "center" },
              768: { fSize: 40 },
              375: { fSize: 30 }
            }}
          >
            ICPuzzles
          </Text>
          <Text
            fColor="#0B1D35"
            padding="54px 0px 0px 0px"
            fWeight={400}
            fSize={20}
            lHeight={30}
            responsive={{
              1024: { fSize: 16, lHeight: 20, padding: "30px 0px 0px 0px" },
              900: { fSize: 20, lHeight: 30, tAlign: "center" },
              768: { padding: "20px 0px 0px 0px", fSize: 16 },
              375: { fSize: 14 }
            }}
          >
            {
              "Our NFTs have exciting new properties: they're unique, provably scarce, tradeadle, and usable across multiple applications."
            }
          </Text>
          <Text
            fColor="#0B1D35"
            padding="12px 0px 0px 0px "
            fWeight={400}
            fSize={20}
            lHeight={30}
            responsive={{
              1024: { fSize: 16, lHeight: 20, padding: "9px 0px 0px 0px" },
              900: { fSize: 20, lHeight: 30, tAlign: "center" },
              768: { padding: "5px 0px 0px 0px", fSize: 16 },
              375: { fSize: 14 }
            }}
          >
            Just like physical goods, you can do whatever you want with them!
          </Text>
        </Col>
      </Row>
    </Layout>
  )
}

export default Video
