import React from "react";
import styled from "styled-components";

import { MOBILE_SIZE, TABLET_SIZE } from "../../../styles/deviceSize";

export const StyledHeaderButton = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 1;

  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 5rem;
  padding: 0.3rem 0.6rem;

  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.headerButton};

  transition: background-color 150ms ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.color.headerButtonHover};
  }

  &::after {
    position: absolute;
    z-index: -1;
    top: 0;

    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.color.headerButtonPseudoElement};

    content: "";
    visibility: hidden;
  }

  &:active::after {
    visibility: visible;
  }

  ${TABLET_SIZE} {
    &:hover {
      background-color: (${({ theme }) => theme.color.headerButton});
    }
  }

  ${MOBILE_SIZE} {
    flex: 1;
    border-radius: 0;
  }
`;

interface HeaderButtonProps {
  children?: React.ReactNode;
  dataTestid?: string;
  onClick?: () => void;
}

export default function HeaderButton({
  children,
  dataTestid,
  onClick,
}: HeaderButtonProps): JSX.Element {
  return (
    <StyledHeaderButton data-testid={dataTestid} onClick={onClick}>
      {children}
    </StyledHeaderButton>
  );
}
