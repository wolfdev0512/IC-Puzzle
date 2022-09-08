// styled system
import styled from "styled-components"

// -------------------------------------------------------
export const Layout = styled.div<{ first?: boolean }>`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: ${({ first }) => (first ? "flex-start" : "center")};

  position: relative;
`
export const Detail = styled.div`
  width: 180px;
  height: 160px;
  position: relative;
  z-index: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

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
    top: -10px;
    left: -5px;
    z-index: -1;
    width: calc(100% + 10px);
    height: calc(100% + 15px);
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
    border-radius: 15px;
    background-color: black;
  }
`
export const PointContainer = styled.div`
  margin-top: 38px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Point = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : "white")};
`

export const Line = styled.div<{
  endItem?: boolean
  color?: string
}>`
  position: absolute;
  bottom: 31px;
  width: ${({ endItem }) => (endItem ? 50 : 100)}%;
  align-self: flex-start;
  height: 8px;
  background: linear-gradient(
    90deg,
    ${({ color }) => (color ? color : "white")}
  );
  border: none;
  z-index: 0;
`
