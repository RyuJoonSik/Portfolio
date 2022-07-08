import React from "react";
import styled from "styled-components";

export const StyledMainBox = styled.main`
  display: flex;
  justify-content: center;
  background-color: rgb(${({ theme }) => theme.color.antiFlashWhite});
`;

interface MainBoxProps {
  children?: React.ReactNode;
}

export default function MainBox({ children }: MainBoxProps): JSX.Element {
  return <StyledMainBox>{children}</StyledMainBox>;
}
