import React from "react";
import styled from "styled-components";

export const StyledMainContentDescriptionList = styled.dl`
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: rgb(${({ theme }) => theme.color.white});

  color: rgb(${({ theme }) => theme.color.gunmetal});
`;

interface MainContentDescriptionListProps {
  children?: React.ReactNode;
}

export default function MainContentDescriptionList({
  children,
}: MainContentDescriptionListProps): JSX.Element {
  return (
    <StyledMainContentDescriptionList>
      {children}
    </StyledMainContentDescriptionList>
  );
}
