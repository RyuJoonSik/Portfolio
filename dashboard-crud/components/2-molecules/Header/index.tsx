import React from "react";
import styled from "styled-components";

import {
  BoxContentCenter,
  BoxContentLeft,
  BoxContentRight,
  HeaderBox,
} from "../../0-base/Box";
import DarkModeButton from "../../1-atoms/DarkModeButton";
import HeaderTitle from "../../1-atoms/HeaderTitle";
import ProfileButton from "../../1-atoms/ProfileButton";
import SearchInput from "../../1-atoms/SearchInput";

// const LeftGroup = styled(BoxContentLeft)`
/* flex: 1; */
// `;

const RightGroup = styled(BoxContentRight)`
  flex: 1;
  gap: 0.5rem;
`;

export default function Header(): JSX.Element {
  return (
    <HeaderBox>
      {/* <LeftGroup> */}
      <HeaderTitle />
      {/* </LeftGroup> */}
      <RightGroup>
        <DarkModeButton />
        <ProfileButton />
      </RightGroup>
    </HeaderBox>
  );
}
