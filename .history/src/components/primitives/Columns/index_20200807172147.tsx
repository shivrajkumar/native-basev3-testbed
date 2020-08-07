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

type SpaceType =
  | "gutter"
  | "xxsmall"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge";

type ColumnsProps = IColumnsProps &
  ViewProps & {
    children: JSX.Element[] | JSX.Element;
    space?: number | SpaceType;
  };

const Columns = ({ space, children, ...props }: ColumnsProps) => {
  return <StyledColumns {...props}>{getSpacedChildren(children, space, "Y")}</StyledColumns>;
};

export default Columns;
