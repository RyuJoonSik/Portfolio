import styled, { css } from "styled-components";
import { StyledIcon } from "@styled-icons/styled-icon";
import React from "react";

import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import contentDirection from "../../_styles/contentDirection";
import elementColor, { ElementColorKey } from "../../_styles/elementColor";
import hoverEffect from "../../_styles/hoverEffect";

interface StyledArticleHeaderButton {
  color?: ElementColorKey;
}

function getButtonStyle(color?: ElementColorKey) {
  color = color || "blue";

  return css`
    ${elementColor[color]};
    ${hoverEffect[color]};
  `;
}

const articleHeaderButtonStyle = css<StyledArticleHeaderButton>`
  ${({ color }) => getButtonStyle(color)};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.smaller};
  padding: ${spaceSize.smaller} ${spaceSize.small};
  border-radius: ${spaceSize.smaller};

  word-break: keep-all;
`;

const StyledArticleHeaderButton = styled.button<StyledArticleHeaderButton>`
  ${articleHeaderButtonStyle};
`;

interface ArticleHeaderButtonProps extends StyledArticleHeaderButton {
  Icon?: StyledIcon;
  buttonName?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  handleClick?: () => void;
}

export default function ArticleHeaderButton({
  Icon,
  buttonName,
  buttonRef,
  handleClick,
  color,
}: ArticleHeaderButtonProps): JSX.Element {
  return (
    <StyledArticleHeaderButton
      color={color}
      onClick={handleClick}
      ref={buttonRef}
    >
      {Icon && <Icon size={20} />}
      {buttonName && buttonName}
    </StyledArticleHeaderButton>
  );
}
