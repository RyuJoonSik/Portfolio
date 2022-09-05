import { css } from "styled-components";

import { blue, green, red } from "./color";

const activeEffect = {
  red: css`
    &:active {
      background-color: ${red.dark};
    }
  `,
  green: css`
    &:active {
      background-color: ${green.dark};
    }
  `,
  blue: css`
    &:active {
      background-color: ${blue.dark};
    }
  `,
};

export default activeEffect;
