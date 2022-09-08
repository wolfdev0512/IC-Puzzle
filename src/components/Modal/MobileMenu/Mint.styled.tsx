import styled from "styled-components"

export const Layout = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? "flex" : "none")};
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 5;
  justify-content: center;
  align-items: center;
`
export const Modal = styled.div`
  width: 25%;
  min-width: 300px;
  height: 510px;
  background: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 40px 25px 0px 25px;
`
export const ImageContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  border: 1px solid #cccccc;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextBox = styled.div`
  display: flex;
  padding: 20px 20px 0px 20px;
  justify-content: space-between;
`
export const ButtonBox = styled.div`
  display: flex;
  padding: 20px 20px;
  justify-content: space-between;
`
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

  width: 100px;
  height: 50px;

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
    top: -1.5px;
    left: -1.5px;
    z-index: -1;
    width: calc(100% + 3px);
    height: calc(100% + 3px);
    opacity: 1;
    border-radius: 23px;
  }
  :hover::before {
    filter: blur(2px);
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
    border-radius: 23px;
    background-color: #202124;
  }
`
