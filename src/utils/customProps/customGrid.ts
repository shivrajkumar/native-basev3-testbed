import * as CSS from "csstype";
import { Config, system } from "styled-system";

const config: Config = {
  gridColumnStart: true,
  gridColumnEnd: true,
  placeItems: true,
};

/**
 * Types for grid related CSS properties
 */
export interface customGridProps {
  /**
   * The CSS `grid-column` property
   */
  gridColumnStart?: CSS.Property.GridColumnStart;
  /**
   * The CSS `grid-column` property
   */
  gridColumnEnd?: CSS.Property.GridColumnEnd;
  /**
   * The CSS `place-items` property
   */
  placeItems?: CSS.Property.PlaceItems;
}

export const customGrid = system(config);
