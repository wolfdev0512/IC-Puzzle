// styled system
import styled from "styled-components"

// -------------------------------------------------------
export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Count = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid blue;
`
