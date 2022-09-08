//Styled system
import styled from "styled-components";

//--------------------------------------------------------------
export const Layout = styled.div`
  width: 30vw;
  height: 400px;

  background: rgba(255, 255, 255, 0.51);
  border: 1px solid #cccccc;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 300px;
  }

  @media screen and (max-width: 768px) {
    width: 270px;
    height: 300px;
  }
`;
export const ImageLayout = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  @media screen and (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
`;
