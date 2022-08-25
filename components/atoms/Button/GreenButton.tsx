import styled, { css } from "styled-components";
import { green, white } from "../../_styles/color";

export const greenButtonStyle = css`
  background-color: ${green.default};
  color: ${white.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${green.light};
    }
  }

  &:active {
    background-color: ${green.dark};
  }
`;

const GreenButton = styled.button`
  ${greenButtonStyle};
`;

export default GreenButton;
