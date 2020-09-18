import { StyleSheet } from "react-native";
import { shadows } from "../styles";

export const computeStyle = (props: any) => {
  let computedStyle: any | undefined = props.style;
  if (props.rounded) {
    computedStyle = StyleSheet.flatten([computedStyle, { borderRadius: props.rounded }]);
  }
  if (props.roundedTopLeft) {
    computedStyle = StyleSheet.flatten([computedStyle, { borderTopLeftRadius: props.roundedTopLeft }]);
  }
  if (props.roundedTopRight) {
    computedStyle = StyleSheet.flatten([computedStyle, { borderTopRightRadius: props.roundedTopRight }]);
  }
  if (props.borderTopLeftRadius) {
    computedStyle = StyleSheet.flatten([computedStyle, { borderTopLeftRadius: props.borderTopLeftRadius }]);
  }
  if (props.borderTopRightRadius) {
    computedStyle = StyleSheet.flatten([computedStyle, { borderTopRightRadius: props.borderTopRightRadius }]);
  }
  if (props.shadow) {
    computedStyle = StyleSheet.flatten([
      computedStyle,
      shadows[props.shadow > shadows.length ? shadows.length : props.shadow],
    ]);
  }
  if (props.w) {
    computedStyle = StyleSheet.flatten([computedStyle, { width: props.w }]);
  }

  return computedStyle;
};
