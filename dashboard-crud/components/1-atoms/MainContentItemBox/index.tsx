import React from "react";
import styled from "styled-components";

const StyledHeaderTitle = styled.div`
  overflow: hidden;
  margin: 1.25rem 0;
  border-radius: 10px;
  box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
    0px 2px 2px -1px rgba(0, 0, 0, 0.05);
`;

interface MainContentItemBoxProps {
  children: React.ReactNode;
}

export default function MainContentItemBox({
  children,
}: MainContentItemBoxProps): JSX.Element {
  return <StyledHeaderTitle>{children}</StyledHeaderTitle>;
}
