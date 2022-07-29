import React, { useContext } from "react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";
import { BrightnessMedium } from "@styled-icons/material/BrightnessMedium";

import { ColorThemeContext } from "../../../contexts/ColorThemeContext";
import MediumIcon from "../../1-atoms/Icon/MediumIcon";
import MediumBlueButton from "../../1-atoms/Button/MediumBlueButton";

function toggleMode(isDarkMode: boolean) {
  return isDarkMode ? (
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
  const { isDarkMode, setIsDarkMode } = useContext(ColorThemeContext);

  const onClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <MediumBlueButton.Default onClick={onClick}>
      {toggleMode(isDarkMode)}
    </MediumBlueButton.Default>
  );
}
