import React from "react";
import theme from "../src/config/theme";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { addDecorator } from "@storybook/react";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {storyFn()}
  </ThemeProvider>
));
