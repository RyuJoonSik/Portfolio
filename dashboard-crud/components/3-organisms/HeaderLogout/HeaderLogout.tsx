import React, { useContext } from "react";
import { NearMe } from "@styled-icons/material-outlined/NearMe";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";
import { Login } from "@styled-icons/material-sharp/Login";
import { Logout } from "@styled-icons/material-sharp/Logout";

import DarkModeButton from "../../2-molecules/DarkModeButton/DarkModeButton";
import H1 from "../../1-atoms/Heading/H1";
import Header from "../../1-atoms/Header/Header";
import HeaderButtonContainer from "../../1-atoms/Box/HeaderButtonContainer";
import MediumBlueLinkButton from "../../1-atoms/Button/MediumBlueButton";
import MediumIcon from "../../1-atoms/Icon/MediumIcon";
import { UserContext } from "../../../contexts/UserContext";

export default function HeaderLogout(): JSX.Element {
  const { user } = useContext(UserContext);

  const TITLE = "<frontend>류준식</frontend>";

  return (
    <Header>
      <H1>{TITLE}</H1>
      <HeaderButtonContainer>
        <DarkModeButton />
        <MediumBlueLinkButton.Link to="/profile">
          <MediumIcon as={AccountCircle} />
          프로필
        </MediumBlueLinkButton.Link>
        <MediumBlueLinkButton.Link to="/daily-life-post">
          <MediumIcon as={NearMe} />
          일상
        </MediumBlueLinkButton.Link>
        {user ? (
          <MediumBlueLinkButton.Link to="/login">
            <MediumIcon as={Logout} />
            로그아웃
          </MediumBlueLinkButton.Link>
        ) : (
          <MediumBlueLinkButton.Link to="/login">
            <MediumIcon as={Login} />
            로그인
          </MediumBlueLinkButton.Link>
        )}
      </HeaderButtonContainer>
    </Header>
  );
}
