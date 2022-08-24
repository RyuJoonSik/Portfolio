import styled, { css } from "styled-components";
import { blue, white } from "../../_styles/color";

export const blueButtonStyle = css`
  background-color: ${blue.default};
  color: ${white.light};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${blue.light};
    }
  }

  &:active {
    background-color: ${blue.dark};
  }
`;

const BlueButton = styled.button`
  ${blueButtonStyle};
`;

export default BlueButton;
