import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import ColorThemeContext from "./contexts/ColorThemeContext";
import EmptyPage from "./components/4-pages/EmptyPage/EmpityPage";
import MainProfile from "./components/3-organisms/MainProfile/MainProfile";
import MainLogin from "./components/3-organisms/MainLogin/MainLogin";
import MainDailyLifePost from "./components/3-organisms/MainDailyLifePost/MainDailyLifePost";
import MainRegister from "./components/3-organisms/MainRegister/MainRegister";
import UserContext from "./contexts/UserContext";

export default function App(): JSX.Element {
  return (
    <React.StrictMode>
      <ColorThemeContext>
        <GlobalStyle />
        <UserContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<EmptyPage />}>
                <Route index element={<MainProfile />} />
                <Route path="profile" element={<MainProfile />} />
                <Route path="login" element={<MainLogin />} />
                <Route path="register" element={<MainRegister />} />
                <Route path="daily-life-post" element={<MainDailyLifePost />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext>
      </ColorThemeContext>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
