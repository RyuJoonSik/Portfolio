import React from "react";
import styled from "styled-components";
import { HTMLFocusableElements } from "../../../types/htmlElement";

const StyledFocusInitButton = styled.button`
  position: absolute;
  width: 0;
  height: 0;
`;

interface FocusInitButtonProps {
  focusableElRef: React.RefObject<HTMLFocusableElements>;
}

export default function FocusInitButton({
  focusableElRef,
}: FocusInitButtonProps): JSX.Element {
  const handleFocus = () => {
    focusableElRef.current?.focus();
  };

  return <StyledFocusInitButton type="button" onFocus={handleFocus} />;
}
