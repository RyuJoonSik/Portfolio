import React from "react";
import styled from "styled-components";
import { BorderColor } from "@styled-icons/material-outlined/BorderColor";

import { postMangementButtonStyle } from "../../atoms/Button/PostMangementButton";
import { greenButtonStyle } from "../../atoms/Button/GreenButton";

const StyledPostUpdateButton = styled.button`
  ${greenButtonStyle};
  ${postMangementButtonStyle};
`;

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
    <StyledPostUpdateButton ref={buttonRef} onClick={handleClick}>
      <BorderColor size={16} />
      수정
    </StyledPostUpdateButton>
  );
}
