import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withRouter } from "storybook-addon-react-router-v6";
import "@storybook/addon-console";
import { withThemes } from "@react-theming/storybook-addon";

import GlobalStyle from "../components/_styles/GlobalStyle";
import { lightTheme, darkTheme } from "../components/_styles/theme";
import ThemeProvider from "../contexts/ThemeContext";

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
      <ThemeProvider>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </>
  ),
  // withThemes(ThemeProvider, themes),
];
