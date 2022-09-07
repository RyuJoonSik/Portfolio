import React from "react";
import styled from "styled-components";
import { CheckBox } from "@styled-icons/material-outlined/CheckBox";
import { CheckBoxOutlineBlank } from "@styled-icons/material-outlined/CheckBoxOutlineBlank";

import { blue, white } from "../../_styles/color";
import DefaultButton from "../../atoms/Button/DefaultButton";
import CheckButton from "../../atoms/Button/CheckButton";

interface StyledInfiniteScrollButtonProps {
  isOn: boolean;
}

const StyledInfiniteScrollButton = styled.button<StyledInfiniteScrollButtonProps>`
  background-color: ${({ isOn }) => (isOn ? blue.default : white.dark)};

  color: ${white.default};
`;

interface InfiniteScrollButtonProps {
  handleToggle: () => void;
  isScrollHandlerOn: boolean;
}

export default function InfiniteScrollButton({
  handleToggle,
  isScrollHandlerOn,
}: InfiniteScrollButtonProps): JSX.Element {
  console.log(isScrollHandlerOn);
  return (
    <CheckButton
      buttonName="자동 불러오기"
      isChecked={isScrollHandlerOn}
      handleToggle={handleToggle}
    />
  );
}
