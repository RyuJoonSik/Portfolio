import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withRouter } from "storybook-addon-react-router-v6";
import styled from "styled-components";
import "@storybook/addon-console";

import GlobalStyle from "../components/_styles/GlobalStyle";
import ColorThemeContext from "../contexts/ColorThemeContext";
import DarkModeButton from "../components/2-molecules/Button/DarkModeButton";

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

const StyledDarkModeButton = styled(DarkModeButton)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

export const decorators = [
  withRouter,
  (Story) => (
    <ColorThemeContext>
      <GlobalStyle />
      <Story />
      <StyledDarkModeButton />
    </ColorThemeContext>
  ),
];
