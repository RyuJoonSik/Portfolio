import React from "react";
import styled from "styled-components";

import { MainBox } from "../../0-base/Box";
import MainTitle from "../../1-atoms/MainTitle";
import ProfileAboutMeItem from "../../1-atoms/ProfileAboutMeItem";
import ProfileEducationAndCertificateItem from "../../1-atoms/ProfileEducationAndCertificateItem";
import ProfileSkillsItem from "../../1-atoms/ProfileSkillsItem";

const StyledContainer = styled.div`
  max-width: 63.75rem;
  padding: 0 2rem;
`;

export default function Main(): JSX.Element {
  return (
    <MainBox>
      <StyledContainer>
        <MainTitle />
        <ProfileAboutMeItem />
        <ProfileSkillsItem />
        <ProfileEducationAndCertificateItem />
      </StyledContainer>
    </MainBox>
  );
}
