import React from "react";
import styled from "styled-components";

import {
  BoxContentCenter,
  BoxContentLeft,
  BoxContentRight,
} from "../../0-base/FlexBox";
import DarkModeButton from "../../1-atoms/DarkModeButton";
import HeaderBox from "../../1-atoms/HeaderBox";
import HeaderTitle from "../../1-atoms/HeaderTitle";
import NavigationDrawerButton from "../../1-atoms/NavigationDrawerButton";
import ProfileButton from "../../1-atoms/ProfileButton";
import SearchInput from "../../1-atoms/SearchInput";

const LeftGroup = styled(BoxContentLeft)`
  flex: 1;
`;

const CenterGroup = styled(BoxContentCenter)`
  flex: 1;
`;

const RightGroup = styled(BoxContentRight)`
  flex: 1;
`;

export default function Header(): JSX.Element {
  return (
    <HeaderBox>
      <LeftGroup>
        <HeaderTitle />
      </LeftGroup>
      <CenterGroup>
        <DarkModeButton />
        <ProfileButton />
      </CenterGroup>
      <RightGroup>
        <SearchInput />
      </RightGroup>
    </HeaderBox>
  );
}
