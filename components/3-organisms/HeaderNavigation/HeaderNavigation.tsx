import React from "react";
import styled from "styled-components";

import contentDirection from "../../../styles/contentDirection";
import scroll from "../../../styles/scroll";
import responsiveSize from "../../../styles/responsiveSize";
import ProfileLinkButton from "../../2-molecules/Button/ProfileLinkButton";
import DailyLifeLinkButton from "../../2-molecules/Button/DailyLifeLinkButton";

const StyledHeaderNavigation = styled.nav`
  ${contentDirection.horizontal};

  overflow: scroll;
  ${scroll.hidden};

  ${responsiveSize.mobile} {
    position: fixed;
    bottom: 0;

    width: 100%;
  }
`;

export default function HeaderNavigation(): JSX.Element {
  return (
    <StyledHeaderNavigation>
      <ProfileLinkButton />
      <DailyLifeLinkButton />
    </StyledHeaderNavigation>
  );
}
