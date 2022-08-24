import React, { useRef, useState } from "react";

import SectionHeader from "../../atoms/Header/SectionHeader";
import Main from "../../atoms/Main/Main";
import PostCreateButton from "../Button/PostCreateButton";
import ModalPortal from "../../atoms/Portal/ModalPortal";
import CenterFixedContainer from "../../atoms/Container/CenterFixedContainer";
import DailyLifePostCreateForm from "../Form/DailyLifePostCreateForm";
import ModalContentsContainer from "../../atoms/Container/ModalContentsContainer";
import DailyLifePostItem from "../Item/DailyLifePostItem";
import useDailyLifePostReader from "../../../hooks/useDailyLifePostReader";

export default function DailyLifeContents(): JSX.Element {
  const createFormOpenButtonRef = useRef<HTMLButtonElement>(null);
  const [isCreateFormVisible, setIsCreateFormVisible] = useState(false);

  const dailyLifePostDocs = useDailyLifePostReader();

  const handleShowForm = () => {
    setIsCreateFormVisible(true);
  };

  const handleHideForm = () => {
    setIsCreateFormVisible(false);

    createFormOpenButtonRef.current?.focus();
  };

  return (
    <Main>
      <SectionHeader>
        <h2>일상</h2>
        <PostCreateButton
          handleClick={handleShowForm}
          buttonRef={createFormOpenButtonRef}
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

      {isCreateFormVisible && (
        <ModalPortal>
          <ModalContentsContainer>
            <CenterFixedContainer>
              <DailyLifePostCreateForm handleHideForm={handleHideForm} />
            </CenterFixedContainer>
          </ModalContentsContainer>
        </ModalPortal>
      )}
    </Main>
  );
}
