import styled from "styled-components"

export const Layout = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? "flex" : "none")};
  position: absolute;
  width: 100vw;
  height: 100vh;
  /* background: rgba(0, 0, 0, 0.7); */
  z-index: 5;
  justify-content: center;
  align-items: center;
`
export const Modal = styled.div`
  position: relative;
  width: 75%;
  min-width: 300px;
  height: 550px;
  background: white;
  border-radius: 20px;
  display: flex;
  padding: 30px 25px 20px 25px;
`
export const CanvasContainer = styled.div`
  width: 70%;
  canvas {
    width: 100%;
    height: 100%;
  }
  background: #ccc;
  border-radius: 10px;
`
export const Tool = styled.div`
  width: 30%;
  padding: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Input = styled.input`
  height: 30px;
`

export const CloseButton = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
`
export const Button = styled.div`
  width: 60%;
  height: 40px;
  margin-top: 40px;
  border-radius: 10px;

  background-color: #4e4949;

  color: white;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #1b1919;
  }
`
