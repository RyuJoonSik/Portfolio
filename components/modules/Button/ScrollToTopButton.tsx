import React from "react";
import styled from "styled-components";
import boxShadow from "../../_styles/boxShadow";

import contentAlign from "../../_styles/contentAlign";
import contentDirection from "../../_styles/contentDirection";
import elementColor from "../../_styles/elementColor";
import fontSize from "../../_styles/fontSize";
import hoverEffect from "../../_styles/hoverEffect";
import roundShape from "../../_styles/roundShape";
import spaceSize from "../../_styles/spaceSize";

const StyledScrollToTopButton = styled.button`
  ${elementColor.white};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  ${roundShape.medium};
  gap: ${spaceSize.small};
  padding: ${spaceSize.small};
  ${boxShadow.button};

  ${hoverEffect.opacity};

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
