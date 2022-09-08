import React from "react"
import Image from "next/image"
import { useRouter } from "next/router"
//Styled Component
import { Layout, ImageLayout } from "./TypeItem.styled"

//component
import Text from "components/Text"
import { Row } from "components/Layout"

//Types

import { TypeItemProps } from "types/components/TypeItem"

//-------------------------------------------------------------

const TypeItem: React.FC<{ data: TypeItemProps }> = ({ data }) => {
  const router = useRouter()
  return (
    <Layout
      onClick={() => {
        router.push("/workingarea")
      }}
      data-aos="zoom-in"
    >
      <Row
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        mWidth={280}
        responsive={{ 1024: { mWidth: 200 } }}
      >
        <ImageLayout>
          <Image src={data.image} alt="No Image" layout="fill"></Image>
        </ImageLayout>
        <Text
          padding="30px 0px 0px 0px"
          tAlign="center"
          fWeight={600}
          fSize={30}
          responsive={{ 1024: { fSize: 20 } }}
        >
          {data.title}
        </Text>
        <Text
          padding="30px 0px 0px 0px"
          tAlign="center"
          fWeight={400}
          fSize={15}
          responsive={{ 1024: { fSize: 12 } }}
        >
          {data.detail}
        </Text>
      </Row>
    </Layout>
  )
}

export default TypeItem
