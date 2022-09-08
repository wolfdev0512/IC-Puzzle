import type { NextPage } from "next"

// Components

import {
  Hero,
  Creators,
  Hottest,
  JoinUs,
  TopCollection
} from "views/Marketplace"

// Styled components
import { MarketplaceLayout } from "styles/Styled"

const Marketplace: NextPage = () => {
  return (
    <MarketplaceLayout>
      <Hero />
      <Hottest />
      <Creators />
      <TopCollection />
      <JoinUs />
    </MarketplaceLayout>
  )
}

export default Marketplace
