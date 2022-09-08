// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div<{ flag: boolean }>`
  position: relative;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
  ${({ flag }) =>
    flag &&
    `& > :last-child {
    margin-left: 25px;
  }`};
`;
export const IconLayout = styled.div<{ flag: boolean }>`
  height: 1.4rem;
  bottom: 0;
  cursor: pointer;
  transition: 0.2s;
  ${({ flag }) =>
    flag ? "transform: rotate(180deg);" : "transform: rotate(0deg)"};
`;
export const HexcodeContainer = styled.div<{ flag: boolean }>`
  position: relative;
  min-width: 100px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  ${({ flag }) =>
    flag ? "border: 1px solid white;" : "border: 1px solid black;"}

  margin-left: 20px;
  margin-right: 20px;
`;

export const Hexcode = styled.input<{ flag: boolean }>`
  width: 100%;
  background: rgba(0, 0, 0, 0);
  outline: none;
  border: none;

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 600;
  ${({ flag }) => (flag ? "color: white;" : "color: black;")}

  text-align: center;
`;

export const ColorSelecter = styled.div<{ bgColor: string }>`
  width: 26px;
  height: 26px;
  min-height: 26px;
  min-width: 26px;

  margin: 0px 3px;

  cursor: pointer;

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
    top: -2px;
    left: -2px;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
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
    background-color: ${({ bgColor }) => (bgColor == "" ? "white" : bgColor)};
  }
`;
