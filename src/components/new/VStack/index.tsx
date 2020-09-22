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
  space as spacing,
} from "styled-system";

import { getSpacedChildren } from "../../../utils";

export type IVStackProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const StyledVStack = styled.View<IVStackProps>`
  ${color}
  ${spacing}
  ${layout}
  ${flexbox}
  ${border}
`;

type SpaceType =
  | "gutter"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

type VStackProps = IVStackProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    space?: number | SpaceType;
    reversed?: any | undefined;
  };

const VStack = ({ space, children, reversed, ...props }: VStackProps) => {
  let reverse: string = reversed ? "reverse" : "normal";
  return <StyledVStack {...props}>{getSpacedChildren(children, space, "Y", reverse)}</StyledVStack>;
};

export default VStack;
