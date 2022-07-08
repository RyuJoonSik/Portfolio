import React from "react";
import styled from "styled-components";
import { StyledIcon } from "@styled-icons/styled-icon";

const StyleMainIcon = styled.i`
  width: 24px;
  height: 24px;

  color: rgb(${({ theme }) => theme.color.eerieBlack});
`;

interface MainIconProps {
  Icon: StyledIcon;
}

export default function MainIcon({ Icon }: MainIconProps): JSX.Element {
  return <StyleMainIcon as={Icon} />;
}
