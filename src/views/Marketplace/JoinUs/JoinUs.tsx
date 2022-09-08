import React from "react"

// Styled component
import { Layout, LayoutJoin } from "./JoinUs.styled"

// Component

import { JoinUs } from "components/JoinUs"

// -----------------------------------------------------------

const Hero: React.FC = () => {
  return (
    <Layout>
      <LayoutJoin>
        <JoinUs />
      </LayoutJoin>
    </Layout>
  )
}

export default Hero
