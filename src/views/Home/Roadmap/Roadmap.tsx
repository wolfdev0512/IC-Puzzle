import React from "react"

// Styled component
import { Layout, NextItem, PrevItem, SwiperContainer } from "./Roadmap.styled"

// Component

import Text from "components/Text"
import { RoadmapItem } from "components/RoadmapItem"

// Asserts
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

// Swiper

import { Swiper, SwiperSlide } from "swiper/react"

import SwiperCore, { Pagination, Navigation } from "swiper"

SwiperCore.use([Pagination, Navigation])

// -----------------------------------------------------------

const params1 = {
  pagination: {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + '"></span>'
    }
  }
}

const Roadmap: React.FC = () => {
  return (
    <Layout id="Roadmap" data-aos="fade-up">
      <Text fSize={44} lHeight={48} fWeight={800}>
        Roadmap
      </Text>
      <SwiperContainer>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            "300": { slidesPerView: 1 },
            "450": { slidesPerView: 1.5 },
            "600": { slidesPerView: 2 },
            "750": { slidesPerView: 2.5 },
            "900": { slidesPerView: 3 },
            "1050": { slidesPerView: 3.5 },
            "1200": { slidesPerView: 4 },
            "1500": {
              slidesPerView: 5
            }
          }}
          navigation={{
            prevEl: ".prevItem",
            nextEl: ".nextItem"
          }}
          {...params1}
        >
          <SwiperSlide>
            <RoadmapItem
              first={true}
              color="#fffb00, #48ff00, #00ffd5"
              title="Q4 2021"
              text="ICPuzzle NFT & Bets Launch"
            />
          </SwiperSlide>
          <SwiperSlide>
            <RoadmapItem
              color="#00ffd5, #002bff, #7a00ff"
              title="Q1 2022"
              text="BetaV2 Launch"
            />
          </SwiperSlide>
          <SwiperSlide>
            <RoadmapItem
              color="#7a00ff, #ff00c8, #ff0000"
              title="Q2 2022"
              text="Alpha release of the app with marketplace"
            />
          </SwiperSlide>
          <SwiperSlide>
            <RoadmapItem
              color="#ff0000, #ff0000, #ff0000"
              title="Q3 2022"
              text="Launch of 3D NFTs & Dropped to community"
            />
          </SwiperSlide>
          <SwiperSlide>
            <RoadmapItem
              color="#ff0000, #ff0000, #ff0000"
              end={true}
              title="Q4 2022"
              text="Some more Puzzles"
            />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
      <div className="prevItem">
        <PrevItem>
          <AiOutlineArrowLeft size={25} color="#94899f" />
        </PrevItem>
      </div>
      <div className="nextItem">
        <NextItem>
          <AiOutlineArrowRight size={25} color="#94899f" />
        </NextItem>
      </div>
    </Layout>
  )
}

export default Roadmap
