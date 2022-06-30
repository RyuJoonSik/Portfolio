import React from "react";
import styled from "styled-components";
import { AccountCircle } from "@styled-icons/material-outlined/AccountCircle";

import { Button, ButtonName } from "../../0-base/Button";
import { Icon } from "../../0-base/Icon";

const StyledAccountCircleIcon = styled(Icon).attrs({
  as: AccountCircle,
})``;

export default function ProfileButton(): JSX.Element {
  return (
    <Button>
      <StyledAccountCircleIcon />
      <ButtonName>프로필</ButtonName>
    </Button>
  );
}
