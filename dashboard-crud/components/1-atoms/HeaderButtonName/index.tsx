import React from "react";
import styled from "styled-components";

import { text_12px_regular } from "../../../styles/textStyle";

const StyledHeaderButtonName = styled.span`
  ${text_12px_regular};
  color: ${({ theme }) => theme.color.headerButtonText};
`;

interface HeaderButtonNameProps {
  children?: React.ReactNode;
}

export default function HeaderButtonName({
  children,
}: HeaderButtonNameProps): JSX.Element {
  return <StyledHeaderButtonName>{children}</StyledHeaderButtonName>;
}
