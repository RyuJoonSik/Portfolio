import React from "react";
import MainContainer from "../../1-atoms/MainContainer";

import MainContentContainer from "../../1-atoms/MainContentContainer";
import MainTitle from "../../1-atoms/MainTitle";
import ProfileAboutMe from "../../2-molecules/ProfileAboutMe";
import ProfileEducationAndCertificateItem from "../../2-molecules/ProfileEducationAndCertificateItem";
import ProfileSkillsItem from "../../2-molecules/ProfileSkillsItem";

export default function MainProfile(): JSX.Element {
  return (
    <MainContainer>
      <MainContentContainer>
        <MainTitle title="프로필" />
        <ProfileAboutMe />
        <ProfileSkillsItem />
        <ProfileEducationAndCertificateItem />
      </MainContentContainer>
    </MainContainer>
  );
}
