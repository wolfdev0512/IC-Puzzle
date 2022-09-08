import React from "react"
import Image from "next/image"

// Styled component
import {
  Layout,
  LayoutComing,
  MainImageContainer,
  SubImageContainer
} from "./CollectionItem.styled"

// Component

import Text from "components/Text"
import { Col } from "components/Layout"

//Type

import { CollectionItemProps } from "types/components/Collection"

// -----------------------------------------------------------

const CollectionItem: React.FC<{ data: CollectionItemProps }> = ({ data }) => {
  if (data.coming) {
    return (
      <LayoutComing data-aos="fade-up">
        <Col>
          <Text
            fWeight={600}
            fSize={18}
            lHeight={24}
            tAlign="center"
            fColor="white"
          >
            PuzzleVerse
          </Text>
          <Text
            fWeight={800}
            fSize={24}
            lHeight={28}
            padding="36px 0px 0px 0px"
            fColor="white"
          >
            COMING SOON!!!
          </Text>
        </Col>
      </LayoutComing>
    )
  }
  return (
    <Layout data-aos="fade-up">
      <MainImageContainer>
        <Image
          src={data.mImage}
          alt="No Image"
          width={100}
          height={100}
          objectFit="contain"
          objectPosition="center center"
        ></Image>
      </MainImageContainer>
      <SubImageContainer>
        <Image
          src={data.sImage}
          alt="No Image"
          width={30}
          height={30}
          objectFit="contain"
          objectPosition="center center"
        ></Image>
      </SubImageContainer>
      <Text
        padding="12px 0px 0px 0px"
        fWeight={800}
        fSize={20}
        lHeight={22}
        tAlign="center"
      >
        {data.title}
      </Text>
      <Text
        padding="14px 0px 0px 0px"
        tAlign="center"
        fWeight={600}
        fSize={16}
        lHeight={22}
      >
        {data.subTitle}
      </Text>
      <Text tAlign="center" fWeight={600} fSize={16} lHeight={22}>
        {data.detail}
      </Text>
    </Layout>
  )
}

export default CollectionItem
