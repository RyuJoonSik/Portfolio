import { css } from "styled-components";

import { blue, green, red } from "./color";

const hoverEffect = {
  red: css`
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: ${red.light};
      }
    } ;
  `,
  green: css`
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: ${green.light};
      }
    }
  `,
  blue: css`
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: ${blue.light};
      }
    }
  `,
};

export default hoverEffect;
