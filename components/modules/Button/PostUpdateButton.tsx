import React from "react";
import { BorderColor } from "@styled-icons/material-outlined/BorderColor";

import DefaultButton from "../../atoms/Button/DefaultButton";

interface PostUpdateButtonProps {
  buttonRef: React.RefObject<HTMLButtonElement>;
  handleShowForm: () => void;
}

export default function PostUpdateButton({
  buttonRef,
  handleShowForm,
}: PostUpdateButtonProps): JSX.Element {
  const handleClick = () => {
    const result = confirm("포스트를 수정하시겠습니까?");

    if (result) {
      handleShowForm();
    }
  };

  return (
    <DefaultButton
      Icon={BorderColor}
      buttonName="수정"
      color="green"
      buttonRef={buttonRef}
      handleClick={handleClick}
    />
  );
}
