import React, { useEffect, useRef, useState } from "react";

import useAutoFocus from "../../../hooks/useAutoFocus";
import useDailyLifePostCreater from "../../../hooks/useDailyLifePostCreater";
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

  useAutoFocus(entryPointButtonRef);

  const [dailyLifePost, setDailyLifePostPost] = useInputsValue({
    title: "",
    content: "",
  });

  const [
    isDailyLifePostCreated,
    createDailyLifePost,
    createPostWithImg,
    uploadPercent,
  ] = useDailyLifePostCreater();

  useEffect(() => {
    if (isDailyLifePostCreated) setTimeout(handleHideForm, 500);
  }, [isDailyLifePostCreated, handleHideForm]);

  const [imgFile, setImgFile] = useState<File | null>(null);
  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    const types = ["image/png", "image/jpeg"];
    const files = target.files as FileList;
    const [file] = files;

    if (!types.includes(file.type)) {
      target.files = new DataTransfer().files;
      return alert("이미지 파일이 아닙니다.");
    }

    setImgFile(file);
  };

  const handleSubmit = async () => {
    if (imgFile) {
      return createPostWithImg(dailyLifePost, imgFile);
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
          <ImageFileInput imgFile={imgFile} handleChange={handleChange} />
          <RequestButton
            type="button"
            ref={endPointButtonRef}
            onClick={handleSubmit}
            disabled={uploadPercent !== null || isDailyLifePostCreated !== null}
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
