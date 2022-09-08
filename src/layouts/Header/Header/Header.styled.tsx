// Styled system
import styled from "styled-components";

//Framer motion
import { motion } from "framer-motion";
// -------------------------------------------------------

export const Layout = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  padding: 62px 36px 0px 110px;

  @media screen and (max-width: 1200px) {
    padding: 62px 20px 0px 70px;
  }
  @media screen and (max-width: 1024px) {
    padding: 10px 10px 0px 20px;
  }
`;

export const ImageContainer = styled(motion.div)`
  position: relative;

  display: flex;

  width: 60px;
  height: 70px;

  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 33px;
    height: 40px;
  }
`;

export const CreateButton = styled.div`
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
  height: 45px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 18px;
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
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 20px;
    background-color: #202124;
  }
`;
