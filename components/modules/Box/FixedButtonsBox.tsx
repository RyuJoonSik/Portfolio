import React from "react";
import styled from "styled-components";

import contentDirection from "../../_styles/contentDirection";
import responsiveSize from "../../_styles/responsiveSize";
import spaceSize from "../../_styles/spaceSize";
import DarkModeButton from "../Button/DarkModeButton";
import ScrollToTopButton from "../Button/ScrollToTopButton";

const navigationBarHeight = "62px";

const StyledFixedButtonsBox = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  ${contentDirection.horizontal};
  gap: ${spaceSize.medium};

  ${responsiveSize.mobile} {
    right: 0;
    bottom: calc(1rem + ${navigationBarHeight});

    ${contentDirection.vertical};
    gap: ${spaceSize.smaller};
  }
`;

export default function FixedButtonsBox(): JSX.Element {
  return (
    <StyledFixedButtonsBox>
      <DarkModeButton />
      <ScrollToTopButton />
    </StyledFixedButtonsBox>
  );
}
