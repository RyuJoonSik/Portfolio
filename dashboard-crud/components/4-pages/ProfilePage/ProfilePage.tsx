import React from "react";

import PageContentContainer from "../../1-atoms/Box/PageContentContainer";
import Header from "../../3-organisms/Header/Header";
import MainProfileContents from "../../3-organisms/MainProfileContents/MainProfileContents";

export default function EmptyPage(): JSX.Element {
  return (
    <>
      <Header />
      <PageContentContainer>
        <MainProfileContents />
      </PageContentContainer>
    </>
  );
}
