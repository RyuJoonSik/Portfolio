import React from "react";

import PageContentContainer from "../../1-atoms/Box/PageContentContainer";
import Header from "../../3-organisms/Header/Header";
import MainLoginForm from "../../3-organisms/MainLoginForm/MainLoginForm";

export default function LoginPage(): JSX.Element {
  return (
    <>
      <Header />
      <PageContentContainer>
        <MainLoginForm />
      </PageContentContainer>
    </>
  );
}
