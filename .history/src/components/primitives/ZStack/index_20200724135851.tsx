import React from "react";
import { ViewProps } from "react-native";
import styled from "styled-components/native";
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  position,
  space as spacing,
} from "styled-system";

import { getSpacedChildren } from "../../../utils";

export type IZStackProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const StyledZStack = styled.View<IZStackProps>`
  postion: absolute;
  ${color}
  ${spacing}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
`;

type ZStackProps = IZStackProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    space?: number;
  };

const ZStack = ({ space, children, ...props }: ZStackProps) => {
  return <StyledZStack {...props}>{getSpacedChildren(children, space, "Y")}</StyledZStack>;
};

export default ZStack;
