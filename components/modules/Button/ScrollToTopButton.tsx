import React from "react";
import styled from "styled-components";

import { whiteButtonStyle } from "../../atoms/Button/WhiteButton";
import contentAlign from "../../_styles/contentAlign";
import contentDirection from "../../_styles/contentDirection";
import fontSize from "../../_styles/fontSize";
import spaceSize from "../../_styles/spaceSize";

const StyledScrollToTopButton = styled.button`
  ${whiteButtonStyle};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.small};
  padding: ${spaceSize.small};
  opacity: 0.7;
  box-shadow: 0px 4px 6px -2px rgb(0 0 0 / 12%),
    0px 2px 2px -1px rgb(0 0 0 / 5%);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 1;
    }
  }
  width: 44px;
  height: 44px;
  border-radius: 50%;

  ${fontSize.smallest};
  line-height: 1;
`;

export default function ScrollToTopButton(): JSX.Element {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <StyledScrollToTopButton onClick={handleClick}>
      TO TOP
    </StyledScrollToTopButton>
  );
}
