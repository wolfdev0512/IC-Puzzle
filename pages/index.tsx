import type { NextPage } from "next"

//Component
import {
  Hero,
  Video,
  Collection,
  Create,
  Work,
  Roadmap,
  Join
} from "views/Home"

//Styled Component
import { IndexLayout } from "styles/Styled"

const Home: NextPage = () => {
  return (
    <IndexLayout>
      <Hero />
      <Video />
      <Collection />
      <Create />
      <Work />
      <Roadmap />
      <Join />
    </IndexLayout>
  )
}

export default Home
