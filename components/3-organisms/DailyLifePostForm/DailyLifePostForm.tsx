import React, { useEffect, useRef } from "react";

import Article from "../../1-atoms/Article/Article";
import Progress from "../../1-atoms/Progress/Progress";
import ArticleContentContainer from "../../1-atoms/Box/ArticleContentContainer";
import DummyButton from "../../1-atoms/Button/DummyButton";
import ArticleHeader from "../../1-atoms/Header/ArticleHeader";
import TitleInput from "../../2-molecules/Input/TitleInput";
import TextContentInput from "../../2-molecules/Input/TextContentInput";
import useAutoFocus from "../../../hooks/useAutoFocus";
import useDailyLifePostCreater from "../../../hooks/useDailyLifePostCreater";
import useInputsValue from "../../../hooks/useInputsValue";
import PreventedSubmitForm from "../../1-atoms/Form/PreventedSubmitForm";
import ImageFileInput from "../../2-molecules/Input/ImageFileInput";
import useFileUploader from "../../../hooks/useFileUploader";
import FormSubmitButton from "../../1-atoms/Button/FormSubmitButton";
import ModalCloseButton from "../../2-molecules/Button/ModalCloseButton";
import ModalPortal from "../../1-atoms/Portal/ModalPortal";

interface DailyLifePostFormProps {
  handleHideForm(): void;
}

export default function DailyLifePostForm({
  handleHideForm,
}: DailyLifePostFormProps): JSX.Element {
  const entryPointButtonRef = useRef<HTMLButtonElement>(null);
  const endPointButtonRef = useRef<HTMLButtonElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const titleCache = useRef("");
  const contentCache = useRef("");

  useAutoFocus(entryPointButtonRef);

  const [dailyLifePost, setDailyLifePostPost] = useInputsValue({
    title: titleCache.current,
    content: contentCache.current,
  });

  const { createDailyLifePost, dayilPostIsCreated } = useDailyLifePostCreater();

  const { uploadPercent, uploadFile } = useFileUploader();

  useEffect(() => {
    if (dayilPostIsCreated) setTimeout(handleHideForm, 500);
  }, [dayilPostIsCreated, handleHideForm]);

  const handleSubmit = async () => {
    titleCache.current = dailyLifePost.title;
    contentCache.current = dailyLifePost.content;

    const inputEl = inputFileRef.current as HTMLInputElement;
    const [file] = inputEl.files as FileList;

    if (file) {
      uploadFile(`images/${Date.now()}`, file, (downloadURL: string) => {
        createDailyLifePost({ ...dailyLifePost, downloadURL });
      });

      return;
    }

    createDailyLifePost(dailyLifePost);
  };

  return (
    <Article.Small>
      <DummyButton focusableElRef={endPointButtonRef} />
      <ArticleHeader>
        <h3>일상 포스트 작성하기</h3>
        <ModalCloseButton ref={entryPointButtonRef} onClick={handleHideForm}>
          닫기
        </ModalCloseButton>
      </ArticleHeader>
      <ArticleContentContainer>
        <PreventedSubmitForm>
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
          <FormSubmitButton
            type="button"
            ref={endPointButtonRef}
            onClick={handleSubmit}
          >
            작성하기
          </FormSubmitButton>
        </PreventedSubmitForm>
        {uploadPercent !== null && (
          <Progress behavior="이미지 업로드" max={100} value={uploadPercent} />
        )}
        {dayilPostIsCreated !== null && (
          <Progress
            behavior="포스트 작성"
            max={100}
            value={dayilPostIsCreated ? 100 : 0}
          />
        )}
      </ArticleContentContainer>
      <DummyButton focusableElRef={entryPointButtonRef} />
    </Article.Small>
  );
}
