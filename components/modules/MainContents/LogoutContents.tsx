import React, { useEffect } from "react";

import Main from "../../atoms/Main/Main";
import SectionHeader from "../../atoms/Header/SectionHeader";
import useUserLogout from "../../../hooks/useUserLogout";

export default function LogoutContents(): JSX.Element {
  const logout = useUserLogout();

  useEffect(() => {
    logout();
  }, [logout]);

  return (
    <Main>
      <SectionHeader>
        <h2>로그아웃</h2>
      </SectionHeader>
    </Main>
  );
}
