import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "default",
    values: [
      {
        name: "default",
        value: "#fff",
      },
      {
        name: "ultramarineBlue",
        value: `rgba(${theme.color.ultramarineBlue})`,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
];
