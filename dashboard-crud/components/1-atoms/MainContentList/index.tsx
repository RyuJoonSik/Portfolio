import React from "react";
import styled from "styled-components";

export const StyledMainContentList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: ${({ theme }) =>
    theme.color.mainContentItemContentBackground};

  color: ${({ theme }) => theme.color.mainContentItemContentText};
`;

interface MainContentListProps {
  children?: React.ReactNode;
}

export default function MainContentList({
  children,
}: MainContentListProps): JSX.Element {
  return <StyledMainContentList>{children}</StyledMainContentList>;
}
