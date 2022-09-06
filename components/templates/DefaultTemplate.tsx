import React from "react";

import PageHeader from "../modules/Header/PageHeader";
import FixedButtonList from "../modules/List/FixedButtonList";
import PageContentsContainer from "../atoms/Container/PageContentsContainer";

interface DefaultTemplate {
  children?: React.ReactNode;
}

export default function DefaultTemplate({
  children,
}: DefaultTemplate): JSX.Element {
  return (
    <>
      <PageHeader />
      <PageContentsContainer>{children}</PageContentsContainer>
      <FixedButtonList />
    </>
  );
}
