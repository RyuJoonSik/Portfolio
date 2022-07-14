import React from "react";
import styled from "styled-components";

import { MOBILE_SIZE } from "../../../styles/deviceSize";

export const StyledHeaderBox = styled.header`
  position: fixed;

  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  background-color: rgb(${({ theme }) => theme.color.headerBackground});
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);

  ${MOBILE_SIZE} {
    justify-content: center;
    height: 2rem;
    padding: 0;
  }
`;

interface HeaderBoxProps {
  children?: React.ReactNode;
}

export default function HeaderBox({ children }: HeaderBoxProps): JSX.Element {
  return <StyledHeaderBox>{children}</StyledHeaderBox>;
}
