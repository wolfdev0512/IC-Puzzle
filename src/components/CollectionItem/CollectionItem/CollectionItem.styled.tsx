// styled system
import styled from "styled-components"

// -------------------------------------------------------

export const Layout = styled.div`
  width: 270px;
  height: 450px;

  background: white;
  border-radius: 20px;

  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;
  :hover {
    margin-top: -20px;
  }
  @media screen and (max-width: 700px) {
    :hover {
      margin-top: 0px;
    }
  }
`
export const LayoutComing = styled.div`
  width: 270px;
  height: 450px;

  display: flex;
  justify-content: center;
  align-items: center;

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
    top: -4px;
    left: -4px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    opacity: 1;
    border-radius: 20px;
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
    background-color: #000;
  }

  transition: all 0.3s;
  :hover {
    margin-top: -20px;
  }
  @media screen and (max-width: 700px) {
    :hover {
      margin-top: 0px;
    }
  }
`

export const MainImageContainer = styled.div`
  img {
    border-radius: 20px;
  }

  border-radius: 20px;

  width: 260px;
  height: 270px;

  display: flex;
  justify-content: center;

  background-color: #000;
`
export const SubImageContainer = styled.div`
  margin-top: -35px;

  width: 70px;
  height: 70px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

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
    filter: blur(3px);
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
    background-color: #202124;
  }
`
