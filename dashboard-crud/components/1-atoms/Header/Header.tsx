import styled from "styled-components";

import RESPONSIVE_SIZE from "../../../styles/responsiveSize";
import { BLUE } from "../../../styles/color";
import CONTENT_ALIGN from "../../../styles/contentAlign";
import CONTENT_DIRECTION from "../../../styles/contentDirection";

const StyledHeader = styled.header`
  position: fixed;

  ${CONTENT_DIRECTION.HORIZONTAL}
  ${CONTENT_ALIGN.SPACE_BETWEEN_CENTER}
  gap: 2rem;
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  background-color: ${BLUE.DEFAULT};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);

  ${RESPONSIVE_SIZE.MOBILE} {
    ${CONTENT_ALIGN.CENTER}
    height: 2rem;
    padding: 0;
  }
`;

export default StyledHeader;
