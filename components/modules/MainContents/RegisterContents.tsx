import React from "react";

import SectionHeader from "../../atoms/Header/SectionHeader";
import Main from "../../atoms/Main/Main";
import RegisterForm from "../Form/RegisterForm";

export default function RegisterContents(): JSX.Element {
  return (
    <Main>
      <SectionHeader>
        <h2>회원가입</h2>
      </SectionHeader>
      <RegisterForm />
    </Main>
  );
}
