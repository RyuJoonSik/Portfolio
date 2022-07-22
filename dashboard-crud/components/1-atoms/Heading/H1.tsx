import styled from "styled-components";

import { WHITE } from "../../../styles/color";
import CONTENT_ALIGN from "../../../styles/contentAlign";
import CONTENT_DIRECTION from "../../../styles/contentDirection";
import FONT_SIZE from "../../../styles/fontSize";
import FONT_WEIGHT from "../../../styles/fontWeight";
import RESPONSIVE_SIZE from "../../../styles/responsiveSize";

const H1 = styled.h1`
  ${CONTENT_DIRECTION.HORIZONTAL};
  ${CONTENT_ALIGN.CENTER};

  ${FONT_SIZE.LARGEST};
  ${FONT_WEIGHT.MEDIUM};
  color: ${WHITE.LIGHT};
  white-space: nowrap;

  ${RESPONSIVE_SIZE.TABLET} {
    ${FONT_SIZE.LARGE};
  }
`;

export default H1;
