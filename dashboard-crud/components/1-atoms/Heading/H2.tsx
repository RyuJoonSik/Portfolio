import styled from "styled-components";

import FONT_SIZE from "../../../styles/fontSize";
import FONT_WEIGHT from "../../../styles/fontWeight";

const H2 = styled.h2`
  width: 100%;
  padding: 1.25rem 0;
  border-bottom: 1px ${({ theme }) => theme.color.borderDefault} solid;

  ${FONT_SIZE.LARGEST};
  ${FONT_WEIGHT.REGULAR};
  color: ${({ theme }) => theme.color.textAccent};
`;

export default H2;
