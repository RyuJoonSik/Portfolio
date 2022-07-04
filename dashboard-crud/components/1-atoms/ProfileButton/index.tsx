import React from "react";
import styled from "styled-components";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";

import { HeaderButton, HeaderButtonName } from "../../0-base/Button";
import { HeaderIcon } from "../../0-base/Icon";

const Icon = styled(HeaderIcon).attrs({
  as: AccountCircle,
})``;

export default function ProfileButton(): JSX.Element {
  return (
    <HeaderButton>
      <Icon />
      <HeaderButtonName>프로필</HeaderButtonName>
    </HeaderButton>
  );
}
