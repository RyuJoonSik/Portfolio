import React from "react";
import { Delete } from "@styled-icons/material-outlined/Delete";

import useDailyLifePostRemover from "../../../hooks/useDailyLifePostRemover";
import ArticleHeaderButton from "../../atoms/Button/ArticleHeaderButton";

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
    <ArticleHeaderButton
      Icon={Delete}
      buttonName="삭제"
      color="red"
      handleClick={handleClick}
    />
  );
}
