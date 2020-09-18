import * as CSS from "csstype";
// import { shadows } from "../../styles";
import { Config, system, shadow } from "styled-system";

const config: Config = {
  shadow: {
    property: "boxShadow",
    scale: "shadows",
    shadowColor: ["#000", "#283"],
  },
};

export interface customShadowProps {
  /**
   * The `box-shadow` property
   */
  shadow?: CSS.Property.BoxShadow | number;
}

export const customShadow = system(config);
