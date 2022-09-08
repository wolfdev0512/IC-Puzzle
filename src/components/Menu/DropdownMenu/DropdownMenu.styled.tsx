// Styled system
import styled from "styled-components"

//Framer motion
import { motion } from "framer-motion"

// -------------------------------------------------------
export const Layout = styled.div<{ flag: boolean }>`
  display: ${({ flag }) => (flag ? "flex" : "none")};

  position: absolute;
  top: 80px;
  left: 0px;
  width: 250px;

  background: white;
  border-radius: 20px;
  padding: 10px 20px;

  flex-direction: column;
  z-index: 2;
`

export const MenuItem = styled(motion.div)`
  width: 100%;
  height: 40px;

  padding-left: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  font-family: Montserrat;
`
