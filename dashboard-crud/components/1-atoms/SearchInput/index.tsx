import React from "react";
import styled from "styled-components";
import { Search } from "@styled-icons/material-sharp/Search";

import { Icon } from "../../0-base/Icon";
import { Box } from "../../0-base/FlexBox";

const StyledContainer = styled(Box)`
  position: relative;

  border-radius: 4px;
  background-color: rgba(${(props) => props.theme.color.blueberry});

  &:hover {
    background-color: rgba(${(props) => props.theme.color.cornflowerBlue});
  }
`;

const StyledSearchInput = styled.input`
  position: relative;

  width: 9rem;
  height: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 2rem;

  color: rgb(${(props) => props.theme.color.cultured});

  transition: width 150ms ease-in;

  &::placeholder {
    color: rgb(${(props) => props.theme.color.jordyBlue});
  }

  &:focus {
    width: 14rem;
  }
`;

const StyledSearchIcon = styled(Icon).attrs({
  as: Search,
})`
  position: absolute;
  left: 1rem;

  transform: translateX(-50%);
`;

export default function SearchInput(): JSX.Element {
  return (
    <StyledContainer>
      <StyledSearchIcon />
      <StyledSearchInput />
    </StyledContainer>
  );
}
