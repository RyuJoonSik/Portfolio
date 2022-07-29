import styled from "styled-components";

import CONTENT_DIRECTION from "../../../styles/contentDirection";
import SPACE_SIZE from "../../../styles/spaceSize";

export const UL = styled.ul`
  ${CONTENT_DIRECTION.HORIZONTAL};
  padding: ${SPACE_SIZE.LARGER};
  flex-wrap: wrap;

  color: ${({ theme }) => theme.color.textDefault};
`;

export default UL;
