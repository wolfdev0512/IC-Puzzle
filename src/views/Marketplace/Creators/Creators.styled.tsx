// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  padding-top: 120px;
`;

export const CollectionItems = styled.div`
  width: 100%;
  margin-top: 54px;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-gap: 50px;
  justify-content: center;
  @media screen and (max-width: 1250px) {
    grid-template-columns: repeat(2, 270px);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 300px);
  }
`;

export const Button = styled.div`
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

  width: 170px;
  height: 50px;
  @media screen and (max-width: 1250px) {
    width: 90%;
    max-width: 290px;
    margin-top: 30px;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
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
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    opacity: 1;
    border-radius: 25px;
    @media screen and (max-width: 1250px) {
      border-radius: 10px;
    }
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
    border-radius: 25px;
    @media screen and (max-width: 1250px) {
      border-radius: 10px;
    }
    background-color: #202124;
  }
`;
