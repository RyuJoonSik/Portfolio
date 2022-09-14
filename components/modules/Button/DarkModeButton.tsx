import React, { useContext } from "react";
import { DarkMode } from "@styled-icons/material/DarkMode";
import { LightMode } from "@styled-icons/material/LightMode";
import styled, { ThemeContext } from "styled-components";

import contentDirection from "../../_styles/contentDirection";
import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import responsiveSize from "../../_styles/responsiveSize";
import { blue, yellow } from "../../_styles/color";
import ButtonName from "../../atoms/Text/CustomText";
import { darkTheme, lightTheme } from "../../_styles/theme";
import { ThemeContext as ParentThemeContext } from "../../../contexts/ThemeContext";
import elementColor from "../../_styles/elementColor";
import roundShape from "../../_styles/roundShape";
import boxShadow from "../../_styles/boxShadow";
import hoverEffect from "../../_styles/hoverEffect";

const StyledDarkModeButton = styled.button`
  ${elementColor.white};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.small};
  padding: ${spaceSize.small};
  width: 160px;
  border-radius: ${spaceSize.larger};
  ${boxShadow.button};

  ${hoverEffect.opacity};

  ${responsiveSize.tablet} {
    ${roundShape.medium};

    ${ButtonName} {
      display: none;
    }
  }
`;

export default function DarkModeButton(): JSX.Element {
  const { name } = useContext(ThemeContext);
  const { setTheme } = useContext(ParentThemeContext);

  const onClick = () => {
    setTheme((prevState) =>
      prevState.name === "lightTheme" ? darkTheme : lightTheme
    );
  };

  const Light = () => (
    <>
      <LightMode size={16} fill={yellow.default} />
      <ButtonName size="small">라이트 모드로 보기</ButtonName>
    </>
  );

  const Dark = () => (
    <>
      <DarkMode size={16} fill={blue.dark} />
      <ButtonName>다크 모드로 보기</ButtonName>
    </>
  );

  return (
    <StyledDarkModeButton onClick={onClick}>
      {name == "darkTheme" ? <Light /> : <Dark />}
    </StyledDarkModeButton>
  );
}
