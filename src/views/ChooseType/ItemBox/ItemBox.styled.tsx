// styled system
import styled from "styled-components"

// -------------------------------------------------------
export const Layout = styled.div`
  padding: 90px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 100px 50px 100px 50px;
  }
  @media screen and (max-width: 425px) {
    padding: 100px 20px 100px 20px;
  }
`
