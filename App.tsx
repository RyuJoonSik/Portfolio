import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./styles/GlobalStyle";
import ColorThemeContext from "./contexts/ColorThemeContext";
import UserContext from "./contexts/UserContext";

// import EmptyPage from "./components/4-pages/EmptyPage/EmptyPage";
// import MainProfileContents from "./components/3-organisms/MainProfileContents/MainProfileContents";
// import MainLoginForm from "./components/3-organisms/MainLoginForm/MainLoginForm";
// import MainRegisterForm from "./components/3-organisms/MainRegisterForm/MainRegisterForm";
// import MainDailyLifeContents from "./components/3-organisms/MainDailyLifeContents/MainDailyLifeContents";

const EmptyPage = React.lazy(
  () => import("./components/4-pages/EmptyPage/EmptyPage")
);
const MainProfileContents = React.lazy(
  () =>
    import("./components/3-organisms/MainProfileContents/MainProfileContents")
);
const MainLoginForm = React.lazy(
  () => import("./components/3-organisms/MainLoginForm/MainLoginForm")
);
const MainRegisterForm = React.lazy(
  () => import("./components/3-organisms/MainRegisterForm/MainRegisterForm")
);
const MainDailyLifeContents = React.lazy(
  () =>
    import(
      "./components/3-organisms/MainDailyLifeContents/MainDailyLifeContents"
    )
);

export default function App(): JSX.Element {
  return (
    <ColorThemeContext>
      <GlobalStyle />
      <BrowserRouter>
        <UserContext>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<EmptyPage />}>
                <Route index element={<MainProfileContents />} />
                <Route path="profile" element={<MainProfileContents />} />
                <Route path="login" element={<MainLoginForm />} />
                <Route path="register" element={<MainRegisterForm />} />
                <Route path="daily-life" element={<MainDailyLifeContents />} />
              </Route>
            </Routes>
          </Suspense>
        </UserContext>
      </BrowserRouter>
    </ColorThemeContext>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
