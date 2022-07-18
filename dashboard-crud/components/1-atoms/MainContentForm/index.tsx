import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 1.5rem;
  background-color: ${({ theme }) =>
    theme.color.mainContentItemContentBackground};

  color: ${({ theme }) => theme.color.mainContentItemContentText};
`;

interface MainContentFormProps {
  children?: React.ReactNode;
}

export default function MainContentForm({
  children,
}: MainContentFormProps): JSX.Element {
  return <StyledForm>{children}</StyledForm>;
}
