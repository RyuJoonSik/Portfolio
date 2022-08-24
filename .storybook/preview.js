import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withRouter } from "storybook-addon-react-router-v6";
import "@storybook/addon-console";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../components/_styles/GlobalStyle";
import { lightTheme, darkTheme } from "../components/_styles/theme";

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

const themes = [lightTheme, darkTheme];

export const decorators = [
  withRouter,
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
  withThemesProvider(themes, ThemeProvider),
];
