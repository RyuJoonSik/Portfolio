import React from "react";
import styled from "styled-components";
import { text_20px_medium } from "../../../styles/textStyle";

import MainContentForm from "../../1-atoms/MainContentForm";
import MainContentItemContainer from "../../1-atoms/MainContentItemContainer";
import MainContentTitle from "../../1-atoms/MainContentTitle";

const Input = styled.input`
  box-sizing: border-box;
  width: 402px;
  height: 3rem;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid
    rgb(${({ theme }) => theme.color.mainContentItemInputBorder});

  & + & {
    margin-top: -1px;
    border-radius: 4px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  height: calc(3rem + 4px);
  border-radius: 4px;
  background-color: rgb(
    ${({ theme }) => theme.color.mainContentItemLoginButtonBackground}
  );

  color: rgb(${({ theme }) => theme.color.mainContentItemLoginButtonText});
  ${text_20px_medium}
`;

export default function LoginForm(): JSX.Element {
  return (
    <Wrapper>
      <MainContentItemContainer>
        <MainContentTitle title="안녕하세요!" />
        <MainContentForm>
          <Input placeholder="이메일"></Input>
          <Input placeholder="비밀번호"></Input>
          <Button>로그인</Button>
        </MainContentForm>
      </MainContentItemContainer>
    </Wrapper>
  );
}
