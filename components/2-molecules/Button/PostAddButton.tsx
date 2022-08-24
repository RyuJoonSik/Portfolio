import React from "react";
import { Create } from "@styled-icons/material-outlined/Create";

import Icon from "../../1-atoms/Icon/Icon";
import ContentsControlButton from "../../1-atoms/Button/ContentsControlButton";

interface PostAddButtonProps {
  handleClick: () => void;
  buttonRef?:
    | ((instance: HTMLButtonElement | null) => void)
    | React.RefObject<HTMLButtonElement>;
}

export default function PostAddButton({
  handleClick,
  buttonRef,
}: PostAddButtonProps): JSX.Element {
  return (
    <ContentsControlButton onClick={handleClick} ref={buttonRef}>
      <Icon.Medium as={Create} />
      포스트 추가
    </ContentsControlButton>
  );
}
