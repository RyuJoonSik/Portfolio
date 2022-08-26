import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import GlobalStyle from "./components/_styles/GlobalStyle";
import ThemeContext from "./contexts/ThemeContext";
import UserContext from "./contexts/UserContext";
import DefaultTemplate from "./components/templates/DefaultTemplate";
import ProfileContents from "./components/modules/MainContents/ProfileContents";
import DailyLifeContents from "./components/modules/MainContents/DailyLifeContents";
import LoginContents from "./components/modules/MainContents/LoginContents";
import RegisterContents from "./components/modules/MainContents/RegisterContents";

// import EmptyPage from "./components/4-pages/EmptyPage/EmptyPage";
// import MainProfileContents from "./components/3-organisms/MainProfileContents/MainProfileContents";
// import MainLoginForm from "./components/3-organisms/MainLoginForm/MainLoginForm";
// import MainRegisterForm from "./components/3-organisms/MainRegisterForm/MainRegisterForm";
// import MainDailyLifeContents from "./components/3-organisms/MainDailyLifeContents/MainDailyLifeContents";

// const EmptyPage = React.lazy(
//   () => import("./components/4-pages/EmptyPage/EmptyPage")
// );
// const MainProfileContents = React.lazy(
//   () =>
//     import("./components/3-organisms/MainProfileContents/MainProfileContents")
// );
// const MainLoginForm = React.lazy(
//   () => import("./components/3-organisms/MainLoginForm/MainLoginForm")
// );
// const MainRegisterForm = React.lazy(
//   () => import("./components/3-organisms/MainRegisterForm/MainRegisterForm")
// );
// const MainDailyLifeContents = React.lazy(
//   () =>
//     import(
//       "./components/3-organisms/MainDailyLifeContents/MainDailyLifeContents"
//     )
// );

export default function App(): JSX.Element {
  return (
    <ThemeContext>
      <GlobalStyle />
      <BrowserRouter>
        <UserContext>
          <Suspense fallback={<div>Loading...</div>}>
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
                {/* <Route path="logout" element={<LogoutContents />} /> */}
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
