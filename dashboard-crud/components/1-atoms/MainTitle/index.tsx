import React from "react";
import styled from "styled-components";

import { text_24px_regular } from "../../../styles/textStyle";

export const StyledMainTitle = styled.h2`
  padding: 1.25rem 0;
  border-bottom: 1px ${({ theme }) => theme.color.mainTitleBorder} solid;
  background-color: ${({ theme }) => theme.color.mainTitleBackground};

  ${text_24px_regular}
  color: ${({ theme }) => theme.color.mainTitleText};
`;

interface MainTitleProps {
  title: string;
}

export default function MainTitle({ title }: MainTitleProps): JSX.Element {
  return <StyledMainTitle>{title}</StyledMainTitle>;
}
