import React from "react";
import styled from "styled-components";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";
import { NearMe } from "@styled-icons/material-outlined/NearMe";

import contentDirection from "../../_styles/contentDirection";
import responsiveSize from "../../_styles/responsiveSize";
import PageHeaderButton from "../../atoms/Button/PageHeaderButton";
import UserAuthLinkButton from "../Button/UserAuthLinkButton";

const StyledPageHeaderNavigation = styled.nav`
  ${contentDirection.horizontal};

  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    /* Hide scrollbar for Chrome, Safari and Opera */
    display: none;
  }

  ${responsiveSize.mobile} {
    position: fixed;
    bottom: 0;

    width: 100%;
  }
`;

export default function PageHeaderNavigation(): JSX.Element {
  return (
    <StyledPageHeaderNavigation>
      <PageHeaderButton
        Icon={AccountCircle}
        buttonName="프로필"
        to="/profile"
      />
      <PageHeaderButton Icon={NearMe} buttonName="일상" to="/daily-life" />
      <UserAuthLinkButton />
    </StyledPageHeaderNavigation>
  );
}
