// styled system
import styled from "styled-components"

// -------------------------------------------------------
export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 50px;
  }

  padding-top: 130px;
  padding-bottom: 20px;

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
      margin-right: 0px;
    }
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`
export const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 270px);
  grid-gap: 50px;
`
export const CreateButton = styled.div`
  margin-top: 40px;

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

  width: 140px;
  height: 50px;

  @media screen and (max-width: 1250px) {
    width: 250px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
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
    top: -3px;
    left: -3px;
    z-index: -1;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    opacity: 1;
    border-radius: 20px;
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
    border-radius: 20px;
    background-color: #202124;
  }
`
