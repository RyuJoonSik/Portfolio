import React from "react";
import { NearMe } from "@styled-icons/material-outlined/NearMe";

import MediumBlueButton from "../../1-atoms/Button/MediumBlueButton";
import MediumIcon from "../../1-atoms/Icon/MediumIcon";

export default function DailyLifeLinkButton(): JSX.Element {
  return (
    <MediumBlueButton>
      <MediumIcon as={NearMe} />
      일상
    </MediumBlueButton>
  );
}
