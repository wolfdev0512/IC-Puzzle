import React from "react"

// Styled component
import {
  Layout,
  NFTList,
  Button,
  MobileLayout,
  PrevItem,
  NextItem,
  SwiperContainer
} from "./Hottest.styled"

// Component

import Text from "components/Text"
import { Row } from "components/Layout"
import { MarketItem } from "components/NFTItem"

// Tempdata

import { NFTItemData } from "utils/tempData/NFTItem"

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

const Hottest: React.FC = () => {
  return (
    <div id="HottestNFT">
      <Layout>
        <Row
          justifyContent="space-between"
          alignItems="flex-end"
          padding="0px 200px"
          data-aos="fade-up"
        >
          <Text fWeight={800} fSize={50}>
            Hottest NFTs
          </Text>
          <Button>Explore</Button>
        </Row>
        <NFTList>
          {NFTItemData.map((item, index) => {
            return <MarketItem key={index} data={item}></MarketItem>
          })}
        </NFTList>
      </Layout>
      <MobileLayout>
        <Text
          fWeight={800}
          fSize={50}
          responsive={{
            768: { fSize: 40 },
            425: { fSize: 30 }
          }}
          fColor="#0B1D35"
          data-aos="fade-up"
        >
          Hottest NFTs
        </Text>
        <SwiperContainer>
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              "300": { slidesPerView: 1 },
              "500": { slidesPerView: 1.5 },
              "650": { slidesPerView: 2 },
              "800": { slidesPerView: 2.5 },
              "1000": { slidesPerView: 3 }
            }}
            navigation={{
              prevEl: ".prevItem",
              nextEl: ".nextItem"
            }}
            {...params1}
          >
            {NFTItemData.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <MarketItem data={item}></MarketItem>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
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
        </SwiperContainer>

        <Button data-aos="fade-up">Explore</Button>
      </MobileLayout>
    </div>
  )
}

export default Hottest
