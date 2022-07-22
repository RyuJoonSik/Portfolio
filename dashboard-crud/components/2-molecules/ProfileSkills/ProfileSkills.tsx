import React from "react";
import { Construction } from "@styled-icons/material-sharp/Construction";

import MainFullContentItemContainer from "../../1-atoms/Box/MainFullContentItemContainer";
import H3 from "../../1-atoms/Heading/H3";
import MediumIcon from "../../1-atoms/Icon/MediumIcon";
import DL from "../../1-atoms/DescriptionList/DL";
import DT from "../../1-atoms/DescriptionTerm/DT";
import DD from "../../1-atoms/DescriptionDetails/DD";

export default function ProfileSkills(): JSX.Element {
  return (
    <MainFullContentItemContainer>
      <H3>
        <MediumIcon as={Construction} />
        Skills
      </H3>
      <DL>
        <DT>Lorem Ipsum</DT>
        <DD>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DD>
        <DD>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DD>
        <DD>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DD>
        <DT>Lorem Ipsum</DT>
        <DD>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DD>
        <DD>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DD>
        <DD>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DD>
        <DT>Lorem Ipsum</DT>
        <DD>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DD>
        <DD>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DD>
        <DD>
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat sunt nostrud amet.
        </DD>
      </DL>
    </MainFullContentItemContainer>
  );
}
