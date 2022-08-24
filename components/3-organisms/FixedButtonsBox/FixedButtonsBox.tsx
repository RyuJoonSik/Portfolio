import React from "react";
import styled from "styled-components";
import contentDirection from "../../../styles/contentDirection";
import responsiveSize from "../../../styles/responsiveSize";
import spaceSize from "../../../styles/spaceSize";
import DarkModeButton from "../../2-molecules/Button/DarkModeButton";
import ScrollToTopButton from "../../2-molecules/Button/ScrollToTopButton";

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
