import React from "react";
import { Logout } from "@styled-icons/material-sharp/Logout";
import styled from "styled-components";

import { pageHeaderButtonStyle } from "../../atoms/Button/PageHeaderButton";
import useUserLogout from "../../../hooks/useUserLogout";

const StyledLogoutButton = styled.button`
  ${pageHeaderButtonStyle};
`;

export default function LogoutButton(): JSX.Element {
  const logout = useUserLogout();

  const handleClick = () => {
    const result = confirm("로그아웃하시겠습니까?");

    if (result) {
      logout();
    }
  };

  return (
    <StyledLogoutButton onClick={handleClick}>
      <Logout size={24} />
      로그아웃
    </StyledLogoutButton>
  );
}
