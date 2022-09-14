import React from "react";
import styled from "styled-components";
import boxShadow from "../../_styles/boxShadow";
import { blue } from "../../_styles/color";
import contentAlign from "../../_styles/contentAlign";

import contentDirection from "../../_styles/contentDirection";
import responsiveSize from "../../_styles/responsiveSize";
import spaceSize from "../../_styles/spaceSize";
import PageHeaderNavigation from "../Navigation/PageHeaderNavigation";

const StyledPageHeader = styled.header`
  position: fixed;
  z-index: 1;

  ${contentDirection.horizontal};
  ${contentAlign.spaceBetweenCenter};
  gap: ${spaceSize.largest};
  padding: ${spaceSize.small} ${spaceSize.large};
  background-color: ${blue.default};
  box-sizing: border-box;
  width: 100%;
  ${boxShadow.header};

  ${responsiveSize.mobile} {
    ${contentAlign.center};
    padding: 0;
  }
`;

const TITLE = "<frontend>류준식</frontend>";

export default function PageHeader(): JSX.Element {
  return (
    <StyledPageHeader>
      <h1>{TITLE}</h1>
      <PageHeaderNavigation />
    </StyledPageHeader>
  );
}
