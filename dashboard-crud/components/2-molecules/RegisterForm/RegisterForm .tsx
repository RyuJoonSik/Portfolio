import React from "react";
import { Email } from "@styled-icons/material-outlined/Email";
import { Lock } from "@styled-icons/material-outlined/Lock";

import MainSmallContentItemContainer from "../../1-atoms/Box/MainSmallContentItemContainer";
import H3 from "../../1-atoms/Heading/H3";
import Form from "../../1-atoms/Form/Form";
import Input from "../../1-atoms/Input/Input";
import FullBlueButton from "../../1-atoms/Button/FullBlueButton";
import SmallIcon from "../../1-atoms/Icon/SmallIcon";
import InputContainer from "../../1-atoms/Box/InputContainer";
import MainContentItemHeader from "../../1-atoms/Header/MainContentItemHeader";

export default function RegisterForm(): JSX.Element {
  return (
    <MainSmallContentItemContainer>
      <MainContentItemHeader>
        <H3>환영합니다!</H3>
      </MainContentItemHeader>
      <Form>
        <InputContainer>
          <SmallIcon as={Email} />
          <Input placeholder="이메일" type="email" />
        </InputContainer>
        <InputContainer>
          <SmallIcon as={Lock} />
          <Input placeholder="비밀번호" type="password" />
        </InputContainer>
        <FullBlueButton>회원가입</FullBlueButton>
      </Form>
    </MainSmallContentItemContainer>
  );
}
