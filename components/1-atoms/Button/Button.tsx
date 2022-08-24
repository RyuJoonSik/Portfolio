import styled, { css } from "styled-components";

import { blue, white } from "../../../styles/color";

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

export const whiteButtonStyle = css`
  background-color: ${({ theme }) => theme.color.backgroundAccent};
  color: ${({ theme }) => theme.color.textAccent};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.color.backgroundHover};
    }
  }
`;

const Button = {
  Blue: styled.button`
    ${blueButtonStyle};
  `,

  White: styled.button`
    ${whiteButtonStyle};
  `,
};

export default Button;
