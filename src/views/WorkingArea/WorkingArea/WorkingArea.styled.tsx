// styled system
import styled from "styled-components"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// -------------------------------------------------------

export const Layout = styled.div<{ screenMode: boolean }>`
  position: relative;
  width: ${({ screenMode }) => (screenMode ? "1024px" : "100vw")};
  height: ${({ screenMode }) => (screenMode ? "680px" : "100vh")};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MenuBox = styled.div<{ screenMode: boolean }>`
  display: ${({ screenMode }) => (screenMode ? "flex" : "none")};
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  margin-right: 40px;
`

export const FileButton = styled.div`
  margin-left: 20px;
  background: white;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: white;
`

export const ResizeButton = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: white;
  margin-left: 20px;
`

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const Background = styled.div<{ flag: boolean; screenMode: boolean }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${({ flag }) => (flag ? "black" : "#F7F7F7")};
  border-radius: ${({ screenMode }) => (screenMode ? "20px" : "0px")};
`

export const MenuContainer = styled.div<{ screenMode: boolean }>`
  position: absolute;
  top: 0;
  left: 43%;
  z-index: 2;

  width: 14%;

  display: ${({ screenMode }) => (!screenMode ? "flex" : "none")};
  justify-content: center;
  border-radius: 0px 0px 20px 20px;
  align-items: center;
  padding: 5px 5px 5px 5px;

  background: #cecece;
`

export const Canvas = styled.div``

export const DrawerContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 10px;
  z-index: 2;
`

export const Title = styled.input<{ flag: boolean; show: boolean }>`
  ${({ show }) => (show ? "" : "display:none;")};
  font-family: Montserrat;
  font-size: 20px;
  color: ${({ flag }) => (flag ? "white" : "black")};
  font-weight: 700;
  outline: none;
  background: rgba(0, 0, 0, 0);
  border: none;
`

export const TitleContainer = styled.div`
  position: absolute;
  left: 50px;
  top: 60px;
  z-index: 2;
`

export const MintButtonContainer = styled.div`
  position: absolute;
  left: 50px;
  bottom: 80px;
  z-index: 2;
`

export const MintButton = styled.div`
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

  width: 55px;
  height: 55px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  position: relative;
  z-index: 1;

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
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 1;
    border-radius: 50%;
  }
  :hover::before {
    filter: blur(3px);
    background-size: 400%;
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
    border-radius: 50%;
    background-color: #202124;
  }
`

export const SidebarContainer = styled.div`
  position: absolute;
  height: 100%;
  right: 0;
  top: 0;
`
export const ColorPickerContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 15px;
  left: 0;
`
export const ColourSwiperContainer = styled.div<{ screenMode: boolean }>`
  width: 60%;
  height: 110px;

  position: absolute;
  bottom: 70px;
  left: ${({ screenMode }) => (!screenMode ? "130px" : "20%")};

  display: flex;
  justify-content: center;
  align-items: center;
`
export const SwiperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  .swiper {
    padding: 10px;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  .Deck {
    transition: transform 0.3s ease;
  }
  .Deck-selected {
    transform: scale(1.1);
  }
  .Deck-unselected {
    transform: scale(0.9);
  }
`

export const SwiperItem = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 10px;
`
export const PrevItem = styled.div`
  z-index: 2;
  position: absolute;
  bottom: calc(50% - 25px / 2);
  left: 20px;
`
export const NextItem = styled.div`
  z-index: 2;
  position: absolute;
  bottom: calc(50% - 25px / 2);
  right: 20px;
`

export const PageLayout = styled.div`
  /* position: relative; */
  margin: 0px;
  padding: 0px;
  min-height: 100vh;
  min-width: 100vw;
  /* background: linear-gradient(
    163.2deg,
    #fef7b1 15.55%,
    #fdd0e7 29.42%,
    #cde6f8 50.21%,
    #cbfed1 84.88%
  ); */
  display: flex;
  justify-content: center;
  align-items: center;
`
