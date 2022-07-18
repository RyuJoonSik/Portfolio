import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: ${({ theme }) =>
    theme.color.mainContentItemContentBackground};

  color: ${({ theme }) => theme.color.mainContentItemContentText};
`;

interface MainContentParagraphProps {
  children: React.ReactNode;
}

export default function MainContentParagraph({
  children,
}: MainContentParagraphProps): JSX.Element {
  return <StyledParagraph>{children}</StyledParagraph>;
}
