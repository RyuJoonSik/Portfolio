import styled, { css } from "styled-components";
import { blue, white } from "../../_styles/color";

export const blueButtonStyle = css<Temp>`
  background-color: ${blue.default};
  color: ${white.light};
  ${(props) =>
    props.hasHover &&
    css`
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-color: ${blue.light};
        }
      }
    `}

  &:active {
    background-color: ${blue.dark};
  }
`;

interface Temp {
  hasHover: boolean;
}

const BlueButton = styled.button<Temp>`
  ${blueButtonStyle};
`;

export default BlueButton;
