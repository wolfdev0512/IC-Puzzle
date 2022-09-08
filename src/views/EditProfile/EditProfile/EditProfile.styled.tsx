// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: row-reverse;
  margin-left: 75px;
  margin-right: 75px;
  max-width: 1024px;
  margin-bottom: 100px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const EditLayout = styled.div`
  width: 65vw;
  & > *:not(:last-child) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 500px) {
    width: 85vw;
  }
`;
export const PhotoUpload = styled.div`
  width: 25vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  & > *:not(:last-child) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 900px) {
    width: 65vw;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 500px) {
    & > *:not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

export const InputField = styled.input`
  font-family: Montserrat;
  font-size: 18px;
  line-height: 20px;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.47);
  width: 95%;
  background: rgba(0, 0, 0, 0);
  margin-top: 8px;
  outline: none;
  font-weight: 600;
  & :focus {
    border-bottom: 2px solid rgba(0, 0, 0, 1);
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
export const Verification = styled.div`
  display: flex;
  flex-direction: column;
`;
export const VerifyButton = styled.div`
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
  height: 30px;

  @media screen and (max-width: 500px) {
    width: 120px;
  }

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;

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
    border-radius: 15px;
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
    border-radius: 15px;
    background-color: #202124;
  }
`;
export const UpdateButton = styled.div`
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

  width: 100%;
  height: 40px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #ffffff;

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
    border-radius: 15px;
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
    border-radius: 15px;
    background-color: #202124;
  }
`;
export const ImageContainer = styled.div`
  img {
    border-radius: 50%;
  }

  max-width: 200px;
  max-height: 200px;

  width: 20vw;
  height: 20vw;

  @media screen and (max-width: 900px) {
    max-width: 300px;
    max-height: 300px;
    width: 30vw;
    height: 30vw;
  }
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
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
    top: -5px;
    left: -5px;
    z-index: -1;
    filter: blur(3px);
    width: calc(100% + 10px);
    height: calc(100% + 10px);
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
export const UploadButton = styled.div`
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

  max-width: 200px;
  height: 30px;

  width: 20vw;

  @media screen and (max-width: 768px) {
    width: 200px;
  }
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;

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
    border-radius: 15px;
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
    border-radius: 15px;
    background-color: #202124;
  }
`;
