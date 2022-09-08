// styled system
import styled from "styled-components"

// -------------------------------------------------------
export const Layout = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  margin-top: 100px;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ImageContainer = styled.div`
  min-width: 500px;
  min-height: 500px;
  max-width: 500px;
  max-height: 500px;

  @media screen and (max-width: 1024px) {
    min-width: 350px;
    min-height: 350px;
    max-width: 350px;
    max-height: 350px;
  }

  @media screen and (max-width: 900px) {
    margin-top: 70px;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 768px) {
    min-width: 300px;
    min-height: 300px;
    max-width: 300px;
    max-height: 300px;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  img {
    border-radius: 50%;
  }

  position: relative;
  z-index: 0;
`
export const GoApp = styled.div`
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

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
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
  @media screen and (max-width: 900px) {
    width: 80%;
    height: 60px;
    font-weight: bold;
    font-size: 20px;
  }
  @media screen and (max-width: 425px) {
    width: 90%;
  }
`
export const ICImageLayout = styled.div`
  position: relative;
  width: 64px;
  height: 32px;
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    width: 200px;
    height: 100px;
    margin-top: 20px;
  }
`
export const TextPuzzle = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
  @media screen and (max-width: 1250px) {
    padding-right: 30px;
  }
  @media screen and (max-width: 1200px) {
    width: 250px;
  }
  @media screen and (max-width: 1100px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 900px;
    padding: 0px;
    justify-content: center;
  }
`
export const TextIC = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  padding-left: 50px;
  @media screen and (max-width: 1250px) {
    padding-left: 30px;
  }
  @media screen and (max-width: 1200px) {
    width: 250px;
  }
  @media screen and (max-width: 1100px) {
    padding-left: 20px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    max-width: 900px;
    padding: 0px;
    justify-content: center;
  }
`
export const MoButContainer = styled.div`
  width: 100%;
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    padding: 70px 0px 0px 0px;
  }
`
