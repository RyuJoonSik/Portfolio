import styled from "styled-components";

import CONTENT_ALIGN from "../../../styles/contentAlign";
import CONTENT_DIRECTION from "../../../styles/contentDirection";
import SPACE_SIZE from "../../../styles/spaceSize";

const MainContentItemHeader = styled.header`
  ${CONTENT_DIRECTION.HORIZONTAL};
  ${CONTENT_ALIGN.CENTER};
  flex-wrap: wrap;
  gap: 0 ${SPACE_SIZE.SMALL};
  padding: ${SPACE_SIZE.LARGER};
  border-bottom: ${SPACE_SIZE.SMALLEST}
    ${({ theme }) => theme.color.borderDefault} solid;

  color: ${({ theme }) => theme.color.textAccent};
`;

export default MainContentItemHeader;
