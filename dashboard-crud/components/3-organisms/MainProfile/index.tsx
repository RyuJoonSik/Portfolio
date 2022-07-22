import React from "react";

import MainContentContainer from "../../1-atoms/Box/MainContentContainer";
import Main from "../../1-atoms/Main/Main";
import ProfileAboutMe from "../../2-molecules/ProfileAboutMe/ProfileAboutMe";
import H2 from "../../1-atoms/Heading/H2";
import ProfileSkills from "../../2-molecules/ProfileSkills/ProfileSkills";
import ProfileEducationAndCertificate from "../../2-molecules/ProfileEducationAndCertificate/ProfileEducationAndCertificate";

export default function MainProfile(): JSX.Element {
  return (
    <Main>
      <MainContentContainer>
        <H2>프로필</H2>
        <ProfileAboutMe />
        <ProfileSkills />
        <ProfileEducationAndCertificate />
      </MainContentContainer>
    </Main>
  );
}
