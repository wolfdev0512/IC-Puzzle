// styled system
import styled from "styled-components";

//Framer motion
import { motion } from "framer-motion";
// -------------------------------------------------------

export const Button = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 38px;
  right: 35px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  z-index: 1;
`;

export const Container = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
  z-index: 2;
`;

export const MotionNav = styled(motion.nav)`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
`;

export const ImageContainer = styled(motion.div)`
  display: flex;

  position: relative;

  width: 33px;
  height: 40px;

  cursor: pointer;
`;

export const Menu = styled.div<{ open: boolean; num: number }>`
  display: ${({ open }) => (open ? "flex" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  display: ${({ num }) => num * 40 + 250}px;
  background: white;
  flex-direction: column;
`;

export const Header = styled.div`
  padding-top: 40px;
  padding-bottom: 10px;
  padding-left: 55px;
  box-shadow: 0px 3px 0px 0px #5f5f5f19;
`;
export const ItemList = styled.div`
  padding: 10px;
`;
export const MenuItem = styled(motion.div)`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  font-family: Montserrat;
`;
export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CreateButton = styled.div`
  margin: 10px;
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

  width: 90%;
  height: 45px;
  max-width: 500px;

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
