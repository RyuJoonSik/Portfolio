import React from "react";
import styled from "styled-components";

export const StyledMainContentBox = styled.div`
  max-width: 63.75rem;
  padding: 0 1rem;
  background-color: rgb(${({ theme }) => theme.color.antiFlashWhite});
`;

interface MainContentBoxProps {
  children?: React.ReactNode;
}

export default function MainContentBox({
  children,
}: MainContentBoxProps): JSX.Element {
  return <StyledMainContentBox>{children}</StyledMainContentBox>;
}
