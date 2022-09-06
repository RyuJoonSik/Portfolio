import React, { useEffect, useRef } from "react";

import { imagePath } from "../../../firebase/storage";
import useAutoFocus from "../../../hooks/useAutoFocus";
import useDailyLifePostCreater from "../../../hooks/useDailyLifePostCreater";
import useFileUploader from "../../../hooks/useFileUploader";
import useInputsValue from "../../../hooks/useInputsValue";
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

interface DailyLifePostCreateFormProps {
  handleHideForm(): void;
}

export default function DailyLifePostCreateForm({
  handleHideForm,
}: DailyLifePostCreateFormProps): JSX.Element {
  const entryPointButtonRef = useRef<HTMLButtonElement>(null);
  const endPointButtonRef = useRef<HTMLButtonElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  useAutoFocus(entryPointButtonRef);

  const [dailyLifePost, setDailyLifePostPost] = useInputsValue({
    // 프로퍼티와 일치하는 id 어트리뷰트를 사용
    title: "",
    content: "",
  });

  const [isDailyLifePostCreated, createDailyLifePost] =
    useDailyLifePostCreater();

  const [uploadPercent, uploadFile] = useFileUploader();

  useEffect(() => {
    if (isDailyLifePostCreated) setTimeout(handleHideForm, 500);
  }, [isDailyLifePostCreated, handleHideForm]);

  const handleSubmit = async () => {
    const files = inputFileRef.current?.files;

    if (files?.length) {
      uploadFile(
        `${imagePath + Date.now()}`,
        files[0],
        (downloadURL: string) => {
          createDailyLifePost({ ...dailyLifePost, downloadURL });
        }
      );

      return;
    }

    createDailyLifePost(dailyLifePost);
  };

  return (
    <Article size="small">
      <FocusInitButton focusableElRef={endPointButtonRef} />
      <ArticleHeader>
        <h4>일상 포스트 작성하기</h4>
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
            작성하기
          </RequestButton>
        </PreventDefaultForm>
        {uploadPercent !== null && (
          <ImageUploadProgressBar value={uploadPercent} />
        )}
        {isDailyLifePostCreated !== null && (
          <PostAddProgressBar value={isDailyLifePostCreated ? 100 : 0} />
        )}
      </ArticleContentsContainer>
      <FocusInitButton focusableElRef={entryPointButtonRef} />
    </Article>
  );
}
