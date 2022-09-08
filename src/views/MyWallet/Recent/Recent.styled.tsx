// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin-bottom: 100px;
`;
export const MenuItem = styled.div<{ flag: boolean }>`
  padding: 10px 20px;
  border: none;
  border-bottom: ${({ flag }) => (flag ? "3px solid black" : "0px")};
  z-index: 1;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #000000;

  @media screen and (max-width: 768px) {
    padding: 10px 10px;
    font-size: 16px;
  }
`;
export const Line = styled.div`
  width: 100%;
  border: 2px solid white;
  margin-top: -3px;
`;
export const RecentButton = styled.div`
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

  width: 200px;
  height: 45px;

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

  @media screen and (max-width: 1024px) {
    width: 180px;
  }
  @media screen and (max-width: 768px) {
    width: 150px;
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    width: 120px;
    font-size: 12px;
  }

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

  width: 120px;
  height: 45px;

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

  @media screen and (max-width: 768px) {
    width: 100px;
  }

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
`;
