import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../../3-organisms/Header/Header";
import PageContentContainer from "../../1-atoms/Box/PageContentContainer";
import FixedButtonsBox from "../../3-organisms/FixedButtonsBox/FixedButtonsBox";

export default function EmptyPage(): JSX.Element {
  return (
    <>
      <Header />
      <PageContentContainer>
        <Outlet />
      </PageContentContainer>
      <FixedButtonsBox />
    </>
  );
}
