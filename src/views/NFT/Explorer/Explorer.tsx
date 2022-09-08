import React from "react";

// styled component
import {
  Layout,
  SearchNumber,
  SearchNFT,
  HighToLow,
  LowToHigh,
  NFTList,
  ViewMore,
  SearchNumberInput,
  SearchNFTInput,
  PrevItem,
  NextItem,
  SwiperContainer,
} from "./Explorer.styled";

// component

import Text from "components/Text";
import { Row } from "components/Layout";
import { MarketItem } from "components/NFTItem";

//assets
import { IoSearch } from "react-icons/io5";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";

//tempdata

import { NFTItemData } from "utils/tempData/NFTItem";

//Swiper

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

// -----------------------------------------------------------

const params1 = {
  pagination: {
    clickable: true,
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + '"></span>';
    },
  },
};

const Explorer: React.FC = () => {
  return (
    <Layout id="Explorer">
      <Text
        fWeight={800}
        fSize={50}
        responsive={{
          768: { fSize: 40 },
          375: { fSize: 30 },
        }}
      >
        Explore
      </Text>
      <Row
        justifyContent="center"
        gap={30}
        padding="80px 0px 0px 0px"
        responsive={{
          1000: { flexDirection: "column", gap: 15, alignItems: "center" },
        }}
      >
        <Row
          gap={30}
          mWidth={560}
          responsive={{
            700: { flexDirection: "column", gap: 15, alignItems: "center" },
          }}
        >
          <SearchNumber>
            <IoSearch color="#6c6d7e" />
            <SearchNumberInput placeholder="Mint Number" />
          </SearchNumber>
          <SearchNFT>
            <IoSearch color="#6c6d7e" />
            <SearchNFTInput placeholder="search" />
          </SearchNFT>
        </Row>
        <Row
          gap={30}
          mWidth={350}
          justifyContent="center"
          responsive={{
            700: { flexDirection: "column", gap: 15, alignItems: "center" },
          }}
        >
          <HighToLow>
            <AiOutlineArrowUp color="#6c6d7e" />
            <Text
              padding="0px 0px 0px 10px"
              responsive={{ 425: { fSize: 14 } }}
              fColor="#6c6d7e"
            >
              High to Low
            </Text>
          </HighToLow>
          <LowToHigh>
            <AiOutlineArrowDown color="#6c6d7e" />
            <Text
              padding="0px 0px 0px 10px"
              responsive={{ 425: { fSize: 14 } }}
              fColor="#6c6d7e"
            >
              Low to High
            </Text>
          </LowToHigh>
        </Row>
      </Row>
      <NFTList>
        {NFTItemData.map((item, index) => {
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
          {NFTItemData.map((item, index) => {
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

      <ViewMore>View more</ViewMore>
    </Layout>
  );
};

export default Explorer;
