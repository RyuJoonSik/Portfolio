import React from "react";
import styled from "styled-components";
import { MdMenu, MdOutlineBrightnessMedium } from "react-icons/md";
import { IconContext } from "react-icons";

const StyledHeader = styled.header`
  display: flex;
  height: 64px;
  padding: 0 24px;
  background-color: #3366ff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
`;

const HeaderLeftGroup = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const HeaderCenterGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const HeaderRightGroup = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex: 1;
`;

const Title = styled.h1`
  margin-right: 96px;
  line-height: 64px;
  font-size: 24px;
  color: #fff;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #3366ff;
  transition: background-color 150ms ease-in;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const SearchBox = styled.input``;

export default function Header() {
  return (
    <StyledHeader data-testid="header">
      <HeaderLeftGroup>
        <Title data-testid="header-title">Hello, 울산!</Title>
        <Button data-testid="header-navigation-toggle">
          <IconContext.Provider value={{ color: "#fff", size: "24px" }}>
            <MdMenu />
          </IconContext.Provider>
        </Button>
      </HeaderLeftGroup>
      <HeaderCenterGroup>
        <Button data-testid="header-dark-mode-toggle">
          <IconContext.Provider value={{ color: "#fff", size: "24px" }}>
            <MdOutlineBrightnessMedium />
          </IconContext.Provider>
        </Button>
      </HeaderCenterGroup>
      <HeaderRightGroup>
        <SearchBox data-testid="header-search-box"></SearchBox>
      </HeaderRightGroup>
    </StyledHeader>
  );
}
