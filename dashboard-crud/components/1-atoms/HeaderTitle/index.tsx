import React from "react";
import styled from "styled-components";

import { text_24px_medium } from "../../0-base/Text";

const StyledHeaderTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(${({ theme }) => theme.color.ultramarineBlue});

  ${text_24px_medium};
  color: rgb(${({ theme }) => theme.color.cultured});
`;

const TITLE = "<frontend>류준식</frontend>";

export default function HeaderTitle(): JSX.Element {
  return <StyledHeaderTitle>{TITLE}</StyledHeaderTitle>;
}
