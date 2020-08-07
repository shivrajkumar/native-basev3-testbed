import React from "react";

import { Box, Column, Columns, Stack, View } from "./src/components/primitives";

export default function App() {
  return (
    <Stack height={number("height", "100%")} bg="gray.5">
      <Columns flexGrow={number("flexGrow", 1)}>
        <Column bg="pink.2" width={0.2 / 1} flexGrow={number("flexGrow", 1)} />
        <View bg="gray.5" width={0.8 / 1} flexGrow={number("flexGrow", 1)}>
          <Box flexGrow={number("flexGrow", 1)} height={number("height", 200)}>
            <Column
              bg="pink.4"
              width={0.2 / 1}
              height={number("height", 80)}
              flexGrow={number("flexGrow", 1)}
            />
            <Column
              bg="pink.4"
              width={0.2 / 1}
              height={number("height", 100)}
              flexGrow={number("flexGrow", 1)}
            />
          </Box>
        </View>
      </Columns>
    </Stack>
  );
}
