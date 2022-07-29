import { css } from "styled-components";

import { BLUE, WHITE } from "../../../styles/color";
import CONTENT_ALIGN from "../../../styles/contentAlign";
import CONTENT_DIRECTION from "../../../styles/contentDirection";
import FONT_SIZE from "../../../styles/fontSize";
import RESPONSIVE_SIZE from "../../../styles/responsiveSize";
import SPACE_SIZE from "../../../styles/spaceSize";

const BUTTON_STYLE = {
  DEFAULT: css`
    ${CONTENT_DIRECTION.VERTICAL};
    ${CONTENT_ALIGN.CENTER};
    border-radius: ${SPACE_SIZE.SMALLER};
    height: 3.2rem;
  `,

  COLOR: {
    BLUE: css`
      background-color: ${BLUE.DEFAULT};

      color: ${WHITE.LIGHT};
    `,
  },

  EFFECT: {
    BLUE: css`
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-color: ${BLUE.LIGHT};
        }
      }

      &:active {
        background-color: ${BLUE.DARK};
      }

      &:focus-visible {
        border: ${SPACE_SIZE.SMALLER} solid red;
      }
    `,
  },

  SIZE: {
    DEFAULT: css`
      ${FONT_SIZE.SMALLER};
      width: 5rem;

      ${RESPONSIVE_SIZE.MOBILE} {
        border-radius: 0;
        flex: 1;
      }
    `,
    FULL: css`
      ${FONT_SIZE.LARGE};
      width: 100%;
    `,
  },
};

export default BUTTON_STYLE;
