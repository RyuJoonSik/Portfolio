import React, { useContext } from "react";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";
import { BrightnessMedium } from "@styled-icons/material/BrightnessMedium";

import { ColorThemeContext } from "../../../contexts/ColorThemeContext";
import Icon from "../../1-atoms/Icon/Icon";
import PageHeaderButton from "./PageHeaderButton";

export default function DarkModeButton(): JSX.Element {
  const { isDarkMode, setIsDarkMode } = useContext(ColorThemeContext);

  const onClick = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <PageHeaderButton.Default onClick={onClick}>
      {isDarkMode ? (
        <>
          <Icon.Large as={BrightnessMedium} />
          라이트 모드
        </>
      ) : (
        <>
          <Icon.Large as={Brightness6} />
          다크 모드
        </>
      )}
    </PageHeaderButton.Default>
  );
}
