import React from "react";
import styled from "styled-components";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";
import { NearMe } from "@styled-icons/material-outlined/NearMe";
import { Login } from "@styled-icons/material-sharp/Login";

import HeaderBox from "../../1-atoms/HeaderBox";
import HeaderIconButton from "../../2-molecules/HeaderIconButton";
import HeaderTitle from "../../1-atoms/HeaderTitle";

const Group = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;
  gap: 0.5rem;

  @media screen and (max-width: 633px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    justify-content: center;

    background-color: rgb(${({ theme }) => theme.color.ultramarineBlue});
  }
`;

export default function Header(): JSX.Element {
  return (
    <HeaderBox>
      <HeaderTitle />
      <Group>
        <HeaderIconButton Icon={Brightness6} name="다크 모드" />
        <HeaderIconButton Icon={AccountCircle} name="프로필" />
        <HeaderIconButton Icon={NearMe} name="일상" />
        <HeaderIconButton Icon={Login} name="로그인" />
      </Group>
    </HeaderBox>
  );
}
