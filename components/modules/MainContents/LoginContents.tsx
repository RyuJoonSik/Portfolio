import React from "react";
import SectionHeader from "../../atoms/Header/SectionHeader";

import Main from "../../atoms/Main/Main";
import LoginForm from "../Form/LoginForm";

export default function LoginContents(): JSX.Element {
  return (
    <Main>
      <SectionHeader>
        <h2>로그인</h2>
      </SectionHeader>
      <LoginForm />
    </Main>
  );
}
