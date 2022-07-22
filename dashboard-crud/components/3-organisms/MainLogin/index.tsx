import React from "react";

import Main from "../../1-atoms/Main/Main";
import LoginForm from "../../2-molecules/LoginForm/LoginForm";
import MainContentContainer from "../../1-atoms/Box/MainContentContainer";
import H2 from "../../1-atoms/Heading/H2";

export default function MainLogin(): JSX.Element {
  return (
    <Main>
      <MainContentContainer>
        <H2>로그인</H2>
        <LoginForm />
      </MainContentContainer>
    </Main>
  );
}
