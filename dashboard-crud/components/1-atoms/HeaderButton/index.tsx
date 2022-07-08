import React from "react";
import styled from "styled-components";

const StyledHeaderButton = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 1;

  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 5rem;
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
