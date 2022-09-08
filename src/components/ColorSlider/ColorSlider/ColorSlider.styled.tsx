// styled system
import styled from "styled-components";

// -------------------------------------------------------
const getBack = (data: any) => {
  var str = "background: linear-gradient( 90deg, ";
  data.map((i: any) => {
    str += `${i.color} ${i.offset * 100}%,`;
  });
  str = str.substring(0, str.length - 1);
  str += ");";
  return str;
};

export const Layout = styled.div<{
  data: any;
  active: boolean;
  iWidth: number;
}>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .colorSlider {
    -webkit-appearance: none;
    width: ${({ iWidth }) => iWidth !== 0 && iWidth}px;
    height: 15px;
    ${({ data, active }) =>
      active ? (data ? getBack(data) : "") : "background : grey"};

    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    border-radius: 20px;
    border: 1px solid white;
  }

  .colorSlider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
`;
export const ColorInput = styled.input``;
