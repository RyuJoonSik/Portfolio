import React from "react";
import { Login } from "@styled-icons/material-sharp/Login";

import Icon from "../../1-atoms/Icon/Icon";
import PageHeaderButton from "./PageHeaderButton";

export default function LoginLinkButton(): JSX.Element {
  return (
    <PageHeaderButton.Link to="/login">
      <Icon.Large as={Login} />
      로그인
    </PageHeaderButton.Link>
  );
}
