import React from "react";

import HeaderLogout from "../../3-organisms/HeaderLogout/HeaderLogout";
import MainLogin from "../../3-organisms/MainLogin";

export default function ProfilePage(): JSX.Element {
  return (
    <>
      <HeaderLogout />
      <MainLogin />
    </>
  );
}
