import React, { useContext } from "react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";
import { BrightnessMedium } from "@styled-icons/material/BrightnessMedium";

import HeaderIconButton from "../HeaderIconButton";
import {
  ThemeContextValue,
  ThemeContext,
} from "../../../contexts/ThemeContext";

export default function DarkModeButton(): JSX.Element {
  const { isLightMode, setIsLightMode } = useContext(
    ThemeContext
  ) as ThemeContextValue;

  const onClick = () => {
    setIsLightMode(!isLightMode);
    // console.log("hi");
  };

  return (
    <HeaderIconButton
      name={isLightMode ? "다크 모드" : "라이트 모드"}
      Icon={isLightMode ? Brightness6 : BrightnessMedium}
      dataTestid="darkModeButton"
      onClick={onClick}
    />
  );
}
