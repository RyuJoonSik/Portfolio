import styled from "styled-components";

import { WHITE } from "../../../styles/color";
import FONT_SIZE from "../../../styles/fontSize";
import FONT_WEIGHT from "../../../styles/fontWeight";
import RESPONSIVE_SIZE from "../../../styles/responsiveSize";

const H1 = styled.h1`
  ${FONT_SIZE.LARGER};
  ${FONT_WEIGHT.MEDIUM};
  color: ${WHITE.LIGHT};
  white-space: nowrap;

  ${RESPONSIVE_SIZE.TABLET} {
    ${FONT_SIZE.LARGE};
  }
`;

export default H1;
