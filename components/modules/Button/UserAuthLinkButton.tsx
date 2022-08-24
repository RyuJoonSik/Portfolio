import React, { useContext } from "react";
import { Login } from "@styled-icons/material-sharp/Login";

import { UserContext } from "../../../contexts/UserContext";
import PageHeaderLinkButton from "../../atoms/Button/PageHeaderLinkButton";
import LogoutButton from "./LogoutButton";

export default function UserAuthLinkButton() {
  const { user } = useContext(UserContext);

  return user ? (
    <LogoutButton />
  ) : (
    <PageHeaderLinkButton to="/login">
      <Login size={24} />
      로그인
    </PageHeaderLinkButton>
  );
}
