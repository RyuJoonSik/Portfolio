import styled, { css } from "styled-components";
import React from "react";
import { CheckBox } from "@styled-icons/material-outlined/CheckBox";
import { CheckBoxOutlineBlank } from "@styled-icons/material-outlined/CheckBoxOutlineBlank";

import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import contentDirection from "../../_styles/contentDirection";
import elementColor from "../../_styles/elementColor";

const checkButtonStyle = css`
  ${elementColor.blue};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.smaller};
  padding: ${spaceSize.smaller};
  border-radius: ${spaceSize.smaller};

  word-break: keep-all;
`;

const StyledCheckButton = styled.button`
  ${checkButtonStyle};
`;

interface CheckButtonProps {
  buttonName?: string;
  isChecked: boolean;
  handleToggle?: () => void;
}

export default function CheckButton({
  buttonName,
  isChecked,
  handleToggle,
}: CheckButtonProps): JSX.Element {
  return (
    <StyledCheckButton onClick={handleToggle}>
      {isChecked ? <CheckBox size={20} /> : <CheckBoxOutlineBlank size={20} />}
      {buttonName}
    </StyledCheckButton>
  );
}
