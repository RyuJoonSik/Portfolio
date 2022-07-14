import React from "react";

import MainBox from "../../1-atoms/MainBox";
import MainContentBox from "../../1-atoms/MainContentBox";
import MainTitle from "../../1-atoms/MainTitle";
import ProfileAboutMe from "../../2-molecules/ProfileAboutMe";
import ProfileEducationAndCertificateItem from "../../2-molecules/ProfileEducationAndCertificateItem";
import ProfileSkillsItem from "../../2-molecules/ProfileSkillsItem";

export default function MainProfile(): JSX.Element {
  return (
    <MainBox>
      <MainContentBox>
        <MainTitle title="프로필" />
        <ProfileAboutMe />
        <ProfileSkillsItem />
        <ProfileEducationAndCertificateItem />
      </MainContentBox>
    </MainBox>
  );
}
