import React, { useContext } from "react";
import { DarkMode } from "@styled-icons/material/DarkMode";
import { LightMode } from "@styled-icons/material/LightMode";
import styled from "styled-components";

import { ColorThemeContext } from "../../../contexts/ColorThemeContext";
import Icon from "../../1-atoms/Icon/Icon";
import { blue, yellow } from "../../../styles/color";
import FixedButton from "../../1-atoms/Button/FixedButton";
import Text from "../../1-atoms/Text/Text";
import responsiveSize from "../../../styles/responsiveSize";

const StyledFixedButton = styled(FixedButton)`
  border-radius: 1.5rem;

  ${responsiveSize.mobile} {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`;

const StyledText = styled(Text.Medium)`
  ${responsiveSize.mobile} {
    display: none;
  }
`;

const LightModeIcon = styled(Icon.Medium)`
  color: ${yellow.default};
`;

const DarkModeIcon = styled(Icon.Medium)`
  color: ${blue.dark};
`;

interface DarkModeButtonProps {
  className?: string;
}

export default function DarkModeButton({
  className,
}: DarkModeButtonProps): JSX.Element {
  const { isDarkMode, setIsDarkMode } = useContext(ColorThemeContext);

  const onClick = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <StyledFixedButton onClick={onClick} className={className}>
      {isDarkMode ? (
        <>
          <LightModeIcon as={LightMode} />
          <StyledText>라이트 모드</StyledText>
        </>
      ) : (
        <>
          <DarkModeIcon as={DarkMode} />
          <StyledText>다크 모드</StyledText>
        </>
      )}
    </StyledFixedButton>
  );
}
