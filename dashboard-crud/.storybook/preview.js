import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "@storybook/addon-console";

import GlobalStyle from "../styles/GlobalStyle";
import ThemeContextProvider from "../contexts/ThemeContext";
import { withRouter } from "storybook-addon-react-router-v6";

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
  withRouter,
  (Story) => (
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <Story />
      </ThemeContextProvider>
    </>
  ),
];
