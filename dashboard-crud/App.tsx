import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import DefaultPage from "./components/3-pages/DefaultPage";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <DefaultPage />
      </ThemeProvider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
