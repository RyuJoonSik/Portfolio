import React from "react";
import { Delete } from "@styled-icons/material-outlined/Delete";

import useDailyLifePostRemover from "../../../hooks/useDailyLifePostRemover";
import DefaultButton from "../../atoms/Button/DefaultButton";
import useFileDeleter from "../../../hooks/useFileDeleter";

interface PostRemoveButtonProps {
  id: string;
  imagePath: string | null;
}

export default function PostRemoveButton({
  id,
  imagePath,
}: PostRemoveButtonProps): JSX.Element {
  const removeDailyLifePost = useDailyLifePostRemover()[1];
  const deleteFile = useFileDeleter()[1];

  const handleClick = () => {
    const result = confirm("포스트를 삭제하시겠습니까");

    if (!result) {
      return;
    }

    if (imagePath) {
      return deleteFile(imagePath, () => {
        removeDailyLifePost(id, () => alert("포스트가 삭제되었습니다."));
      });
    }

    removeDailyLifePost(id, () => alert("포스트가 삭제되었습니다."));
  };

  return (
    <DefaultButton
      Icon={Delete}
      buttonName="삭제"
      color="red"
      handleClick={handleClick}
    />
  );
}
