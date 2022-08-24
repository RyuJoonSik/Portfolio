import React from "react";

import SectionHeader from "../../1-atoms/Header/SectionHeader";
import Main from "../../1-atoms/Main/Main";
import RegisterForm from "../RegisterForm/RegisterForm";

export default function MainRegisterForm(): JSX.Element {
  return (
    <Main>
      <SectionHeader>
        <h2>회원가입</h2>
      </SectionHeader>
      <RegisterForm />
    </Main>
  );
}
