import React from "react";

import MainContentContainer from "../../1-atoms/Box/MainContentContainer";
import Main from "../../1-atoms/Main/Main";
import H2 from "../../1-atoms/Heading/H2";
import DailyLifePost from "../../2-molecules/DailyLifePost/DailyLifePost";

export default function MainDailyLifePost(): JSX.Element {
  return (
    <Main>
      <MainContentContainer>
        <H2>일상</H2>
        <DailyLifePost />
      </MainContentContainer>
    </Main>
  );
}
