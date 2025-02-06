import styled from "styled-components";
import { Property } from "csstype";
import React from "react";
import { testIds } from "@/tests/Components/Wrapper/config";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  "data-testid"?: string;
  padding?: {
    padding?: Property.Padding | number;
    top?: Property.PaddingTop | number;
    bottom?: Property.PaddingBottom | number;
    left?: Property.PaddingLeft | number;
    right?: Property.PaddingRight | number;
    horizontal?: Property.PaddingInline | number;
    vertical?: Property.PaddingBlock | number;
  };
  margin?: {
    margin?: Property.Margin | number;
    top?: Property.MarginTop | number;
    bottom?: Property.MarginBottom | number;
    left?: Property.MarginLeft | number;
    right?: Property.MarginRight | number;
    horizontal?: Property.MarginInline | number;
    vertical?: Property.MarginBlock | number;
  };
  flex?: Property.Flex;
  width?: Property.Width | number;
  height?: Property.Height | number;
  display?: Property.Display;
  flexDirection?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  alignSelf?: Property.AlignSelf;
}

export const Wrapper = styled.div.attrs<WrapperProps>(({ ...props }) => ({
  "data-testid": props["data-testid"] ?? testIds.wrapper,
  ...props,
}))<WrapperProps>`
  padding: ${({ padding }) =>
    padding && !isNaN(+padding) ? `${padding}rem` : (padding ?? 0)};
  padding-top: ${({ padding }) =>
    padding?.top && !isNaN(+padding.top)
      ? `${padding.top}rem`
      : (padding?.top ?? 0)};
  padding-bottom: ${({ padding }) =>
    padding?.bottom && !isNaN(+padding.bottom)
      ? `${padding.bottom}rem`
      : (padding?.bottom ?? 0)};
  padding-left: ${({ padding }) =>
    padding?.left && !isNaN(+padding.left)
      ? `${padding.left}rem`
      : (padding?.left ?? 0)};
  padding-right: ${({ padding }) =>
    padding?.right && !isNaN(+padding.right)
      ? `${padding.right}rem`
      : (padding?.right ?? 0)};
  ${({ padding }) =>
    padding?.horizontal && !isNaN(+padding.horizontal)
      ? `padding-right: ${padding.horizontal}rem; padding-left: ${padding.horizontal}rem;`
      : padding?.horizontal && `padding-inline: ${padding.horizontal};`};
  ${({ padding }) =>
    padding?.vertical && !isNaN(+padding.vertical)
      ? `padding-top: ${padding.vertical}rem; padding-bottom: ${padding.vertical}rem;`
      : padding?.vertical && `padding-block: ${padding.vertical};`};

  margin: ${({ margin }) =>
    margin && !isNaN(+margin) ? `${margin}rem` : (margin ?? 0)};
  margin-top: ${({ margin }) =>
    margin?.top && !isNaN(+margin.top)
      ? `${margin.top}rem`
      : (margin?.top ?? 0)};
  margin-bottom: ${({ margin }) =>
    margin?.bottom && !isNaN(+margin.bottom)
      ? `${margin.bottom}rem`
      : (margin?.bottom ?? 0)};
  margin-left: ${({ margin }) =>
    margin?.left && !isNaN(+margin.left)
      ? `${margin.left}rem`
      : (margin?.left ?? 0)};
  margin-right: ${({ margin }) =>
    margin?.right && !isNaN(+margin.right)
      ? `${margin.right}rem`
      : (margin?.right ?? 0)};
  ${({ margin }) =>
    margin?.horizontal && !isNaN(+margin.horizontal)
      ? `margin-right: ${margin.horizontal}rem; margin-left: ${margin.horizontal}rem;`
      : margin?.horizontal && `margin-inline: ${margin.horizontal};`};
  ${({ margin }) =>
    margin?.vertical && !isNaN(+margin.vertical)
      ? `margin-top: ${margin.vertical}rem; margin-bottom: ${margin.vertical}rem;`
      : margin?.vertical && `margin-block: ${margin.vertical};`};
  margin-block: ${({ margin }) =>
    margin?.vertical && !isNaN(+margin.vertical)
      ? `${margin.vertical}rem`
      : (margin?.vertical ?? 0)};

  flex: ${({ flex }) => flex && flex};
  width: ${({ width }) =>
    width && typeof width === "number" ? `${width}rem` : width};
  height: ${({ height }) =>
    height && typeof height === "number" ? `${height}rem` : height};
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "column"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  align-self: ${({ alignSelf }) => (alignSelf ? alignSelf : "center")};
`;
