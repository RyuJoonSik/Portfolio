import styled, { css } from "styled-components";
import { blue, white } from "../../_styles/color";

export interface BlueButton {
  hasHover?: boolean;
  hasActive?: boolean;
}

export const blueButtonStyle = css<BlueButton>`
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

  ${(props) =>
    props.hasActive &&
    css`
      &:active {
        background-color: ${blue.dark};
      }
    `}
`;

const BlueButton = styled.button<BlueButton>`
  ${blueButtonStyle};
`;

export default BlueButton;
