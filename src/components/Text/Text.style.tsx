// styled system
import styled from "styled-components";
// types
import { ResponsivedTextProps } from "types/components/Text";

// -------------------------------------------------------
export const TextWrapper = styled.p<ResponsivedTextProps>`
  ${({ fSize }) => (fSize ? `font-size: ${fSize}px` : "")};
  ${({ fWeight }) => (fWeight ? `font-weight: ${fWeight}` : "")};
  ${({ fStyle }) => (fStyle ? `font-style: ${fStyle}` : "")};
  ${({ tAlign }) => (tAlign ? `text-align: ${tAlign}` : "")};
  ${({ padding }) => (padding ? `padding: ${padding}` : "")};
  ${({ tTransForm }) => (tTransForm ? ` text-transform: ${tTransForm}` : "")};
  ${({ lHeight }) => (lHeight ? `line-height: ${lHeight}px` : "")};
  ${({ tSpacing }) => (tSpacing ? `letter-spacing: ${tSpacing}px` : "")};
  ${({ mWidth }) => (mWidth ? `max-width: ${mWidth}px` : "")};
  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : "")};
  ${({ fColor }) => (fColor ? `color: ${fColor}` : "")};
  font-family: Montserrat;
  ${({ tDecorations }) =>
    tDecorations ? `text-decoration: ${tDecorations}` : ""};
  ${({ responsive }) => responsive && getResponsive(responsive)}
  &:hover {
    ${({ hoverStyle }) =>
      hoverStyle &&
      `
      ${hoverStyle.fSize ? `font-size: ${hoverStyle.fSize}px;` : ""}
      ${hoverStyle.fWeight ? `font-weight: ${hoverStyle.fWeight};` : ""}
      ${hoverStyle.tAlign ? `text-align: ${hoverStyle.tAlign};` : ""}
      ${hoverStyle.lHeight ? `line-height: ${hoverStyle.lHeight}px;` : ""}
      ${
        hoverStyle.tTransForm
          ? ` text-transform: ${hoverStyle.tTransForm};`
          : ""
      }
      ${hoverStyle.padding ? `padding: ${hoverStyle.padding};` : ""}
      ${hoverStyle.tSpacing ? `letter-spacing: ${hoverStyle.tSpacing}px;` : ""}
      ${hoverStyle.mWidth ? `max-width: ${hoverStyle.mWidth}px;` : ""}
      ${
        hoverStyle.tDecorations
          ? `text-decoration: ${hoverStyle.tDecorations};`
          : ""
      }
      ${hoverStyle.fColor ? `color: ${hoverStyle.fColor}` : ""};
      ${hoverStyle.tFont ? `font-family: ${hoverStyle.tFont}` : ""};
    `}
  }
`;

export const TextSpanWrapper = styled.span<ResponsivedTextProps>`
  ${({ fSize }) => (fSize ? `font-size: ${fSize}px` : "")};
  ${({ fWeight }) => (fWeight ? `font-weight: ${fWeight}` : "")};
  ${({ fStyle }) => (fStyle ? `font-style: ${fStyle}` : "")};
  ${({ tAlign }) => (tAlign ? `text-align: ${tAlign}` : "")};
  ${({ padding }) => (padding ? `padding: ${padding}` : "")};
  ${({ tTransForm }) => (tTransForm ? ` text-transform: ${tTransForm}` : "")};
  ${({ lHeight }) => (lHeight ? `line-height: ${lHeight}px` : "")};
  ${({ tSpacing }) => (tSpacing ? `letter-spacing: ${tSpacing}px` : "")};
  ${({ mWidth }) => (mWidth ? `max-width: ${mWidth}px` : "")};
  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : "")};
  ${({ fColor }) => (fColor ? `color: ${fColor}` : "")};
  ${({ tFont }) => (tFont ? `font-family: ${tFont}` : "")};
  ${({ tDecorations }) =>
    tDecorations ? `text-decoration: ${tDecorations}` : ""};
  ${({ responsive }) => responsive && getResponsive(responsive)}
  &:hover {
    ${({ hoverStyle }) =>
      hoverStyle &&
      `
      ${hoverStyle.fSize ? `font-size: ${hoverStyle.fSize}px;` : ""}
      ${hoverStyle.fWeight ? `font-weight: ${hoverStyle.fWeight};` : ""}
      ${hoverStyle.tAlign ? `text-align: ${hoverStyle.tAlign};` : ""}
      ${hoverStyle.lHeight ? `line-height: ${hoverStyle.lHeight}px;` : ""}
      ${
        hoverStyle.tTransForm
          ? ` text-transform: ${hoverStyle.tTransForm};`
          : ""
      }
      ${hoverStyle.padding ? `padding: ${hoverStyle.padding};` : ""}
      ${hoverStyle.tSpacing ? `letter-spacing: ${hoverStyle.tSpacing}px;` : ""}
      ${hoverStyle.mWidth ? `max-width: ${hoverStyle.mWidth}px;` : ""}
      ${
        hoverStyle.tDecorations
          ? `text-decoration: ${hoverStyle.tDecorations};`
          : ""
      }
      ${hoverStyle.fColor ? `color: ${hoverStyle.fColor}` : ""};
      ${hoverStyle.tFont ? `font-family: ${hoverStyle.tFont}` : ""};
    `}
  }
`;

// func getter for responsive
const getResponsive = (responsive: any) => {
  let resStyle = "";
  const resData = Object.keys(responsive).sort(
    (a, b) => parseInt(b) - parseInt(a)
  );
  resData.forEach((itemSize) => {
    const item = responsive[itemSize];
    resStyle += `@media screen and (max-width:${itemSize}px){
      ${item.fSize ? `font-size: ${item.fSize}px;` : ""}
      ${item.fWeight ? `font-weight: ${item.fWeight};` : ""}
      ${item.tAlign ? `text-align: ${item.tAlign};` : ""}
      ${item.lHeight ? `line-height: ${item.lHeight}px;` : ""}
      ${item.tTransForm ? ` text-transform: ${item.tTransForm};` : ""}
      ${item.padding ? `padding: ${item.padding};` : ""}
      ${item.tSpacing ? `letter-spacing: ${item.tSpacing}px;` : ""}
      ${item.mWidth ? `max-width: ${item.mWidth}px;` : ""}
      ${item.tDecorations ? `text-decoration: ${item.tDecorations};` : ""}
    }`;
  });
  return resStyle;
};
