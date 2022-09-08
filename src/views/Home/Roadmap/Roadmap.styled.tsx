// styled system
import styled from "styled-components"
//Swiper
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
// -------------------------------------------------------
export const Layout = styled.div`
  width: 100%;
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .swiper {
    padding-bottom: 55px;
    padding-left: 50px;
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
  .swiper-wrapper {
    @media screen and (min-width: 1500px) {
      min-width: 1500px !important;
    }
  }
`

export const PrevItem = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0px;
  left: calc(50vw - 150px);
  @media screen and (max-width: 500px) {
    left: calc(50vw - 100px);
  }
`
export const NextItem = styled.div`
  z-index: 2;
  position: absolute;
  bottom: 0px;
  right: calc(50vw - 150px);
  @media screen and (max-width: 500px) {
    right: calc(50vw - 100px);
  }
`
export const SwiperContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
  max-width: 100%;
`
