/* eslint-disable react/no-array-index-key */
import React from "react";
import { Text } from "react-native";

import { Box, Stack } from "../../primitives";

interface ListProps {
  children: JSX.Element[] | JSX.Element;
  start?: number;
  type?: "number" | "bullet" | "alpha";
  space?: number;
  size?: number;
}

const StandardIndicator = () => {
  return <Box height={5} width={5} backgroundColor="#000000" borderRadius={5} mr={5} />;
};

interface NumberIndicatorProps {
  index: number;
  start: number;
}

const NumberIndicator = ({ start, index }: NumberIndicatorProps) => {
  return (
    <Box mr={10}>
      <Text>{`${start + index}.`}</Text>
    </Box>
  );
};

interface AlphaIndicator {
  index: number;
  start: number;
}
const ALPHA_OFFSET = 97;

const AlphaIndicator = ({ start, index }: AlphaIndicator) => {
  const t = start - 1 + index;
  const c = ALPHA_OFFSET + (t / 26 ? t % 26 : t);
  return (
    <Box mr={10}>
      <Text>{`${String.fromCharCode(c)}.`}</Text>
    </Box>
  );
};

interface IndicatorProps extends Pick<ListProps, "type"> {
  index: number;
  start: number;
}

const Indicator = ({ type, index, start }: IndicatorProps) => {
  if (type === "bullet") return <StandardIndicator />;
  if (type === "number") return <NumberIndicator index={index} start={start} />;
  if (type === "alpha") return <AlphaIndicator index={index} start={start} />;
  return null;
};

const List = ({ children, start = 1, type = "alpha", space = 1, size, ...props }: ListProps) => {
  const childrenList = Array.isArray(children) ? children : [children];
  return (
    <Stack space={space}>
      {childrenList.map((child, index) => {
        return (
          <Box {...props} height={size} flexDirection="row" alignItems="center" key={index}>
            <Indicator type={type} index={index} start={start} />
            <Box key={index}>{child}</Box>
          </Box>
        );
      })}
    </Stack>
  );
};

export default List;
