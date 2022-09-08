import React from "react"

// Styled component
import { Layout, CollectionItems, Button } from "./Creators.styled"

// Component

import Text from "components/Text"
import { Row } from "components/Layout"
import { WorkItem } from "components/WorkItem"

// TempData

import { CreatorItemData } from "utils/tempData/Creator"

// -----------------------------------------------------------

const TopCollection: React.FC = () => {
  return (
    <div id="Creator">
      <Layout>
        <Row
          justifyContent="space-between"
          alignItems="flex-end"
          padding="0px 200px"
          responsive={{
            1250: { justifyContent: "center" },
            700: { justifyContent: "flex-start", padding: "0px 100px" },
            425: { padding: "0px 50px" }
          }}
          data-aos="fade-up"
        >
          <Text
            fWeight={800}
            fSize={50}
            responsive={{
              768: { fSize: 40 },
              425: { fSize: 30 }
            }}
            fColor="#0B1D35"
          >
            Creators
          </Text>
          <Row
            justifyContent="flex-end"
            responsive={{ 1250: { display: "none" } }}
          >
            <Button>Explore Creators</Button>
          </Row>
        </Row>
        <CollectionItems>
          {CreatorItemData.map((item, index) => {
            return (
              <WorkItem image={item.image} detail={item.detail} key={index} />
            )
          })}
        </CollectionItems>
        <Row
          display="none"
          responsive={{ 1250: { display: "flex" } }}
          justifyContent="center"
          padding="50px 0px 0px 0px"
          data-aos="fade-up"
        >
          <Button>Explore Creators</Button>
        </Row>
      </Layout>
    </div>
  )
}

export default TopCollection
