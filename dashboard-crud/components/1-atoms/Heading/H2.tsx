import styled from "styled-components";

import FONT_SIZE from "../../../styles/fontSize";
import FONT_WEIGHT from "../../../styles/fontWeight";
import SPACE_SIZE from "../../../styles/spaceSize";

const H2 = styled.h2`
  width: 100%;
  padding: ${SPACE_SIZE.LARGER} 0;
  border-bottom: ${SPACE_SIZE.SMALLEST}
    ${({ theme }) => theme.color.borderDefault} solid;

  ${FONT_SIZE.LARGER};
  ${FONT_WEIGHT.REGULAR};
  color: ${({ theme }) => theme.color.textAccent};
`;

export default H2;
