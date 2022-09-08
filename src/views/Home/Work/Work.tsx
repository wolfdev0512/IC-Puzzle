import React from "react"

// Styled component
import { Layout, GridLayout } from "./Work.styled"

// Component

import Text from "components/Text"
import { Row } from "components/Layout"
import { WorkItem } from "components/WorkItem"

// Temp Data

import { WorkItemData } from "utils/tempData/WorkItem"

// -----------------------------------------------------------
const Work: React.FC = () => {
  return (
    <Layout id="Howitworks">
      <Row
        justifyContent="center"
        gap={50}
        responsive={{
          1250: {
            flexDirection: "column-reverse",
            alignItems: "center",
            gap: "0"
          }
        }}
      >
        <Row
          justifyContent="flex-end"
          gap={50}
          mWidth={590}
          responsive={{
            1250: { padding: "50px 0px 0px 0px", fSize: 50 },
            700: {
              flexDirection: "column",
              alignItems: "center",
              gap: "50"
            }
          }}
        >
          <WorkItem type={WorkItemData[0].type}></WorkItem>
          <WorkItem type={WorkItemData[1].type}></WorkItem>
        </Row>
        <Row mWidth={590} justifyContent="center" data-aos="fade-up">
          <Text
            padding="20px"
            fColor="#0B1D35"
            fSize={50}
            fWeight={800}
            responsive={{
              768: { fSize: 40 },
              375: { fSize: 30 }
            }}
          >
            How it works
          </Text>
        </Row>
      </Row>
      <GridLayout>
        {WorkItemData.map((item, index) => {
          if (index > 1) {
            return (
              <WorkItem
                key={index}
                image={item.image}
                detail={item.detail}
                type={item.type}
              ></WorkItem>
            )
          }
        })}
      </GridLayout>
    </Layout>
  )
}

export default Work
