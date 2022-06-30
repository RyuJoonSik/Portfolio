import React from "react";
import styled from "styled-components";
import { Brightness6 } from "@styled-icons/material-outlined/Brightness6";

import { Button, ButtonName } from "../../0-base/Button";
import { Icon } from "../../0-base/Icon";

const StyledBrightness6Icon = styled(Icon).attrs({
  as: Brightness6,
})``;

export default function DarkModeButton(): JSX.Element {
  return (
    <Button>
      <StyledBrightness6Icon />
      <ButtonName>다크모드</ButtonName>
    </Button>
  );
}
