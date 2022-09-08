// styled system
import styled from "styled-components";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// -------------------------------------------------------
export const Layout = styled.div`
  padding-top: 120px;
  @media screen and (max-width: 1250px) {
    display: none;
  }
`;

export const MobileLayout = styled.div`
  display: none;
  @media screen and (max-width: 1250px) {
    width: 100%;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .swiper {
      padding-bottom: 55px;
      padding-left: 0px;
    }
    .swiper-pagination-bullets {
      bottom: 8px;
    }
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
    }
    .swiper-pagination-bullet-active {
      background: #9c42f5;
    }
    .swiper-slide {
      display: flex;
      justify-content: center;
    }
  }
`;

export const NFTList = styled.div`
  margin-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-gap: 30px;
  justify-content: center;
`;

export const Button = styled.div`
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
  animation-duration: 2s;

  width: 150px;
  height: 50px;
  @media screen and (max-width: 1250px) {
    width: 90%;
    max-width: 290px;
    margin-top: 30px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 1;
    border-radius: 25px;
    @media screen and (max-width: 1250px) {
      border-radius: 10px;
    }
  }
  :hover::before {
    filter: blur(3px);
    animation: "glowing" 6s linear forwards 1;
    animation-iteration-count: infinite;
    transition: opacity 0.85s ease-in-out;
  }
  ::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 25px;
    background-color: #202124;
    @media screen and (max-width: 1250px) {
      border-radius: 10px;
    }
  }
`;

export const PrevItem = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0px;
  left: calc(50vw - 150px);
  @media screen and (max-width: 500px) {
    left: calc(50vw - 100px);
  }
`;
export const NextItem = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0px;
  right: calc(50vw - 150px);
  @media screen and (max-width: 500px) {
    right: calc(50vw - 100px);
  }
`;
export const SwiperContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
  max-width: 100vw;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-top: 70px;
  }
  @media screen and (max-width: 425px) {
    margin-top: 50px;
  }
`;
