// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  object {
    width: 100vw;
    height: 100vh;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  img {
    max-width: 100vw;
    max-height: 100vh;
  }
`;
