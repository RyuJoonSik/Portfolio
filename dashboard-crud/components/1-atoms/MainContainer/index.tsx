import React from "react";
import styled from "styled-components";

const StyledMainContainer = styled.main`
  display: flex;
  justify-content: center;
  background-color: rgb(${({ theme }) => theme.color.mainBackground});
`;

interface MainContainerProps {
  children?: React.ReactNode;
}

export default function MainContainer({
  children,
}: MainContainerProps): JSX.Element {
  return <StyledMainContainer>{children}</StyledMainContainer>;
}
