import React from "react";
import styled from "styled-components";
import { Email } from "@styled-icons/material-outlined/Email";
import { Lock } from "@styled-icons/material-outlined/Lock";

import { text_20px_medium } from "../../../styles/textStyle";
import MainContentForm from "../../1-atoms/MainContentForm";
import { StyledMainContentItemContainer } from "../../1-atoms/MainContentItemContainer";
import MainContentTitle from "../../1-atoms/MainContentTitle";

const Input = styled.input`
  position: relative;

  width: 100%;
  padding-left: 1.5rem;

  font-size: 1rem;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.color.mainContentItemInputBorder};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.color.mainContentItemInputBorder};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.color.mainContentItemInputBorder};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainContentItemContainer = styled(StyledMainContentItemContainer)`
  width: 402px;
`;

const Button = styled.button`
  height: calc(3rem + 4px);
  border-radius: 4px;
  background-color: ${({ theme }) =>
    theme.color.mainContentItemLoginButtonBackground};

  color: ${({ theme }) => theme.color.mainContentItemLoginButtonText};
  ${text_20px_medium}
`;

const InputIcon = styled.i`
  position: absolute;

  width: 1rem;
  height: 1rem;

  color: ${({ theme }) => theme.color.mainContentItemInputBorder};
`;

const InputContainer = styled.div`
  position: relative;

  display: flex;
  gap: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.mainContentItemInputBorder};
`;

export default function LoginForm(): JSX.Element {
  return (
    <Wrapper>
      <MainContentItemContainer>
        <MainContentTitle title="안녕하세요!" />
        <MainContentForm>
          <InputContainer>
            <InputIcon as={Email} />
            <Input placeholder="이메일" />
          </InputContainer>
          <InputContainer>
            <InputIcon as={Lock} />
            <Input placeholder="비밀번호" />
          </InputContainer>
          <Button>로그인</Button>
        </MainContentForm>
      </MainContentItemContainer>
    </Wrapper>
  );
}
