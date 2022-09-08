// Styled system
import styled from "styled-components"

//Framer motion
import { motion } from "framer-motion"

// -------------------------------------------------------
export const Layout = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};

  position: absolute;
  top: 80px;
  left: -150px;
  width: 350px;

  background: white;
  border-radius: 20px;
  padding: 26px 20px;

  flex-direction: column;
  z-index: 2;
`
export const WalletBox = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;

  margin-top: 20px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 10px 20px;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`
export const WalletItem = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
`
export const ImageContainer = styled.div`
  min-width: 50px;
  min-height: 50px;
  max-width: 50px;
  max-height: 50px;

  img {
    border-radius: 50%;
  }
  border-radius: 50%;

  background-color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 20px;
`
export const SolvePuzzle = styled.div`
  width: 95%;

  display: flex;
  justify-content: center;

  border-radius: 20px;
  border: 1px solid #ccc;

  padding: 10px;

  margin-top: 10px;

  cursor: pointer;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 15px;
`
export const MenuItem = styled(motion.div)`
  padding: 10px 0px 10px 15px;

  display: flex;
  align-items: center;

  cursor: pointer;

  & > *:not(:last-child) {
    margin-right: 10px;
  }
`
