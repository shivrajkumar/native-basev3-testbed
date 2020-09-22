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

export type IContainerProps = ViewProps &
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

const StyledContainer = styled(View)<IContainerProps>(
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
const Container = ({ style, ...props }: IContainerProps) => {
    let computedStyle: ViewStyle | undefined = style;
  computedStyle = StyleSheet.flatten([
    style,
    { width:"100%" },
  ]);
  return <StyledContainer {...props} style={computedStyle} />;
};

export default Container;
