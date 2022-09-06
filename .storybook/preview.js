import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withRouter } from "storybook-addon-react-router-v6";
import "@storybook/addon-console";

import GlobalStyle from "../components/_styles/GlobalStyle";
import { lightTheme, darkTheme } from "../components/_styles/theme";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
// .storybook/preview.js

// import { ThemeProvider } from 'styled-components';
// import { addDecorator } from '@storybook/react';
import { withThemes } from "@react-theming/storybook-addon";

// pass ThemeProvider and array of your themes to decorator

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
  withThemes(ThemeProvider, themes),
  // withThemesProvider(themes, ThemeProvider),
];
