// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  width: 260px;
  height: 500px;
  background-color: white;
  padding: 18px 10px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
export const ImageContainer = styled.div`
  width: 240px;
  height: 280px;
`;
export const BuyButton = styled.div`
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

  width: 220px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 24px;
  color: #ffffff;
  position: relative;
  z-index: 0;
  border-radius: 15px;
  border: 1px solid #a1abb9;
  background-color: #020202;
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
    border-radius: 15px;
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
    border-radius: 15px;
    background-color: #202124;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 30px;
  min-height: 15px;
`;
