import React from "react";
import { Logout } from "@styled-icons/material-sharp/Logout";

import Icon from "../../1-atoms/Icon/Icon";
import PageHeaderButton from "./PageHeaderButton";
import useUserLogout from "../../../hooks/useUserLogout";

export default function LogoutButton(): JSX.Element {
  const handleLogout = useUserLogout();

  return (
    <PageHeaderButton.Default onClick={handleLogout}>
      <Icon.Large as={Logout} />
      로그아웃
    </PageHeaderButton.Default>
  );
}
