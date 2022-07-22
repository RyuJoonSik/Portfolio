import React from "react";
import { Login } from "@styled-icons/material-sharp/Login";

import MediumBlueButton from "../../1-atoms/Button/MediumBlueButton";
import MediumIcon from "../../1-atoms/Icon/MediumIcon";

export default function LoginLinkButton(): JSX.Element {
  return (
    <MediumBlueButton>
      <MediumIcon as={Login} />
      로그인
    </MediumBlueButton>
  );
}
