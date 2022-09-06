import React from "react";
import { Logout } from "@styled-icons/material-sharp/Logout";

import PageHeaderButton from "../../atoms/Button/PageHeaderButton";
import useUserLogout from "../../../hooks/useUserLogout";

export default function LogoutButton(): JSX.Element {
  const logout = useUserLogout();

  const handleClick = () => {
    const result = confirm("로그아웃하시겠습니까?");

    if (result) {
      logout();
    }
  };

  return (
    <PageHeaderButton
      Icon={Logout}
      buttonName="로그아웃"
      handleClick={handleClick}
    />
  );
}
