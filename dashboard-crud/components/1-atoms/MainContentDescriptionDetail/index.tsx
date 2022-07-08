import React from "react";
import styled from "styled-components";

export const StyledMainContentDescriptionDetail = styled.dd`
  margin-left: 1.5rem;
`;

interface MainContentDescriptionDetailProps {
  children?: React.ReactNode;
}

export default function MainContentDescriptionDetail({
  children,
}: MainContentDescriptionDetailProps): JSX.Element {
  return (
    <StyledMainContentDescriptionDetail>
      {children}
    </StyledMainContentDescriptionDetail>
  );
}
