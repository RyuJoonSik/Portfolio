import { css } from "styled-components";

import { blue, white, red, green } from "./color";
import spaceSize from "./spaceSize";

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
    border: ${spaceSize.smallest} solid
      ${({ theme }) => theme.color.borderDefault};
  `,
};
export default elementColor;

type ElementColor = typeof elementColor;
export type ElementColorKey = keyof ElementColor;
