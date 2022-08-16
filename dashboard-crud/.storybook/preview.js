import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withRouter } from "storybook-addon-react-router-v6";
import styled from "styled-components";
import "@storybook/addon-console";

import GlobalStyle from "../styles/GlobalStyle";
import ColorThemeContextProvider from "../contexts/ColorThemeContext";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const decorators = [
  withRouter,
  (Story) => (
    <>
      <ColorThemeContextProvider>
        <GlobalStyle />
        <Container>
          <Story />
        </Container>
      </ColorThemeContextProvider>
    </>
  ),
];
