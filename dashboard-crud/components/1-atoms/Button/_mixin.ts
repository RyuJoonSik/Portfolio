import { css } from "styled-components";

import { blue, white } from "../../../styles/color";

const color = {
  blue: css`
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
  `,

  white: css`
    background-color: ${({ theme }) => theme.color.backgroundAccent};

    color: ${({ theme }) => theme.color.textAccent};

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: ${({ theme }) => theme.color.backgroundHover};
      }
    }
  `,
};

const shape = {};

const buttonStyle = { color: { ...color }, shape: { ...shape } };

export default buttonStyle;
