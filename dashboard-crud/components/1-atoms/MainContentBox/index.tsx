import React from "react";
import styled from "styled-components";
import { MOBILE_SIZE } from "../../../styles/deviceSize";

export const StyledMainContentBox = styled.div`
  box-sizing: border-box;
  max-width: 63.75rem;
  width: 100%;
  min-height: 100vh;
  padding: 4rem 1rem 0;

  ${MOBILE_SIZE} {
    padding: 2rem 1rem 3.5rem;
  }
`;

interface MainContentBoxProps {
  children?: React.ReactNode;
}

export default function MainContentBox({
  children,
}: MainContentBoxProps): JSX.Element {
  return <StyledMainContentBox>{children}</StyledMainContentBox>;
}
