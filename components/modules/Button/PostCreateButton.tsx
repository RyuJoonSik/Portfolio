import React from "react";
import { Create } from "@styled-icons/material-outlined/Create";

import ContentsControlButton from "../../1-atoms/Button/ContentsControlButton";

interface PostCreateButtonProps {
  handleClick: () => void;
  buttonRef?: React.RefObject<HTMLButtonElement>;
}

export default function PostCreateButton({
  handleClick,
  buttonRef,
}: PostCreateButtonProps): JSX.Element {
  return (
    <ContentsControlButton onClick={handleClick} ref={buttonRef}>
      <Create size={20} />
      포스트 추가
    </ContentsControlButton>
  );
}
