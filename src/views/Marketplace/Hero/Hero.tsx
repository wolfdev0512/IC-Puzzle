import React from "react"
import Image from "next/image"

// Styled component
import { Layout, ImageContainer } from "./Hero.styled"

//Assets

import BackImage from "assets/png/Hero_Market.png"

// -----------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout data-aos="zoom-in">
      <ImageContainer>
        <Image src={BackImage} alt="No Image" width={200} height={200}></Image>
      </ImageContainer>
    </Layout>
  )
}

export default Hero
