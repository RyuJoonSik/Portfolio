import React from "react";
import styled from "styled-components";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";
import { NearMe } from "@styled-icons/material-outlined/NearMe";
import { Login } from "@styled-icons/material-sharp/Login";

import HeaderBox from "../../1-atoms/HeaderBox";
import HeaderIconButton from "../../2-molecules/HeaderIconButton";
import HeaderTitle from "../../1-atoms/HeaderTitle";
import DarkModeButton from "../../2-molecules/DarkModeButton";
import { MOBILE_SIZE, TABLET_SIZE } from "../../../styles/deviceSize";

const ScrollFrame = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex: 1;
  max-width: calc(5rem * 4);

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    /* Hide scrollbar for Chrome, Safari and Opera */
    display: none;
  }

  ${TABLET_SIZE} {
    overflow-x: scroll;
  }

  ${MOBILE_SIZE} {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    max-width: none;
  }
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default function Header(): JSX.Element {
  return (
    <HeaderBox>
      <HeaderTitle />
      <ScrollFrame>
        <Group>
          <DarkModeButton />
          <HeaderIconButton Icon={AccountCircle} name="프로필" />
          <HeaderIconButton Icon={NearMe} name="일상" />
          <HeaderIconButton Icon={Login} name="로그인" />
        </Group>
      </ScrollFrame>
    </HeaderBox>
  );
}
