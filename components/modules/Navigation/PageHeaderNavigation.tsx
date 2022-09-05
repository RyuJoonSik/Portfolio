import React from "react";
import styled from "styled-components";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";
import { NearMe } from "@styled-icons/material-outlined/NearMe";

import contentDirection from "../../_styles/contentDirection";
import responsiveSize from "../../_styles/responsiveSize";
import { PageHeaderLinkButton } from "../../atoms/Button/PageHeaderButton";
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
      <PageHeaderLinkButton to="/profile">
        <AccountCircle size={24} />
        프로필
      </PageHeaderLinkButton>
      <PageHeaderLinkButton to="/daily-life">
        <NearMe size={24} />
        일상
      </PageHeaderLinkButton>
      <UserAuthLinkButton />
    </StyledPageHeaderNavigation>
  );
}
