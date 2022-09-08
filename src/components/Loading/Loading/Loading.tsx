import React from "react"

// Styled component
import { Layout, ImageContainer } from "./Loading.styled"

//Assets

import LoadingImage from "assets/svg/Loading.svg"

// -----------------------------------------------------------

const Loading: React.FC = () => {
  return (
    <Layout>
      <ImageContainer>
        <object type="image/svg+xml" data={LoadingImage}></object>
      </ImageContainer>
    </Layout>
  )
}

export default Loading
