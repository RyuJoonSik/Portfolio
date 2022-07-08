import React from "react";
import { StyledIcon } from "@styled-icons/styled-icon";

import HeaderIcon from "../../1-atoms/HeaderIcon";
import HeaderButtonName from "../../1-atoms/HeaderButtonName";
import HeaderButton from "../../1-atoms/HeaderButton";

interface HeaderButtonProps {
  name: string;
  Icon: StyledIcon;
  dataTestid?: string;
  onClick?: () => void;
}

export default function HeaderIconButton({
  name,
  Icon,
  dataTestid,
  onClick,
}: HeaderButtonProps): JSX.Element {
  return (
    <HeaderButton dataTestid={dataTestid} onClick={onClick}>
      <HeaderIcon Icon={Icon} />
      <HeaderButtonName>{name}</HeaderButtonName>
    </HeaderButton>
  );
}
