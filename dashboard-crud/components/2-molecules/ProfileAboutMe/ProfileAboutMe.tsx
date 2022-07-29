import React from "react";
import { Face } from "@styled-icons/material-sharp/Face";

import MediumIcon from "../../1-atoms/Icon/MediumIcon";
import H3 from "../../1-atoms/Heading/H3";
import MainFullContentItemContainer from "../../1-atoms/Box/MainFullContentItemContainer";
import P from "../../1-atoms/Paragraph/P";
import MainContentItemHeader from "../../1-atoms/Header/MainContentItemHeader";

const TEXT_CONTENT = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
sit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
sit.
`;

export default function ProfileAboutMe(): JSX.Element {
  return (
    <MainFullContentItemContainer>
      <MainContentItemHeader>
        <MediumIcon as={Face} />
        <H3>
          About me
          <div></div>
        </H3>
      </MainContentItemHeader>
      <P>{TEXT_CONTENT}</P>
    </MainFullContentItemContainer>
  );
}
