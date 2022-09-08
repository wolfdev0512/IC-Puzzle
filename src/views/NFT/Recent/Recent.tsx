import React from "react";

// styled component
import {
  Layout,
  ViewMore,
  NFTList,
  PrevItem,
  NextItem,
  SwiperContainer,
} from "./Recent.styled";

// component

import Text from "components/Text";
import { MarketItem } from "components/NFTItem";
import { Row } from "components/Layout";

//tempdata

import { NFTItemRecentData } from "utils/tempData/NFTItem";

//Swiper

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

//assets
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

// -----------------------------------------------------------

const params1 = {
  pagination: {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + '"></span>';
    },
  },
};

const Recent: React.FC = () => {
  return (
    <Layout id="RecentlyNFT">
      <Text
        padding="0px 0px 0px 75px"
        fSize={50}
        fWeight={800}
        responsive={{
          768: { fSize: 40, tAlign: "center", padding: "0px" },
          375: { fSize: 30 },
        }}
      >
        Recently listed NFTs
      </Text>
      <NFTList>
        {NFTItemRecentData.map((item, index) => {
          return <MarketItem key={index} data={item}></MarketItem>;
        })}
      </NFTList>
      <SwiperContainer>
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            "300": { slidesPerView: 1 },
            "500": { slidesPerView: 1.5 },
            "650": { slidesPerView: 2 },
            "800": { slidesPerView: 2.5 },
            "1000": { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: ".prevItem",
            nextEl: ".nextItem",
          }}
          {...params1}
        >
          {NFTItemRecentData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <MarketItem data={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="prevItem">
          <PrevItem>
            <AiOutlineArrowLeft size={25} />
          </PrevItem>
        </div>
        <div className="nextItem">
          <NextItem>
            <AiOutlineArrowRight size={25} />
          </NextItem>
        </div>
      </SwiperContainer>
      <Row justifyContent="center">
        <ViewMore>View more</ViewMore>
      </Row>
    </Layout>
  );
};

export default Recent;
