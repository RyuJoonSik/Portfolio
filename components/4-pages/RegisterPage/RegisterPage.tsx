import React from "react";

import PageContentContainer from "../../1-atoms/Box/PageContentContainer";
import Header from "../../3-organisms/Header/Header";
import MainRegisterForm from "../../3-organisms/MainRegisterForm/MainRegisterForm";
import FixedButtonsBox from "../../3-organisms/FixedButtonsBox/FixedButtonsBox";

export default function ReigsterPage(): JSX.Element {
  return (
    <>
      <Header />
      <PageContentContainer>
        <MainRegisterForm />
      </PageContentContainer>
      <FixedButtonsBox />
    </>
  );
}
