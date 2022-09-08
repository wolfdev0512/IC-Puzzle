// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Banner = styled.div`
  width: 80vw;
  max-width: 1250px;
  height: 350px;

  background: #ffffff;
  opacity: 0.3;

  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    height: 250px;
  }
  @media screen and (max-width: 425px) {
    width: 90vw;
  }
`;
export const Profile = styled.div`
  position: relative;

  width: 10vw;
  height: 10vw;

  @media screen and (max-width: 1440px) {
    min-width: 120px;
    min-height: 120px;
    margin-top: -60px;
  }
  @media screen and (max-width: 1024px) {
    min-width: 100px;
    min-height: 100px;
    margin-top: -50px;
  }

  margin-top: -5vw;

  img {
    border-radius: 50%;
  }

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
    border-radius: 50%;
  }
  ::after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 50%;
    background-color: black;
  }
`;
export const PrincipalId = styled.div`
  margin-top: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 50px;

  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    width: 250px;
    font-size: 18px;
    height: 45px;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    font-size: 16px;
    height: 40px;
  }

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
    border-radius: 25px;
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
    background-color: black;
  }
`;

export const Imagelayout = styled.div`
  position: relative;

  width: 40px;
  height: 20px;

  margin-right: 8px;
`;

export const EditProfile = styled.div`
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

  width: 150px;
  height: 50px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  @media screen and (max-width: 1024px) {
    width: 120px;
    font-size: 14px;
    height: 45px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 40px;
  }

  position: relative;
  z-index: 1;

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
    border-radius: 25px;
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
    border-radius: 25px;
    background-color: #202124;
  }
`;
export const ShareProfile = styled.div`
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

  width: 50px;
  height: 50px;

  @media screen and (max-width: 1024px) {
    width: 45px;
    height: 45px;
  }
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  position: relative;
  z-index: 1;

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
    border-radius: 50%;
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
    border-radius: 50%;
    background-color: #202124;
  }
`;
export const UploadImage = styled.div`
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

  width: 50px;
  height: 50px;
  @media screen and (max-width: 1024px) {
    width: 45px;
    height: 45px;
  }
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  position: relative;
  z-index: 1;

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
    border-radius: 50%;
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
    border-radius: 50%;
    background-color: #202124;
  }
`;
