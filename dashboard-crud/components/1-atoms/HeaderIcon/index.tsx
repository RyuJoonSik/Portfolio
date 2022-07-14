import React from "react";
import styled from "styled-components";
import { StyledIcon } from "@styled-icons/styled-icon";

const StyleHeaderIcon = styled.i`
  width: 24px;
  height: 24px;

  color: rgb(${({ theme }) => theme.color.headerButtonIcon});
`;

interface HeaderIconProps {
  Icon: StyledIcon;
}

export default function HeaderIcon({ Icon }: HeaderIconProps): JSX.Element {
  return <StyleHeaderIcon as={Icon} />;
}
