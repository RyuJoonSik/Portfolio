import React, { useEffect, useRef } from "react";

import { imagePath } from "../../../firebase/storage";
import useAutoFocus from "../../../hooks/useAutoFocus";
import useDailyLifePostUpdater from "../../../hooks/useDailyLifePostUpdater";
import useFileUploader from "../../../hooks/useFileUploader";
import useInputsValue from "../../../hooks/useInputsValue";
import { DailyLifePost } from "../../../types/dataModel";
import Article from "../../atoms/Article/Article";
import ArticleHeaderButton from "../../atoms/Button/ArticleHeaderButton";
import RequestButton from "../../atoms/Button/RequestButton";
import ArticleContentsContainer from "../../atoms/Container/ArticleContentsContainer";
import PreventDefaultForm from "../../atoms/Form/PreventDefaultForm";
import ArticleHeader from "../../atoms/Header/ArticleHeader";
import FocusInitButton from "../Button/FocusInitButton";
import ImageFileInput from "../Input/ImageFileInput";
import TextContentInput from "../Input/TextContentInput";
import TitleInput from "../Input/TitleInput";
import ImageUploadProgressBar from "../ProgressBar/ImageUploadProgressBar";
import PostAddProgressBar from "../ProgressBar/PostAddProgressBar";

interface DailyLifePostUpdateFormProps {
  handleHideForm(): void;
  currentDailyLifePost: DailyLifePost;
}

export default function DailyLifePostUpdateForm({
  handleHideForm,
  currentDailyLifePost,
}: DailyLifePostUpdateFormProps): JSX.Element {
  const entryPointButtonRef = useRef<HTMLButtonElement>(null);
  const endPointButtonRef = useRef<HTMLButtonElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  useAutoFocus(entryPointButtonRef);

  const [dailyLifePost, setDailyLifePostPost] = useInputsValue({
    // 프로퍼티와 일치하는 id 어트리뷰트를 사용
    title: currentDailyLifePost.title,
    content: currentDailyLifePost.content,
  });

  const [isDailyLifePostUpdated, updateDailyLifePost] =
    useDailyLifePostUpdater();

  const [uploadPercent, uploadFile] = useFileUploader();

  useEffect(() => {
    if (isDailyLifePostUpdated) {
      setTimeout(() => {
        alert("포스트가 수정되었습니다.");
        handleHideForm();
      }, 500);
    }
  }, [isDailyLifePostUpdated, handleHideForm]);

  const handleSubmit = async () => {
    const files = inputFileRef.current?.files;

    if (files?.length) {
      uploadFile(
        `${imagePath + Date.now()}`,
        files[0],
        (downloadURL: string) => {
          updateDailyLifePost(currentDailyLifePost.id, {
            ...dailyLifePost,
            downloadURL,
          });
        }
      );

      return;
    }

    updateDailyLifePost(currentDailyLifePost.id, dailyLifePost);
  };

  return (
    <Article size="small">
      <FocusInitButton focusableElRef={endPointButtonRef} />
      <ArticleHeader>
        <h4>일상 포스트 수정하기</h4>
        <ArticleHeaderButton
          color="white"
          ref={entryPointButtonRef}
          onClick={handleHideForm}
        >
          닫기
        </ArticleHeaderButton>
      </ArticleHeader>
      <ArticleContentsContainer>
        <PreventDefaultForm>
          <TitleInput
            value={dailyLifePost.title}
            id="title"
            handleChange={setDailyLifePostPost}
          />
          <TextContentInput
            value={dailyLifePost.content}
            id="content"
            handleChange={setDailyLifePostPost}
          />
          <ImageFileInput inputFileRef={inputFileRef} />
          <RequestButton
            type="button"
            ref={endPointButtonRef}
            onClick={handleSubmit}
          >
            수정하기
          </RequestButton>
        </PreventDefaultForm>
        {uploadPercent !== null && (
          <ImageUploadProgressBar value={uploadPercent} />
        )}
        {isDailyLifePostUpdated !== null && (
          <PostAddProgressBar value={isDailyLifePostUpdated ? 100 : 0} />
        )}
      </ArticleContentsContainer>
      <FocusInitButton focusableElRef={entryPointButtonRef} />
    </Article>
  );
}
