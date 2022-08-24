import React from "react";
import styled from "styled-components";
import { HTMLFocusableElement } from "../../../types/htmlElement";

const StyledDummyButton = styled.button`
  position: absolute;
  width: 0;
  height: 0;
`;

interface DummyButtonProps {
  focusableElRef: React.RefObject<HTMLFocusableElement>;
}

export default function DummyButton({
  focusableElRef,
}: DummyButtonProps): JSX.Element {
  const handleFocus = () => {
    focusableElRef.current?.focus();
  };

  return <StyledDummyButton type="button" onFocus={handleFocus} />;
}
