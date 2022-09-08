import React from "react"

// styled component
import {
  Layout,
  CollectionItems,
  Button,
  MobileLayout,
  PrevItem,
  NextItem,
  SwiperContainer
} from "./TopCollection.styled"

// component

import Text from "components/Text"
import { Row } from "components/Layout"
import { CollectionItem } from "components/CollectionItem"

//tempData
import { CollectionItemDataTop } from "utils/tempData/CollectionItem"

//asserts
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

//Swiper

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

const TopCollection: React.FC = () => {
  return (
    <div id="TopCollection">
      <Layout>
        <Row
          justifyContent="space-between"
          alignItems="flex-end"
          padding="0px 200px"
          data-aos="fade-up"
        >
          <Text fWeight={800} fSize={50}>
            Top Collections
          </Text>
          <Button>Explore Collections</Button>
        </Row>
        <CollectionItems>
          {CollectionItemDataTop.map((item, index) => {
            return <CollectionItem data={item} key={index} />
          })}
        </CollectionItems>
      </Layout>
      <MobileLayout>
        <Text
          fWeight={800}
          fSize={50}
          responsive={{
            768: { fSize: 40 },
            425: { fSize: 30 }
          }}
          data-aos="fade-up"
        >
          Top Collections
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
            {CollectionItemDataTop.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <CollectionItem data={item} />
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

        <Button data-aos="fade-up">Explore Collections</Button>
      </MobileLayout>
    </div>
  )
}

export default TopCollection
