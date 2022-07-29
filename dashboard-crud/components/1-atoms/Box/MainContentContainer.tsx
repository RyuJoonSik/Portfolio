import styled from "styled-components";

import CONTENT_ALIGN from "../../../styles/contentAlign";
import CONTENT_DIRECTION from "../../../styles/contentDirection";
import SPACE_SIZE from "../../../styles/spaceSize";

const MainContentContainer = styled.div`
  ${CONTENT_DIRECTION.VERTICAL};
  ${CONTENT_ALIGN.START_CENTER};
  gap: ${SPACE_SIZE.LARGER};
  padding: 0 ${SPACE_SIZE.LARGER};
  width: 100%;
  max-width: 63.75rem;
`;

export default MainContentContainer;
