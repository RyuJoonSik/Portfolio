import React from "react";
import styled from "styled-components";

import { BoxContentCenter } from "../../0-base/FlexBox";
import { text_24px_bold } from "../../0-base/Text";

const StyledHeaderTitle = styled(BoxContentCenter).attrs({
  as: "h1",
})`
  background-color: rgb(${(props) => props.theme.color.ultramarineBlue});

  ${text_24px_bold};
  color: rgb(${(props) => props.theme.color.cultured});
`;

const TITLE = "<frontend>류준식</frontend>";

export default function HeaderTitle(): JSX.Element {
  return <StyledHeaderTitle>{TITLE}</StyledHeaderTitle>;
}
