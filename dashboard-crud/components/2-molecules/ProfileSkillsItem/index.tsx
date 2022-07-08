import React from "react";
import { Construction } from "@styled-icons/material-sharp/Construction";

import MainContentItemBox from "../../1-atoms/MainContentItemBox";
import MainContentTitle from "../../1-atoms/MainContentTitle";
import MainContentDescriptionList from "../../1-atoms/MainContentDescriptionList";
import MainContentDescriptionTerm from "../../1-atoms/MainContentDescriptionTerm";
import MainContentDescriptionDetail from "../../1-atoms/MainContentDescriptionDetail";

export default function ProfileSkillsItem(): JSX.Element {
  return (
    <MainContentItemBox>
      <MainContentTitle title="Skills" Icon={Construction} />
      <MainContentDescriptionList>
        <MainContentDescriptionTerm>Lorem Ipsum</MainContentDescriptionTerm>
        <MainContentDescriptionDetail>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </MainContentDescriptionDetail>
        <MainContentDescriptionDetail>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </MainContentDescriptionDetail>
        <MainContentDescriptionDetail>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </MainContentDescriptionDetail>
        <MainContentDescriptionTerm>Lorem Ipsum</MainContentDescriptionTerm>
        <MainContentDescriptionDetail>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </MainContentDescriptionDetail>
        <MainContentDescriptionDetail>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </MainContentDescriptionDetail>
        <MainContentDescriptionDetail>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </MainContentDescriptionDetail>
        <MainContentDescriptionTerm>Lorem Ipsum</MainContentDescriptionTerm>
        <MainContentDescriptionDetail>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </MainContentDescriptionDetail>
        <MainContentDescriptionDetail>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </MainContentDescriptionDetail>
        <MainContentDescriptionDetail>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </MainContentDescriptionDetail>
      </MainContentDescriptionList>
    </MainContentItemBox>
  );
}
