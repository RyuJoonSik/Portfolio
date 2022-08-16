import React, { useRef } from "react";

import Article from "../../1-atoms/Article/Article";
import ArticleContentContainer from "../../1-atoms/Box/ArticleContentContainer";
import BlueButton from "../../1-atoms/Button/BlueButton";
import DummyButton from "../../1-atoms/Button/DummyButton";
import WhiteButton from "../../1-atoms/Button/WhiteButton";
import ArticleHeader from "../../1-atoms/Header/ArticleHeader";
import TitleInput from "../../2-molecules/Input/TitleInput";
import ContentInput from "../../2-molecules/Input/ContentInput";
import useAutoFocus from "../../../hooks/useAutoFocus";
import useDailyLifePostCreate from "../../../hooks/useDailyLifePostCreate";
import useInputsValue from "../../../hooks/useInputsValue";
import PreventedSubmitForm from "../../1-atoms/Form/PreventedSubmitForm";
import ImageFileInput from "../../2-molecules/Input/ImageFileInput";
import useFileUploader from "../../../hooks/useFileUploader";

interface DailyLifePostFormProps {
  handleHide(): void;
  className?: string;
}

export default function DailyLifePostForm({
  handleHide,
  className,
}: DailyLifePostFormProps): JSX.Element {
  const entryPointButtonRef = useRef<HTMLButtonElement>(null);
  const endPointButtonRef = useRef<HTMLButtonElement>(null);
  const inputFileRef = useRef<HTMLInputElement>(null);

  useAutoFocus(entryPointButtonRef);

  const [dailyLifePost, setDailyLifePostPost] = useInputsValue({
    title: "",
    content: "",
  });

  const createDailyLifePost = useDailyLifePostCreate(handleHide);

  const { isUploaded, uploadFile } = useFileUploader();

  const handleSubmit = async () => {
    const inputEl = inputFileRef.current as HTMLInputElement;
    const [file] = inputEl.files as FileList;

    if (file) {
      uploadFile(`images/${Date.now()}`, file, (downloadURL: string) => {
        createDailyLifePost({ ...dailyLifePost, downloadURL });
      });

      return;
    }

    createDailyLifePost(dailyLifePost);
    handleHide();
  };

  return (
    <Article.Small className={className}>
      <DummyButton focusableElRef={endPointButtonRef} />
      <ArticleHeader>
        <h3>일상 포스트 작성하기</h3>
        <WhiteButton.Rectangle.Medium
          ref={entryPointButtonRef}
          onClick={handleHide}
        >
          닫기
        </WhiteButton.Rectangle.Medium>
      </ArticleHeader>
      <ArticleContentContainer>
        <PreventedSubmitForm>
          <TitleInput
            value={dailyLifePost.title}
            handleChange={setDailyLifePostPost}
          />
          <ContentInput
            value={dailyLifePost.content}
            handleChange={setDailyLifePostPost}
          />
          <ImageFileInput inputFileRef={inputFileRef} />
          <BlueButton.Rectangle.Full
            type="button"
            ref={endPointButtonRef}
            onClick={handleSubmit}
          >
            작성하기
          </BlueButton.Rectangle.Full>
        </PreventedSubmitForm>
      </ArticleContentContainer>
      <DummyButton focusableElRef={entryPointButtonRef} />
    </Article.Small>
  );
}
