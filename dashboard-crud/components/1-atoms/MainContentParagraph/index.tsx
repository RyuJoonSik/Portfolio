import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: rgb(${({ theme }) => theme.color.white});

  color: rgb(${({ theme }) => theme.color.gunmetal});
`;

interface MainContentParagraphProps {
  textContent: string;
}

export default function MainContentParagraph({
  textContent,
}: MainContentParagraphProps): JSX.Element {
  return <StyledParagraph>{textContent}</StyledParagraph>;
}
