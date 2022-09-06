import React, { useContext } from "react";
import { Login } from "@styled-icons/material-sharp/Login";

import { UserContext } from "../../../contexts/UserContext";
import PageHeaderButton from "../../atoms/Button/PageHeaderButton";
import LogoutButton from "./LogoutButton";

export default function UserAuthLinkButton() {
  const { user } = useContext(UserContext);

  return user ? (
    <LogoutButton />
  ) : (
    <PageHeaderButton Icon={Login} buttonName="로그인" to="/login" />
  );
}
