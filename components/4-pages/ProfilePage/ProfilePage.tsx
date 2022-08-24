import React from "react";

import Header from "../../3-organisms/Header/Header";
import MainProfileContents from "../../3-organisms/MainProfileContents/MainProfileContents";
import FixedButtonsBox from "../../3-organisms/FixedButtonsBox/FixedButtonsBox";
import PageContentContainer from "../../1-atoms/Box/PageContentContainer";

export default function EmptyPage(): JSX.Element {
  return (
    <>
      <Header />
      <PageContentContainer>
        <MainProfileContents />
      </PageContentContainer>
      <FixedButtonsBox />
    </>
  );
}
