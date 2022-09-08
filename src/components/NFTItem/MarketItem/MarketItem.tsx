import React from "react"
import Image from "next/image"

// styled component
import {
  ImageContainer,
  Layout,
  BuyButton,
  IconContainer
} from "./MarketItem.styled"

// component

import Text from "components/Text"
import { Row } from "components/Layout"

//assets
import ICImage from "assets/png/IC.png"

//  types
import { NFTItemProps } from "types/components/NFT"
// -----------------------------------------------------------

const MarketItem: React.FC<{ data: NFTItemProps }> = ({ data }) => {
  return (
    <Layout data-aos="fade-up">
      <ImageContainer>
        <Image
          className="NFTImage"
          src={data.image}
          width={240}
          height={280}
          alt="No Image"
        />
        <style jsx global>{`
          .NFTImage {
            border-radius: 30px;
          }
        `}</style>
      </ImageContainer>
      <Row justifyContent="space-between" padding="10px 20px 0px 20px">
        <Text fSize={26} fWeight={800}>
          {data.title}
        </Text>
        <Text fSize={26} fWeight={800}>
          {data.mint}
        </Text>
      </Row>
      <Row gap={9} padding="17px 20px 0px 20px">
        <Text fSize={18} fWeight={600}>
          Pieces Used
        </Text>
        <Text fSize={18} fWeight={800}>
          {data.piece}
        </Text>
      </Row>
      <Text padding="10px 20px 20px 10px" fSize={18} fWeight={800}>
        {data.address}
      </Text>
      <BuyButton>
        <Row justifyContent="center" gap={10} alignItems="center">
          <Text fSize={20} fWeight={800}>
            Buy 10 ICP
          </Text>
          <IconContainer>
            <Image src={ICImage} height={15} width={30} alt="No Image"></Image>
          </IconContainer>
        </Row>
      </BuyButton>
    </Layout>
  )
}

export default MarketItem
