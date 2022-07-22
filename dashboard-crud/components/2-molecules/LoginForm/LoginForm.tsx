import React from "react";

import MainSmallContentItemContainer from "../../1-atoms/Box/MainSmallContentItemContainer";
import H3 from "../../1-atoms/Heading/H3";
import Form from "../../1-atoms/Form/Form";
import Input from "../../1-atoms/Input/Input";
import InputContainer from "../../1-atoms/Box/InputContainer";
import FullBlueButton from "../../1-atoms/Button/FullBlueButton";

export default function LoginForm(): JSX.Element {
  return (
    <MainSmallContentItemContainer>
      <H3>안녕하세요!</H3>
      <Form>
        {/* <InputContainer> */}
        <Input placeholder="이메일" />
        {/* </InputContainer> */}
        {/* <InputContainer> */}
        <Input placeholder="비밀번호" />
        {/* </InputContainer> */}
        <FullBlueButton>로그인</FullBlueButton>
      </Form>
    </MainSmallContentItemContainer>
  );
}
