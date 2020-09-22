import React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
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
  space,
  height,
} from "styled-system";
import {
  customBorder,
  customBorderProps,
  customBackground,
  customBackgroundProps,
  customOutline,
  customOutlineProps,
  customLayout,
  customLayoutProps,
  customExtra,
  customExtraProps,
  customShadowProps,
  customShadow,
} from "../../../utils/customProps";

export type ICenterProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: ViewStyle;
    ratio?: number | undefined;
    children?: JSX.Element | JSX.Element[];
  };

const StyledCenter = styled(View)<ICenterProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
);
const Center = ({ style, ...props }: ICenterProps) => {
  let computedStyle: ViewStyle | undefined = style;
  computedStyle = StyleSheet.flatten([
    style,
    { display: "flex", alignItems: "center", justifyContent: "center" },
  ]);

  return <StyledCenter {...props} style={computedStyle} />;
};

export default Center;
