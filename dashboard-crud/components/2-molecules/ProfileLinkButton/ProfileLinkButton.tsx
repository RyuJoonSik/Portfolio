import React from "react";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";

import MediumBlueButton from "../../1-atoms/Button/MediumBlueButton";
import MediumIcon from "../../1-atoms/Icon/MediumIcon";

export default function ProfileLinkButton(): JSX.Element {
  return (
    <MediumBlueButton>
      <MediumIcon as={AccountCircle} />
      프로필
    </MediumBlueButton>
  );
}
