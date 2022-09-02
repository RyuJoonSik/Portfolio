import React from "react";
import styled from "styled-components";
import { CheckBox } from "@styled-icons/material-outlined/CheckBox";
import { CheckBoxOutlineBlank } from "@styled-icons/material-outlined/CheckBoxOutlineBlank";

import { postMangementButtonStyle } from "../../atoms/Button/PostMangementButton";
import { blue, white } from "../../_styles/color";

interface StyledInfiniteScrollToggleButtonProps {
  isOn: boolean;
}

const StyledInfiniteScrollToggleButton = styled.button<StyledInfiniteScrollToggleButtonProps>`
  ${postMangementButtonStyle};
  background-color: ${({ isOn }) => (isOn ? blue.default : white.dark)};

  color: ${white.default};
`;

interface InfiniteScrollToggleButtonProps {
  handleToggle: () => void;
  isScrollHandlerOn: boolean;
}

export default function InfiniteScrollToggleButton({
  handleToggle,
  isScrollHandlerOn,
}: InfiniteScrollToggleButtonProps): JSX.Element {
  console.log(isScrollHandlerOn);
  return (
    <StyledInfiniteScrollToggleButton
      onClick={handleToggle}
      isOn={isScrollHandlerOn}
    >
      {isScrollHandlerOn ? (
        <CheckBox size={20} />
      ) : (
        <CheckBoxOutlineBlank size={20} />
      )}
      자동 불러오기{isScrollHandlerOn}
    </StyledInfiniteScrollToggleButton>
  );
}
