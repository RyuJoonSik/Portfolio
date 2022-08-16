import React from "react";
import styled from "styled-components";

import contentDirection from "../../../styles/contentDirection";
import scroll from "../../../styles/scroll";
import responsiveSize from "../../../styles/responsiveSize";
import DarkModeButton from "../../2-molecules/Button//DarkModeButton";
import UserLoginStateButton from "../../2-molecules/Button//UserLoginStateButton";
import ProfileLinkButton from "../../2-molecules/Button/ProfileLinkButton";
import DailyLifeLinkButton from "../../2-molecules/Button/DailyLifeLinkButton";

const HeaderButtonsContainer = styled.div`
  ${contentDirection.horizontal};

  overflow: scroll;
  ${scroll.hidden};

  ${responsiveSize.mobile} {
    position: fixed;
    bottom: 0;

    width: 100%;
  }
`;

export default function HeaderButtonsBox(): JSX.Element {
  return (
    <HeaderButtonsContainer>
      {/* <DarkModeButton /> */}
      <ProfileLinkButton />
      <DailyLifeLinkButton />
      <UserLoginStateButton />
    </HeaderButtonsContainer>
  );
}
