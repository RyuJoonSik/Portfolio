import React, { useRef, useState } from "react";

import useDailyLifePostDocsReader from "../../../hooks/useDailyLifePostDocsReader";
import SectionHeader from "../../1-atoms/Header/SectionHeader";
import Main from "../../1-atoms/Main/Main";
import ModalPortal from "../../1-atoms/Portal/ModalPortal";
import DailyLifePostItem from "../../2-molecules/Item/DailyLifePostItem";
import DailyLifePostForm from "../DailyLifePostForm/DailyLifePostForm";
import PostAddButton from "../../2-molecules/Button/PostAddButton";

export default function MainDailyLifeContents(): JSX.Element {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const modalOpenButtonRef = useRef<HTMLButtonElement>(null);

  const dailyLifePostDocs = useDailyLifePostDocsReader();

  const handleShowForm = () => {
    setIsVisibleModal(true);
  };

  const handleHideForm = () => {
    setIsVisibleModal(false);

    modalOpenButtonRef.current?.focus();
  };

  return (
    <Main>
      <SectionHeader>
        <h2>일상</h2>
        <PostAddButton
          handleClick={handleShowForm}
          buttonRef={modalOpenButtonRef}
        />
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
          <DailyLifePostForm handleHideForm={handleHideForm} />
        </ModalPortal>
      )}
    </Main>
  );
}
