/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { storiesOf } from "@storybook/react-native";
import { Text as RNText, View as RNView } from "react-native";
import { boolean, color, number, select, text, withKnobs } from "@storybook/addon-knobs";

import { Box, Column, Columns, Icon, Stack, Text, View } from "../../src/components/primitives";
import { AppBar, Button, IconButton } from "../../src/components/composites";
import Theme from "../../src/theme";

type GetStory = () => JSX.Element | JSX.Element[];

storiesOf("Primitives", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} bg="gray.2">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add("Web Layout", () => (
    <Columns flexGrow={number("flexGrow", 1)}>
      <Column bg="gray.1" width={0.2 / 1} flexGrow={number("flexGrow", 1)} />
      <Column bg="gray.2" width={0.8 / 1} flexGrow={number("flexGrow", 1)}>
        <Stack height={number("height", 200)} flexGrow={number("flexGrow", 1)}>
          <Box bg="gray.3" height={55} />
          <Box bg="gray.1" height={65} />
          <Columns flexGrow={number("flexGrow", 1)} m={30}>
            <Column
              bg="green.3"
              borderRadius={number("borderRadius", 4)}
              shadow={number("shadow", 1)}
              flexGrow={number("flexGrow", 1)}
              mx={20}
            />
            <Column
              bg="green.4"
              borderRadius={number("borderRadius", 4)}
              shadow={number("shadow", 1)}
              flexGrow={number("flexGrow", 1)}
              mx={20}
            />
            <Column
              bg="green.5"
              borderRadius={number("borderRadius", 4)}
              shadow={number("shadow", 1)}
              flexGrow={number("flexGrow", 1)}
              mx={20}
            />
          </Columns>

          <Box bg="gray.4" height={number("height", 80)} flexGrow={number("flexGrow", 1)} />
        </Stack>
      </Column>
    </Columns>
  ))
  .add("Box", () => (
    <Box
      shadow={select(
        "shadow",
        {
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
        },
        2,
      )}
      height={70}
      bg={color("bg", "blue.3")}
    />
  ))
  .add("Columns", () => (
    <Columns space={number("space", 3)} height={number("height", 100)} mb={number("mb", 3)}>
      <Column
        borderRadius={number("borderRadius", 4)}
        shadow={number("shadow", 1)}
        flexGrow={number("flexGrow", 1)}
        bg="green.5"
      />
      <Column
        borderRadius={number("borderRadius", 4)}
        shadow={number("shadow", 1)}
        width={1 / 2.5}
        bg="pink.3"
      />
      <Column
        borderRadius={number("borderRadius", 4)}
        shadow={number("shadow", 1)}
        flexGrow={number("flexGrow", 1.5)}
        bg="indigo.8"
      />
    </Columns>
  ))
  .add("Stack", () => (
    <Stack space={number("space", 3)} mb={number("mb", 3)}>
      <Box
        borderRadius={number("borderRadius", 4)}
        height={number("height", 70)}
        shadow={number("shadow", 1)}
        bg="blue.3"
      />
      <Box
        borderRadius={number("borderRadius", 4)}
        shadow={number("shadow", 1)}
        height={number("height", 70)}
        bg="purple.5"
      />
      <Box
        borderRadius={number("borderRadius", 4)}
        shadow={number("shadow", 1)}
        height={number("height", 70)}
        bg="yellow.4"
      />
    </Stack>
  ))
  .add("Icon", () => <Icon name={text("name", "menu")} type="MaterialIcons" />);

storiesOf("Composites", module)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={Theme}>
      <View flexGrow={1} justifyContent="center" p={3} bg="gray.2">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add("Button", () => (
    <Button
      outline={boolean("Outline", false)}
      variant={select(
        "variant",
        {
          critical: "critical",
          promote: "promote",
          caution: "caution",
          positive: "positive",
          neutral: "neutral",
          info: "info",
        },
        "critical",
      )}
      label={text("label", "Login")}
    />
  ))
  .add("AppBar", () => (
    <AppBar
      leading={
        // eslint-disable-next-line react/jsx-wrap-multilines
        <IconButton
          name={select(
            "icon",
            {
              menu: "menu",
              account: "account-circle",
              back: "arrow-back",
              home: "home",
            },
            "menu",
          )}
          type="MaterialIcons"
        />
      }
      title={<Text>{text("title", "Header")}</Text>}
      actions={[
        <IconButton key="chat" name="chat" type="MaterialIcons" />,
        <IconButton key="favourite" name="favorite" type="MaterialIcons" />,
        <IconButton key="loop" name="loop" type="MaterialIcons" />,
      ]}
      bg={color("bg", "blue.6")}
    />
  ))
  .add("IconButton", () => (
    <IconButton type="MaterialIcons" name={text("name", "menu")} bg={text("bg", "blue.5")} />
  ));