import styled from "styled-components";

import CONTENT_DIRECTION from "../../../styles/contentDirection";

export const UL = styled.ul`
  ${CONTENT_DIRECTION.HORIZONTAL};
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 1.5rem;

  color: ${({ theme }) => theme.color.textDefault};
`;

export default UL;
