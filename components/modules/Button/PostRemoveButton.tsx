import React, { useEffect } from "react";
import styled from "styled-components";
import { Delete } from "@styled-icons/material-outlined/Delete";

import { postMangementButtonStyle } from "../../atoms/Button/PostMangementButton";
import useDailyLifePostRemover from "../../../hooks/useDailyLifePostRemover";
import elementColor from "../../_styles/elementColor";

const StyledPostRemoveButton = styled.button`
  ${elementColor.red};
  ${postMangementButtonStyle};
`;

interface PostRemoveButtonProps {
  id: string;
}

export default function PostRemoveButton({
  id,
}: PostRemoveButtonProps): JSX.Element {
  const [_, removeDailyLifePost] = useDailyLifePostRemover();

  const handleClick = () => {
    const result = confirm("포스트를 삭제하시겠습니까");

    if (result) {
      removeDailyLifePost(id, () => alert("포스트가 삭제되었습니다."));
    }
  };

  return (
    <StyledPostRemoveButton onClick={handleClick}>
      <Delete size={16} />
      삭제
    </StyledPostRemoveButton>
  );
}
