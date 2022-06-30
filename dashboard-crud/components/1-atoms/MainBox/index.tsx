import React from "react";
import styled from "styled-components";

import { Box } from "../../0-base/FlexBox";

interface MainBoxProps {
  children?: React.ReactNode;
}

const StyledMainBox = styled(Box).attrs({
  as: "main",
})`
  height: calc(100vh - 4rem);
  padding: 0 3rem;
  background-color: rgb(${(props) => props.theme.color.antiFlashWhite});
`;

export default function MainBox({ children }: MainBoxProps): JSX.Element {
  return <StyledMainBox>{children}</StyledMainBox>;
}
