import React, { useEffect, useRef, useState } from "react";

import useAutoFocus from "../../../hooks/useAutoFocus";
import useDailyLifePostUpdater from "../../../hooks/useDailyLifePostUpdater";
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
import { getMetadata, getStorage, ref } from "firebase/storage";

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

  useAutoFocus(entryPointButtonRef);

  const [dailyLifePost, setDailyLifePostPost] = useInputsValue({
    title: prevDailyLifePost.title,
    content: prevDailyLifePost.content,
  });

  const [
    isDailyLifePostUpdated,
    updatePostWithNoImg,
    updatePostWithImg,
    uploadPercent,
  ] = useDailyLifePostUpdater();

  useEffect(() => {
    if (isDailyLifePostUpdated) {
      setTimeout(() => {
        alert("포스트가 수정되었습니다.");
        handleHideForm();
      }, 500);
    }
  }, [isDailyLifePostUpdated, handleHideForm]);

  useEffect(() => {
    if (prevDailyLifePost.imagePath === null) return;

    const storage = getStorage();
    const forestRef = ref(storage, prevDailyLifePost.imagePath);

    // Get metadata properties
    getMetadata(forestRef)
      .then((metadata) => {
        console.log(metadata);
        // Metadata now contains the metadata for 'images/forest.jpg'
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }, []);

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
      return updatePostWithImg(prevDailyLifePost, dailyLifePost, imgFile);
    }

    updatePostWithNoImg(prevDailyLifePost, dailyLifePost);
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

          <ImageFileInput imgFile={imgFile} handleChange={handleChange} />
          <RequestButton
            type="button"
            ref={endPointButtonRef}
            onClick={handleSubmit}
            disabled={uploadPercent !== null || isDailyLifePostUpdated !== null}
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
