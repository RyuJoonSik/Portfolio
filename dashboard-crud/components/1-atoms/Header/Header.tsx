import styled from "styled-components";

import RESPONSIVE_SIZE from "../../../styles/responsiveSize";
import { BLUE } from "../../../styles/color";
import CONTENT_ALIGN from "../../../styles/contentAlign";
import CONTENT_DIRECTION from "../../../styles/contentDirection";
import SPACE_SIZE from "../../../styles/spaceSize";

const Header = styled.header`
  position: fixed;

  ${CONTENT_DIRECTION.HORIZONTAL}
  ${CONTENT_ALIGN.SPACE_BETWEEN_CENTER}
  gap: ${SPACE_SIZE.LARGEST};
  padding: ${SPACE_SIZE.SMALL} ${SPACE_SIZE.LARGE};
  background-color: ${BLUE.DEFAULT};
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);

  ${RESPONSIVE_SIZE.MOBILE} {
    ${CONTENT_ALIGN.CENTER}
    height: 2rem;
    padding: 0;
  }
`;

export default Header;
