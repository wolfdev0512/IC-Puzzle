import React from "react"

// styled component
import { Layout } from "./ItemBox.styled"

// components
import Text from "components/Text"
import { Row } from "components/Layout"
import { TypeItem } from "components/TypeItem"

//tempData

import { TypeItemData } from "utils/tempData/TypeItem"
// -----------------------------------------------------------

const ItemBox: React.FC = () => {
  return (
    <Layout>
      <Row
        justifyContent="flex-start"
        flexDirection="column"
        mWidth={1250}
        responsive={{ 1024: { mWidth: 900 }, 768: { alignItems: "center" } }}
        data-aos="fade-up"
      >
        <Text fSize={40} fWeight={700} responsive={{ 768: { fSize: 30 } }}>
          Choose Type
        </Text>
        <Text
          fSize={20}
          fWeight={400}
          padding="15px 0px 0px 0px"
          mWidth={1000}
          responsive={{
            768: { tAlign: "center", fSize: 16 },
            500: { fSize: 14 }
          }}
        >
          Choose canvas type “Collaborative” for completing Puzzles along with
          community members or “Personal” to create unique Puzzle NFTs.
        </Text>
      </Row>
      <Row
        justifyContent="center"
        padding="50px 0px 0px 10px"
        mWidth={1250}
        gap={100}
        responsive={{
          768: { flexDirection: "column", alignItems: "center", gap: 30 }
        }}
      >
        <TypeItem data={TypeItemData[0]}></TypeItem>
        <TypeItem data={TypeItemData[1]}></TypeItem>
      </Row>
    </Layout>
  )
}

export default ItemBox
