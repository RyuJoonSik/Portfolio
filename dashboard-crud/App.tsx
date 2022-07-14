import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./styles/GlobalStyle";
import ProfilePage from "./components/4-pages/ProfilePage";
import ThemeContextProvider from "./contexts/ThemeContext";

export default function App(): JSX.Element {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <ProfilePage />
    </ThemeContextProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
