import { css } from "styled-components";

import { blue, white, red, green } from "./color";

const elementColor = {
  red: css`
    background-color: ${red.default};
    color: ${white.light};
  `,
  green: css`
    background-color: ${green.default};
    color: ${white.light};
  `,
  blue: css`
    background-color: ${blue.default};
    color: ${white.light};
  `,
  white: css`
    background-color: ${({ theme }) => theme.color.backgroundAccent};
    color: ${({ theme }) => theme.color.textAccent};
  `,
};

export default elementColor;
