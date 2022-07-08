import React from "react";
import styled from "styled-components";

export const StyledMainContentListItem = styled.li`
  width: 50%;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 590px) {
    width: 100%;
  }
`;

interface MainContentListItemProps {
  children?: React.ReactNode;
}

export default function MainContentListItem({
  children,
}: MainContentListItemProps): JSX.Element {
  return <StyledMainContentListItem>{children}</StyledMainContentListItem>;
}
