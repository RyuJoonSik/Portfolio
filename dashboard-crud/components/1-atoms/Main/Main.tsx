import styled from "styled-components";

import CONTENT_ALIGN from "../../../styles/contentAlign";
import CONTENT_DIRECTION from "../../../styles/contentDirection";
import RESPONSIVE_SIZE from "../../../styles/responsiveSize";

const HEADER_HEIGHT_DESKTOP = "4rem";
const HEADER_HEIGHT_MOBILE = "2rem";
const HEADER_BUTTON_CONTAINER_HEIGHT = "51px";

const Main = styled.main`
  ${CONTENT_DIRECTION.HORIZONTAL};
  ${CONTENT_ALIGN.CENTER_START};
  min-height: 100vh;
  padding-top: ${HEADER_HEIGHT_DESKTOP};
  background-color: ${({ theme }) => theme.color.backgroundDefault};

  ${RESPONSIVE_SIZE.MOBILE} {
    padding-top: ${HEADER_HEIGHT_MOBILE};
    padding-bottom: ${HEADER_BUTTON_CONTAINER_HEIGHT};
  }
`;

export default Main;
