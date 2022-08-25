import React, { useRef, useState } from "react";

import { DailyLifePost } from "../../../types/dataModel";
import Article from "../../atoms/Article/Article";
import ArticleContentsContainer from "../../atoms/Container/ArticleContentsContainer";
import CenterFixedContainer from "../../atoms/Container/CenterFixedContainer";
import CustomContainer from "../../atoms/Container/CustomContainer";
import ModalContentsContainer from "../../atoms/Container/ModalContentsContainer";
import ArticleHeader from "../../atoms/Header/ArticleHeader";
import ModalPortal from "../../atoms/Portal/ModalPortal";
import PostRemoveButton from "../Button/PostRemoveButton";
import PostUpdateButton from "../Button/PostUpdateButton";
import DailyLifePostUpdateForm from "../Form/DailyLifePostUpdateForm";
import ArticleImgContents from "../Img/ArticleImgContents";

const dateOption = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
} as const;

export default function DailyLifePostItem(
  DailyLifePost: DailyLifePost
): JSX.Element {
  const updateFormOpenButtonRef = useRef<HTMLButtonElement>(null);
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);

  const handleShowForm = () => {
    setIsUpdateFormVisible(true);
  };

  const handleHideForm = () => {
    setIsUpdateFormVisible(false);

    updateFormOpenButtonRef.current?.focus();
  };

  const { id, title, content, downloadURL, requestedAt } = DailyLifePost;

  return (
    <Article>
      <ArticleHeader>
        <h3>{title}</h3>
        <CustomContainer align="spaceBetweenCenter" width="100%">
          <time>
            {requestedAt.toDate().toLocaleString("ko-KR", dateOption)}
          </time>
          <CustomContainer gap="small">
            <PostRemoveButton id={id} />
            <PostUpdateButton
              buttonRef={updateFormOpenButtonRef}
              handleShowForm={handleShowForm}
            />
          </CustomContainer>
        </CustomContainer>
      </ArticleHeader>
      <ArticleContentsContainer>
        {downloadURL ? (
          <ArticleImgContents
            src={downloadURL}
            alt="이미지 파일입니다."
            textContent={content}
          />
        ) : (
          <p>{content}</p>
        )}
      </ArticleContentsContainer>
      {isUpdateFormVisible && (
        <ModalPortal>
          <ModalContentsContainer>
            <CenterFixedContainer>
              <DailyLifePostUpdateForm
                handleHideForm={handleHideForm}
                currentDailyLifePost={DailyLifePost}
              />
            </CenterFixedContainer>
          </ModalContentsContainer>
        </ModalPortal>
      )}
    </Article>
  );
}
