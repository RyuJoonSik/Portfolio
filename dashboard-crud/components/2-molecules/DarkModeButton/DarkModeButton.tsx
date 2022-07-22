import React, { useContext } from "react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";
import { BrightnessMedium } from "@styled-icons/material/BrightnessMedium";

import {
  ThemeContextValue,
  ThemeContext,
} from "../../../contexts/ThemeContext";
import MediumBlueButton from "../../1-atoms/Button/MediumBlueButton";
import MediumIcon from "../../1-atoms/Icon/MediumIcon";

function toggleMode(isLightMode: boolean) {
  return isLightMode ? (
    <>
      <MediumIcon as={Brightness6} />
      다크 모드
    </>
  ) : (
    <>
      <MediumIcon as={BrightnessMedium} />
      라이트 모드
    </>
  );
}

export default function DarkModeButton(): JSX.Element {
  const { isLightMode, setIsLightMode } = useContext(
    ThemeContext
  ) as ThemeContextValue;

  const onClick = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <MediumBlueButton onClick={onClick}>
      {toggleMode(isLightMode)}
    </MediumBlueButton>
  );
}
