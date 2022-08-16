import React, { useRef, useState } from "react";

import useDailyLifePostDocsRead from "../../../hooks/useDailyLifePostDocsRead";
import BlueButton from "../../1-atoms/Button/BlueButton";
import SectionHeader from "../../1-atoms/Header/SectionHeader";
import Main from "../../1-atoms/Main/Main";
import ModalPortal from "../../1-atoms/Portal/ModalPortal";
import DailyLifePostItem from "../../2-molecules/Item/DailyLifePostItem";
import DailyLifePostForm from "../DailyLifePostForm/DailyLifePostForm";

export default function MainDailyLifeContents(): JSX.Element {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const modalButtonRef = useRef<HTMLButtonElement>(null);

  const dailyLifePostDocs = useDailyLifePostDocsRead();

  const handleShow = () => {
    setIsVisibleModal(true);
  };

  const handleHide = () => {
    setIsVisibleModal(false);

    modalButtonRef.current?.focus();
  };

  return (
    <Main>
      <SectionHeader>
        <h2>일상</h2>
        <BlueButton.Rectangle.Medium onClick={handleShow} ref={modalButtonRef}>
          포스트 추가
        </BlueButton.Rectangle.Medium>
      </SectionHeader>
      {dailyLifePostDocs.map(
        ({ title, content, id, requestedAt, downloadURL }) => (
          <DailyLifePostItem
            key={id}
            id={id}
            title={title}
            content={content}
            downloadURL={downloadURL}
            requestedAt={requestedAt}
          />
        )
      )}
      {isVisibleModal && (
        <ModalPortal>
          <DailyLifePostForm handleHide={handleHide} />
        </ModalPortal>
      )}
    </Main>
  );
}
