import React from "react";
import styled from "styled-components";

import { text_16px_regular } from "../../0-base/Text";

export const StyledMainContentDescriptionTerm = styled.dt`
  ${text_16px_regular}

  & ~ & {
    margin-top: 1.5rem;
  }
`;

interface MainContentDescriptionTermProps {
  children?: React.ReactNode;
}

export default function MainContentDescriptionTerm({
  children,
}: MainContentDescriptionTermProps): JSX.Element {
  return (
    <StyledMainContentDescriptionTerm>
      {children}
    </StyledMainContentDescriptionTerm>
  );
}
