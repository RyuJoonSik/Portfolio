import React from "react";
import styled from "styled-components";
import { StyledIcon } from "@styled-icons/styled-icon";

import { text_20px_regular } from "../../../styles/textStyle";
import MainIcon from "../MainIcon";

const StyledContentTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 1rem;
  box-sizing: border-box;
  padding: 1.5rem;
  background-color: rgb(${({ theme }) => theme.color.white});
  border-bottom: 1px rgb(${({ theme }) => theme.color.chineseWhite}) solid;

  ${text_20px_regular}
  color: rgb(${({ theme }) => theme.color.eerieBlack});
`;

interface MainContentTitleProps {
  title: string;
  Icon: StyledIcon;
}

export default function MainContentTitle({
  title,
  Icon,
}: MainContentTitleProps): JSX.Element {
  return (
    <StyledContentTitle>
      <MainIcon Icon={Icon} />
      {title}
    </StyledContentTitle>
  );
}
