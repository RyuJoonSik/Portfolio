import React from "react";

import Main from "../../atoms/Main/Main";
import SectionHeader from "../../atoms/Header/SectionHeader";
import ProfileIntroduceItem from "../Item/ProfileIntroduceItem";
import ProfileEducationAndCertificateItem from "../Item/ProfileEducationAndCertificateItem";
import ProfileSkillsItem from "../Item/ProfileSkillsItem";

export default function ProfileContents(): JSX.Element {
  return (
    <Main>
      <SectionHeader>
        <h2>프로필</h2>
      </SectionHeader>
      <ProfileIntroduceItem />
      <ProfileSkillsItem />
      <ProfileEducationAndCertificateItem />
    </Main>
  );
}
