import React from "react";

import Header from "../../3-organisms/Header/Header";
import MainDailyLifeContents from "../../3-organisms/MainDailyLifeContents/MainDailyLifeContents";
import PageContentContainer from "../../1-atoms/Box/PageContentContainer";

export default function DailyLifePage(): JSX.Element {
  return (
    <>
      <Header />
      <PageContentContainer>
        <MainDailyLifeContents />
      </PageContentContainer>
    </>
  );
}
