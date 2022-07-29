import React from "react";
import styled from "styled-components";

import H3 from "../../1-atoms/Heading/H3";
import MainFullContentItemContainer from "../../1-atoms/Box/MainFullContentItemContainer";
import P from "../../1-atoms/Paragraph/P";
import MainContentItemHeader from "../../1-atoms/Header/MainContentItemHeader";
import FONT_SIZE from "../../../styles/fontSize";

const TEXT_CONTENT = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
repellendus, quidem animi ducimus praesentium odio eveniet quae doloribus
necessitatibus ab cum itaque et amet provident, ex adipisci ut incidunt
sit.
`;

const PostManagementBox = styled.div`
  width: 100%;

  ${FONT_SIZE.SMALLER};
`;

export default function DailyLifePost(): JSX.Element {
  return (
    <MainFullContentItemContainer>
      <MainContentItemHeader>
        <H3>테스트 1</H3>
        <PostManagementBox>
          <time>2022-07-25 오후 6:06</time>
        </PostManagementBox>
      </MainContentItemHeader>
      <P>{TEXT_CONTENT}</P>
    </MainFullContentItemContainer>
  );
}
