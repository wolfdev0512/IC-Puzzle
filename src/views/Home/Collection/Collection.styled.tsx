// styled system
import styled from "styled-components"

//Swiper
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// -------------------------------------------------------
export const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0px 20px 0px;
  position: relative;

  .swiper {
    padding-top: 10px;
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
`

export const CollectionItems = styled.div`
  width: 100%;
  margin-top: 54px;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-gap: 50px;
  justify-content: center;
  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, 270px);
    column-gap: 100px;
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
