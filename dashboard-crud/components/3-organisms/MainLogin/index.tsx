import React from "react";

import MainBox from "../../1-atoms/MainBox";
import MainContentBox from "../../1-atoms/MainContentBox";
import MainTitle from "../../1-atoms/MainTitle";
import LoginForm from "../../2-molecules/LoginForm";

export default function MainLogin(): JSX.Element {
  return (
    <MainBox>
      <MainContentBox>
        <MainTitle title="로그인" />
        <LoginForm />
      </MainContentBox>
    </MainBox>
  );
}
