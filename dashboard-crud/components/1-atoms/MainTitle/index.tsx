import React from "react";
import styled from "styled-components";

import { text_24px_regular } from "../../../styles/textStyle";

export const StyledMainTitle = styled.h2`
  padding: 1.25rem 0;
  border-bottom: 1px rgb(${({ theme }) => theme.color.chineseWhite}) solid;
  background-color: rgb(${({ theme }) => theme.color.antiFlashWhite});

  ${text_24px_regular}
  color: rgb(${({ theme }) => theme.color.eerieBlack});
`;

export default function MainTitle(): JSX.Element {
  return <StyledMainTitle>프로필</StyledMainTitle>;
}
