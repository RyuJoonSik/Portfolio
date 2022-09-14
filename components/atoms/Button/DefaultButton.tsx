import styled, { css } from "styled-components";
import { StyledIcon } from "@styled-icons/styled-icon";
import React from "react";

import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import contentDirection from "../../_styles/contentDirection";
import elementColor, { ElementColorKey } from "../../_styles/elementColor";
import hoverEffect from "../../_styles/hoverEffect";
import boxShadow from "../../_styles/boxShadow";

interface StyledDefaultButton {
  color?: ElementColorKey;
}

function getButtonStyle(color?: ElementColorKey) {
  color = color || "blue";

  return css`
    ${elementColor[color]};
    ${hoverEffect[color]};
  `;
}

const defaultButtonStyle = css<StyledDefaultButton>`
  ${({ color }) => getButtonStyle(color)};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  padding: ${spaceSize.smaller};
  border-radius: ${spaceSize.smaller};
  ${boxShadow.button};

  word-break: keep-all;
`;

const StyledDefaultButton = styled.button<StyledDefaultButton>`
  ${defaultButtonStyle};
`;

interface DefaultButtonProps extends StyledDefaultButton {
  Icon?: StyledIcon;
  buttonName?: string;
  buttonRef?: React.RefObject<HTMLButtonElement>;
  handleClick?: () => void;
}

export default function DefaultButton({
  Icon,
  buttonName,
  buttonRef,
  handleClick,
  color,
}: DefaultButtonProps): JSX.Element {
  return (
    <StyledDefaultButton color={color} onClick={handleClick} ref={buttonRef}>
      {Icon && <Icon size={20} />}
      {buttonName && buttonName}
    </StyledDefaultButton>
  );
}
