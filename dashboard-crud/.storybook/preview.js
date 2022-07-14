import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "@storybook/addon-console";

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
