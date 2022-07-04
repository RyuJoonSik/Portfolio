import React from "react";
import styled from "styled-components";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";

import { HeaderButton, HeaderButtonName } from "../../0-base/Button";
import { HeaderIcon } from "../../0-base/Icon";

const Icon = styled(HeaderIcon).attrs({
  as: Brightness6,
})``;

export default function DarkModeButton(): JSX.Element {
  return (
    <HeaderButton>
      <Icon />
      <HeaderButtonName>다크모드</HeaderButtonName>
    </HeaderButton>
  );
}
