import React from "react";
import styled from "styled-components";

export const StyledHeaderBox = styled.header`
  position: relative;

  display: flex;
  height: 4rem;
  padding: 0 1rem;
  background-color: rgb(${({ theme }) => theme.color.ultramarineBlue});
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: 565px) {
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
`;

interface HeaderBoxProps {
  children?: React.ReactNode;
}

export default function HeaderBox({ children }: HeaderBoxProps): JSX.Element {
  return <StyledHeaderBox>{children}</StyledHeaderBox>;
}
