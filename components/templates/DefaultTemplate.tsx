import React from "react";

import PageHeader from "../modules/Header/PageHeader";
import FixedButtonsBox from "../modules/Box/FixedButtonsBox";
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
      <FixedButtonsBox />
    </>
  );
}
