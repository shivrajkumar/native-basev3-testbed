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
import { getUnit } from "../../../utils/getUnit";
export type IAspectRatioBoxProps = ViewProps &
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
    ratio?: number;
    children?: JSX.Element | JSX.Element[];
  };

const StyledAspectRatioBox = styled(View)<IAspectRatioBoxProps>(
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
const AspectRatioBox = ({ style, ...props }: IAspectRatioBoxProps) => {
  let computedStyle: ViewStyle | undefined = style;
  if (props.w || props.width) {
    let width: string = props.w ? props.w.toString() : props.width ? props.width.toString() : "";
    var length = parseInt(width.match(/(\d+)/)[0], 10);
    var unit = getUnit(width);
    computedStyle = StyleSheet.flatten([
      style,
      props.ratio ? { height: length * (1 / props.ratio) + unit } : {},
    ]);
  }
  if (props.h || props.height) {
    let height: string = props.h ? props.h.toString() : props.height ? props.height.toString() : "";
    var length = parseInt(height.match(/(\d+)/)[0], 10);
    var unit = getUnit(height);
    computedStyle = StyleSheet.flatten([
      style,
      props.ratio ? { width: length * props.ratio + unit } : {},
    ]);
  }
  if ((props.w || props.width) && (props.h || props.height)) {
    computedStyle = StyleSheet.flatten([
      style,
      {
        width: props.w ? props.w.toString() : props.width ? props.width.toString() : "",
        height: props.h ? props.h.toString() : props.height ? props.height.toString() : "",
      },
    ]);
  }
  if (!props.w && !props.width && !props.h && !props.height) {
    computedStyle = StyleSheet.flatten([
      style,
      props.ratio ? { height: 100 * (1 / props.ratio) + "%", width: "100%" } : {},
    ]);
  }

  return <StyledAspectRatioBox {...props} style={computedStyle} />;
};

export default AspectRatioBox;
