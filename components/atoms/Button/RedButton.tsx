import styled, { css } from "styled-components";
import { red, white } from "../../_styles/color";

export const redButtonStyle = css`
  background-color: ${red.default};
  color: ${white.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${red.light};
    }
  }

  &:active {
    background-color: ${red.dark};
  }
`;

const RedButton = styled.button`
  ${redButtonStyle};
`;

export default RedButton;
