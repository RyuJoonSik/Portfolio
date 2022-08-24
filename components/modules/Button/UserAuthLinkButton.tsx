import React, { useContext } from "react";
import { Login } from "@styled-icons/material-sharp/Login";
import { Logout } from "@styled-icons/material-sharp/Logout";

import { UserContext } from "../../../contexts/UserContext";
import PageHeaderLinkButton from "../../atoms/Button/PageHeaderLinkButton";

export default function UserAuthLinkButton() {
  const { user } = useContext(UserContext);

  return user ? (
    <PageHeaderLinkButton to="/logout">
      <Logout size={24} />
      로그아웃
    </PageHeaderLinkButton>
  ) : (
    <PageHeaderLinkButton to="/login">
      <Login size={24} />
      로그인
    </PageHeaderLinkButton>
  );
}
