import React from "react";
import styled from "styled-components";

export const StyledMainContentDescriptionList = styled.dl`
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: ${({ theme }) =>
    theme.color.mainContentItemContentBackground};

  color: ${({ theme }) => theme.color.mainContentItemContentText};
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
