import React, { useContext } from "react";
import styled from "styled-components";
import { StyledIcon } from "@styled-icons/styled-icon";

import { text_12px_regular } from "../../0-base/Text";
import {
  ThemeContext,
  ThemeContextValue,
} from "../../../contexts/ThemeContext";

const StyledHeaderButton = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 1;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.3rem 0.6rem;

  border-radius: 4px;
  background-color: rgb(${({ theme }) => theme.color.ultramarineBlue});

  transition: background-color 150ms ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgb(${({ theme }) => theme.color.blueberry});
  }

  &::after {
    position: absolute;
    z-index: -1;
    top: 0;

    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: rgb(${(props) => props.theme.color.cornflowerBlue});

    transform: scale(0);
    transition: transform 60ms ease-in;
    content: "";
  }

  &:active::after {
    transform: scale(1);
  }

  @media screen and (max-width: 565px) {
    flex: 1;
  }
`;

const StyledHeaderButtonName = styled.span`
  ${text_12px_regular};
  color: rgb(${({ theme }) => theme.color.cultured});
`;

const StyledHeaderButtonIcon = styled.i`
  width: 24px;
  height: 24px;

  color: rgb(${({ theme }) => theme.color.cultured});
`;

interface HeaderButtonProps {
  name: string;
  Icon: StyledIcon;
}

export default function HeaderIconButton({
  name,
  Icon,
}: HeaderButtonProps): JSX.Element {
  const { isLightMode, setIsLightMode } = useContext(
    ThemeContext
  ) as ThemeContextValue;

  return (
    <StyledHeaderButton
      onClick={() => {
        console.log(isLightMode);
        setIsLightMode(!isLightMode);
      }}
    >
      <StyledHeaderButtonIcon as={Icon} />
      <StyledHeaderButtonName>{name}</StyledHeaderButtonName>
    </StyledHeaderButton>
  );
}
