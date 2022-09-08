// styled system
import styled from "styled-components"

//Framer motion
import { motion } from "framer-motion"

// -------------------------------------------------------
export const Layout = styled.div`
  display: flex;
  justify-content: center;
  padding: 210px 0px 0px 0px;

  @media screen and (max-width: 1024px) {
    padding: 160px 0px 0px 0px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    padding: 130px 0px 0px 0px;
  }

  @media screen and (max-width: 425px) {
    padding: 100px 0px 0px 0px;
  }
`
export const PlayerContainer = styled.div`
  background: black;
  width: 550px;
  height: 380px;
  border-radius: 20px;
  @media screen and (max-width: 1200px) {
    width: 500px;
    height: 350px;
  }
  @media screen and (max-width: 1024px) {
    width: 400px;
    height: 280px;
  }
  @media screen and (max-width: 900px) {
    width: 80vw;
    height: calc(80vw * 0.7);
    margin-top: 50px;
  }
  @media screen and (max-width: 425px) {
    width: 90vw;
    height: calc(90vw * 0.7);
    margin-top: 50px;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`

export const PlayContainer = styled(motion.div)``
