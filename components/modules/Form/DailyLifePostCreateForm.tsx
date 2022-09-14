import React, { useEffect, useRef } from "react";

import { imagePath } from "../../../firebase/storage";
import useAutoFocus from "../../../hooks/useAutoFocus";
import useDailyLifePostCreater from "../../../hooks/useDailyLifePostCreater";
import useFileUploader from "../../../hooks/useFileUploader";
import useInputsValue from "../../../hooks/useInputsValue";
import Article from "../../atoms/Article/Article";
import DefaultButton from "../../atoms/Button/DefaultButton";
import RequestButton from "../../atoms/Button/RequestButton";
import ArticleContentsContainer from "../../atoms/Container/ArticleContentsContainer";
import PreventDefaultForm from "../../atoms/Form/PreventDefaultForm";
import ArticleHeader from "../../atoms/Header/ArticleHeader";
import CustomInput from "../../atoms/Input/CustomInput";
import CustomProgressBar from "../../atoms/ProgressBar/CustomProgressBar";
import FocusInitButton from "../Button/FocusInitButton";
import ImageFileInput from "../Input/ImageFileInput";
import { HTMLInputFileElement } from "../../../types/htmlElement";

interface DailyLifePostCreateFormProps {
  handleHideForm(): void;
  children?: React.ReactNode;
}

export default function DailyLifePostCreateForm({
  handleHideForm,
  children,
}: DailyLifePostCreateFormProps): JSX.Element {
  const entryPointButtonRef = useRef<HTMLButtonElement>(null);
  const endPointButtonRef = useRef<HTMLButtonElement>(null);
  const inputFileRef = useRef<HTMLInputFileElement>(null);

  useAutoFocus(entryPointButtonRef);

  const [dailyLifePost, setDailyLifePostPost] = useInputsValue({
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
    if (!inputFileRef.current) {
      return;
    }

    const files = inputFileRef.current.files;
    if (files.length > 0) {
      uploadFile(
        `${imagePath + Date.now()}`,
        files[0],
        (imageURL: string, imagePath: string) => {
          createDailyLifePost({
            ...dailyLifePost,
            imageURL,
            imagePath,
          });
        }
      );
      return;
    }

    createDailyLifePost(dailyLifePost);
  };

  const { title, content } = dailyLifePost;

  return (
    <Article size="small">
      <FocusInitButton focusableElRef={endPointButtonRef} />
      <ArticleHeader>
        <h4>일상 포스트 작성하기</h4>
        <DefaultButton
          color="white"
          buttonName="닫기"
          buttonRef={entryPointButtonRef}
          handleClick={handleHideForm}
        />
      </ArticleHeader>
      <ArticleContentsContainer>
        <PreventDefaultForm>
          <CustomInput
            placeholder="제목을 입력해 주세요."
            label="제목"
            value={title}
            id="title"
            handleChange={setDailyLifePostPost}
          />
          <CustomInput
            placeholder="내용을 입력해 주세요."
            label="내용"
            type="textarea"
            value={content}
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
          <CustomProgressBar work="사진 업로드" value={uploadPercent} />
        )}
        {isDailyLifePostCreated !== null && (
          <CustomProgressBar
            work="포스트 게시"
            value={isDailyLifePostCreated ? 100 : 0}
          />
        )}
        {children}
      </ArticleContentsContainer>
      <FocusInitButton focusableElRef={entryPointButtonRef} />
    </Article>
  );
}
