import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";
import ThemeContextProvider from "../contexts/ThemeContext";

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
        value: "#999",
      },
      {
        name: "ultramarineBlue",
        value: `rgba(${theme.color.ultramarineBlue})`,
      },
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  (Story) => (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <Story />
      </ThemeContextProvider>
    </>
  ),
];
