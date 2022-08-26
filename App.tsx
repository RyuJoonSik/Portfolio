import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import GlobalStyle from "./components/_styles/GlobalStyle";
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";
// import DefaultTemplate from "./components/templates/DefaultTemplate";
// import ProfileContents from "./components/modules/MainContents/ProfileContents";
// import DailyLifeContents from "./components/modules/MainContents/DailyLifeContents";
// import LoginContents from "./components/modules/MainContents/LoginContents";
// import RegisterContents from "./components/modules/MainContents/RegisterContents";

const DefaultTemplate = React.lazy(
  () => import("./components/templates/DefaultTemplate")
);
const ProfileContents = React.lazy(
  () => import("./components/modules/MainContents/ProfileContents")
);
const DailyLifeContents = React.lazy(
  () => import("./components/modules/MainContents/DailyLifeContents")
);
const LoginContents = React.lazy(
  () => import("./components/modules/MainContents/LoginContents")
);
const RegisterContents = React.lazy(
  () => import("./components/modules/MainContents/RegisterContents")
);

export default function App(): JSX.Element {
  return (
    <ThemeContext>
      <GlobalStyle />
      <BrowserRouter>
        <UserContext>
          <Suspense fallback={<DefaultTemplate />}>
            <Routes>
              <Route
                path="/"
                element={
                  <DefaultTemplate>
                    <Outlet />
                  </DefaultTemplate>
                }
              >
                <Route index element={<ProfileContents />} />
                <Route path="profile" element={<ProfileContents />} />
                <Route path="daily-life" element={<DailyLifeContents />} />
                <Route path="login" element={<LoginContents />} />
                <Route path="register" element={<RegisterContents />} />
              </Route>
            </Routes>
          </Suspense>
        </UserContext>
      </BrowserRouter>
    </ThemeContext>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
