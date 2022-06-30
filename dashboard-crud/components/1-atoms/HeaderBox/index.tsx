import React from "react";
import styled from "styled-components";

import { Box } from "../../0-base/FlexBox";

interface HeaderBoxProps {
  children?: React.ReactNode;
}

const StyledHeaderBox = styled(Box).attrs({
  as: "header",
})`
  height: 4rem;
  padding: 0 3rem;
  background-color: rgb(${(props) => props.theme.color.ultramarineBlue});
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
`;

export default function HeaderBox({ children }: HeaderBoxProps): JSX.Element {
  return <StyledHeaderBox>{children}</StyledHeaderBox>;
}
