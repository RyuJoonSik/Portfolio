import React from "react";

import SectionHeader from "../../1-atoms/Header/SectionHeader";
import Main from "../../1-atoms/Main/Main";
import LoginForm from "../LoginForm/LoginForm";

export default function MainLoginForm(): JSX.Element {
  return (
    <Main>
      <SectionHeader>
        <h2>로그인</h2>
      </SectionHeader>
      <LoginForm />
    </Main>
  );
}
