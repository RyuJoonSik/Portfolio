import React, { useEffect, useRef } from "react";

import { imagePath } from "../../../firebase/storage";
import useAutoFocus from "../../../hooks/useAutoFocus";
import useDailyLifePostUpdater from "../../../hooks/useDailyLifePostUpdater";
import useFileUploader from "../../../hooks/useFileUploader";
import useInputsValue from "../../../hooks/useInputsValue";
import { DailyLifePost } from "../../../types/dataModel";
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
import useFileDeleter from "../../../hooks/useFileDeleter";

interface DailyLifePostUpdateFormProps {
  handleHideForm(): void;
  prevDailyLifePost: DailyLifePost;
  children?: React.ReactNode;
}

export default function DailyLifePostUpdateForm({
  handleHideForm,
  prevDailyLifePost,
  children,
}: DailyLifePostUpdateFormProps): JSX.Element {
  const entryPointButtonRef = useRef<HTMLButtonElement>(null);
  const endPointButtonRef = useRef<HTMLButtonElement>(null);
  const inputFileRef = useRef<HTMLInputFileElement>(null);

  useAutoFocus(entryPointButtonRef);

  const [dailyLifePost, setDailyLifePostPost] = useInputsValue({
    title: prevDailyLifePost.title,
    content: prevDailyLifePost.content,
  });

  const [isDailyLifePostUpdated, updateDailyLifePost] =
    useDailyLifePostUpdater();

  const [isFileDeleted, deleteFile] = useFileDeleter();

  const [uploadPercent, uploadFile] = useFileUploader();

  useEffect(() => {
    if (isDailyLifePostUpdated) {
      setTimeout(() => {
        alert("포스트가 수정되었습니다.");
        handleHideForm();
      }, 500);
    }
  }, [isDailyLifePostUpdated, handleHideForm]);

  const updateWithNoImg = () => {
    const updatePost = () => {
      updateDailyLifePost(prevDailyLifePost.id, {
        ...dailyLifePost,
        imageURL: null,
        imagePath: null,
      });
    };

    if (prevDailyLifePost.imagePath) {
      return deleteFile(prevDailyLifePost.imagePath, updatePost);
    }

    updatePost();
  };

  const updateWithImg = (file: File) => {
    const updatePost = () => {
      uploadFile(
        `${imagePath + Date.now()}`,
        file,
        (imageURL: string, imagePath: string) => {
          updateDailyLifePost(prevDailyLifePost.id, {
            ...dailyLifePost,
            imageURL,
            imagePath,
          });
        }
      );
    };

    if (prevDailyLifePost.imagePath) {
      return deleteFile(prevDailyLifePost.imagePath, updatePost);
    }
    updatePost();
  };

  const handleSubmit = async () => {
    if (!inputFileRef.current) {
      return;
    }

    const files = inputFileRef.current.files;

    if (files.length === 0) {
      return updateWithNoImg();
    }

    updateWithImg(files[0]);
  };

  return (
    <Article size="small">
      <FocusInitButton focusableElRef={endPointButtonRef} />
      <ArticleHeader>
        <h4>일상 포스트 수정하기</h4>
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
            value={dailyLifePost.title}
            id="title"
            handleChange={setDailyLifePostPost}
          />
          <CustomInput
            placeholder="내용을 입력해 주세요."
            label="내용"
            type="textarea"
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
          <CustomProgressBar work="사진 업데이트" value={uploadPercent} />
        )}
        {isDailyLifePostUpdated !== null && (
          <CustomProgressBar
            work="포스트 업데이트"
            value={isDailyLifePostUpdated ? 100 : 0}
          />
        )}
        {children}
      </ArticleContentsContainer>
      <FocusInitButton focusableElRef={entryPointButtonRef} />
    </Article>
  );
}
