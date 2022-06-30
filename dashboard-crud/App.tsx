import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/GlobalStyle";
import DefaultPage from "./pages/DefaultPage/DefaultPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <DefaultPage />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
