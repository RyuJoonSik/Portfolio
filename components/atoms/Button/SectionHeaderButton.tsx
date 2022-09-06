import styled, { css } from "styled-components";
import { StyledIcon } from "@styled-icons/styled-icon";
import React from "react";

import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import contentDirection from "../../_styles/contentDirection";
import elementColor from "../../_styles/elementColor";
import hoverEffect from "../../_styles/hoverEffect";
import activeEffect from "../../_styles/activeEffect";

const sectionHeaderButtonStyle = css`
  ${elementColor.blue};
  ${hoverEffect.blue};
  ${activeEffect.blue};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.smaller};
  padding: ${spaceSize.small} ${spaceSize.small};
  border-radius: ${spaceSize.smaller};
`;

const StyledSectionHeaderButton = styled.button`
  ${sectionHeaderButtonStyle};
`;

interface ArticleHeaderButtonProps {
  Icon?: StyledIcon;
  buttonName?: string;
  handleClick?: () => void;
}

export default function SectionHeaderButton({
  Icon,
  buttonName,
  handleClick,
}: ArticleHeaderButtonProps): JSX.Element {
  return (
    <StyledSectionHeaderButton onClick={handleClick}>
      {Icon && <Icon size={20} />}
      {buttonName && buttonName}
    </StyledSectionHeaderButton>
  );
}
