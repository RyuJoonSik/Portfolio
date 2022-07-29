import { css } from "styled-components";

import SPACE_SIZE from "../../../styles/spaceSize";

const BOX_STYLE = {
  TYPE: {
    MAIN_CONTENT_ITEM_CONTAINER: css`
      border-radius: ${SPACE_SIZE.SMALL};
      background-color: ${({ theme }) => theme.color.backgroundAccent};
      box-shadow: 0px 4px 6px -2px rgba(0, 0, 0, 0.12),
        0px 2px 2px -1px rgba(0, 0, 0, 0.05);
    `,
  },
};

export default BOX_STYLE;
