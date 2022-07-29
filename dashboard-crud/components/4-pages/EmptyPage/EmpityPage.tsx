import React from "react";
import { Outlet } from "react-router-dom";

import HeaderLogout from "../../3-organisms/HeaderLogout/HeaderLogout";

export default function EmptyPage(): JSX.Element {
  return (
    <>
      <HeaderLogout />
      <Outlet />
    </>
  );
}
