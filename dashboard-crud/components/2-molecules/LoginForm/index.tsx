import React from "react";
import styled from "styled-components";

import MainContentForm from "../../1-atoms/MainContentForm";
import MainContentItemBox from "../../1-atoms/MainContentItemBox";
import MainContentTitle from "../../1-atoms/MainContentTitle";

const StyledInput = styled.input`
  height: 3rem;
`;

export default function LoginForm(): JSX.Element {
  return (
    <MainContentItemBox>
      <MainContentTitle title="안녕하세요." />
      <MainContentForm>
        <StyledInput></StyledInput>
        <StyledInput></StyledInput>
      </MainContentForm>
    </MainContentItemBox>
  );
}
