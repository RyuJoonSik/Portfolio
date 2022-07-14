import React from "react";
import styled from "styled-components";

import { text_20px_medium, text_24px_medium } from "../../../styles/textStyle";
import { TABLET_SIZE } from "../../../styles/deviceSize";

const StyledHeaderTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(${({ theme }) => theme.color.headerTitleBackground});

  ${text_24px_medium};
  color: rgb(${({ theme }) => theme.color.headerTitleText});

  ${TABLET_SIZE} {
    ${text_20px_medium}
  }
`;

const TITLE = "<frontend>류준식</frontend>";

export default function HeaderTitle(): JSX.Element {
  return <StyledHeaderTitle>{TITLE}</StyledHeaderTitle>;
}
