import React from "react";

import MainContainer from "../../1-atoms/MainContainer";
import MainContentContainer from "../../1-atoms/MainContentContainer";
import MainTitle from "../../1-atoms/MainTitle";
import LoginForm from "../../2-molecules/LoginForm";

export default function MainLogin(): JSX.Element {
  return (
    <MainContainer>
      <MainContentContainer>
        <MainTitle title="로그인" />
        <LoginForm />
      </MainContentContainer>
    </MainContainer>
  );
}
