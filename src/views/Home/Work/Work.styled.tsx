// styled system
import styled from "styled-components"

// -------------------------------------------------------
export const Layout = styled.div`
  padding-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const GridLayout = styled.div`
  padding-top: 50px;
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
`
