import styled from "styled-components";

import { Box } from "../Box";
import { text_12px_regular } from "../Text";

export const HeaderButton = styled(Box).attrs({
  as: "button",
})`
  position: relative;
  overflow: hidden;
  z-index: 1;

  flex-direction: column;
  padding: 0.3rem 0.6rem;

  border-radius: 4px;
  background-color: rgb(${({ theme }) => theme.color.ultramarineBlue});

  transition: background-color 150ms ease-in;
  cursor: pointer;

  &:hover {
    background-color: rgb(${({ theme }) => theme.color.blueberry});
  }

  &::after {
    position: absolute;
    z-index: -1;
    top: 0;

    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: rgb(${(props) => props.theme.color.cornflowerBlue});

    transform: scale(0);
    transition: transform 60ms ease-in;
    content: "";
  }

  &:active::after {
    transform: scale(1);
  }
`;

export const HeaderButtonName = styled.span`
  ${text_12px_regular};
  color: rgb(${({ theme }) => theme.color.cultured});
`;
