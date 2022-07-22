import styled from "styled-components";

import CONTENT_DIRECTION from "../../../styles/contentDirection";
import RESPONSIVE_SIZE from "../../../styles/responsiveSize";
import SCROLL from "../../../styles/scroll";

const HeaderButtonContainer = styled.div`
  ${CONTENT_DIRECTION.HORIZONTAL};

  overflow: scroll;
  ${SCROLL.HIDDEN};

  ${RESPONSIVE_SIZE.MOBILE} {
    position: fixed;
    bottom: 0;

    width: 100%;
  }
`;

export default HeaderButtonContainer;
