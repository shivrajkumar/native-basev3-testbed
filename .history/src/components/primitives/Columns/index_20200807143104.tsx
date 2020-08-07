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

import View from "../View";

export type IColumnsProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const StyledColumns = styled(View)(
  { flexDirection: "row" },
  color,
  spacing,
  layout,
  flexbox,
  border,
);

interface SpacingStrings {
  xxsmall: 1;
  xsmall: 2;
  small: 3;
  medium: 4;
  large: 5;
  xlarge: 7;
  xxlarge: 8;
}

type ColumnsProps = IColumnsProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    space?: number | SpacingStrings;
  };

const Columns = ({ space, children, ...props }: ColumnsProps) => {
  return <StyledColumns {...props}>{getSpacedChildren(children, space, "X")}</StyledColumns>;
};

export default Columns;
