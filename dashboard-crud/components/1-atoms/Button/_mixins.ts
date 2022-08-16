import { css } from "styled-components";

import { blue, white } from "../../../styles/color";
import contentAlign from "../../../styles/contentAlign";
import contentDirection from "../../../styles/contentDirection";
import fontSize from "../../../styles/fontSize";
import spaceSize from "../../../styles/spaceSize";

const colorStyle = {
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
    border: ${spaceSize.smallest} solid
      ${({ theme }) => theme.color.borderDefault};

    color: ${({ theme }) => theme.color.textDefault};

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: ${({ theme }) => theme.color.backgroundHover};
      }
    }

    &:active {
      background-color: ${({ theme }) => theme.color.backgroundDefault};
    }
  `,
};

const rectangleStyle = {
  medium: css`
    ${contentDirection.vertical};
    ${contentAlign.center};
    min-width: 5rem;
    width: 5rem;
    padding: ${spaceSize.small} 0;
    border-radius: ${spaceSize.smaller};

    ${fontSize.smaller};
  `,

  full: css`
    ${contentDirection.vertical};
    ${contentAlign.center};
    width: 100%;
    padding: ${spaceSize.small} 0;
    border-radius: ${spaceSize.smaller};

    ${fontSize.large};
  `,
};

const buttonStyle = {
  color: {
    ...colorStyle,
  },

  rectangle: {
    ...rectangleStyle,
  },
};

export default buttonStyle;
