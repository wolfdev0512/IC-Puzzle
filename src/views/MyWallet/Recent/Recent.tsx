import React, { useState } from "react"

// styled component
import { Layout, MenuItem, Line, RecentButton, Button } from "./Recent.styled"

// components
import Text from "components/Text"
import { Col, Row } from "components/Layout"

// -----------------------------------------------------------

const Recent: React.FC = () => {
  const [menuItem, setMenuItem] = useState(0)

  return (
    <Layout>
      <div style={{ width: "100%" }} data-aos="fade-up">
        <Row
          justifyContent="center"
          gap={20}
          responsive={{ 425: { gap: "0" } }}
          data-aos="fade-up"
        >
          <MenuItem
            onClick={() => setMenuItem(0)}
            flag={menuItem == 0 ? true : false}
          >
            On Sale
          </MenuItem>
          <MenuItem
            onClick={() => setMenuItem(1)}
            flag={menuItem == 1 ? true : false}
          >
            Owned
          </MenuItem>
          <MenuItem
            onClick={() => setMenuItem(2)}
            flag={menuItem == 2 ? true : false}
          >
            Create
          </MenuItem>
        </Row>
        <Line />
      </div>
      <Row
        padding="30px 0px 0px 0px"
        justifyContent="flex-end"
        data-aos="fade-up"
      >
        <RecentButton>Recently added</RecentButton>
      </Row>
      <Row
        alignItems="center"
        flexDirection="column"
        padding="100px 0px 0px 0px"
        mWidth={500}
        data-aos="zoom-in"
      >
        <Text fSize={20} fWeight={600} responsive={{ 768: { fSize: 16 } }}>
          No items found
        </Text>
        <Text
          fSize={16}
          fWeight={600}
          padding="35px 0px 0px 0px"
          tAlign="center"
          responsive={{ 768: { fSize: 14 } }}
        >
          Come back soon! Or try to browse something for you on our marketplace
          Or Create your own Puzzle NFT
        </Text>
        <Row
          justifyContent="center"
          gap={50}
          padding="50px 0px 0px 0px"
          responsive={{ 768: { gap: 20 } }}
        >
          <Button>Browse</Button>
          <Button>Create</Button>
        </Row>
      </Row>
    </Layout>
  )
}

export default Recent
