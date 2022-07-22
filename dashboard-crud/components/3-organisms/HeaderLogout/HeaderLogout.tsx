import React from "react";

import DarkModeButton from "../../2-molecules/DarkModeButton/DarkModeButton";
import ProfileButton from "../../2-molecules/ProfileLinkButton/ProfileLinkButton";
import DailyLifeButton from "../../2-molecules/DailyLifeLinkButton/DailyLifeLinkButton";
import LoginLinkButton from "../../2-molecules/LoginLinkButton/LoginLinkButton";
import H1 from "../../1-atoms/Heading/H1";
import Header from "../../1-atoms/Header/Header";
import HeaderButtonContainer from "../../1-atoms/Box/HeaderButtonContainer";

export default function HeaderLogout(): JSX.Element {
  const TITLE = "<frontend>류준식</frontend>";

  return (
    <Header>
      <H1>{TITLE}</H1>
      <HeaderButtonContainer>
        <DarkModeButton />
        <ProfileButton />
        <DailyLifeButton />
        <LoginLinkButton />
      </HeaderButtonContainer>
    </Header>
  );
}
