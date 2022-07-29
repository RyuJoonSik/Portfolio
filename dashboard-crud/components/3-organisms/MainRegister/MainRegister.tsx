import React from "react";

import Main from "../../1-atoms/Main/Main";
import MainContentContainer from "../../1-atoms/Box/MainContentContainer";
import H2 from "../../1-atoms/Heading/H2";
import RegisterForm from "../../2-molecules/RegisterForm/RegisterForm ";

export default function MainRegister(): JSX.Element {
  return (
    <Main>
      <MainContentContainer>
        <H2>회원가입</H2>
        <RegisterForm />
      </MainContentContainer>
    </Main>
  );
}
