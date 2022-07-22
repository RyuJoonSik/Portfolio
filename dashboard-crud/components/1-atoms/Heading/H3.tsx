import styled from "styled-components";

import CONTENT_DIRECTION from "../../../styles/contentDirection";
import CONTENT_ALIGN from "../../../styles/contentAlign";
import FONT_SIZE from "../../../styles/fontSize";
import FONT_WEIGHT from "../../../styles/fontWeight";

const H3 = styled.h3`
  ${CONTENT_DIRECTION.HORIZONTAL};
  ${CONTENT_ALIGN.START_CENTER};
  gap: 1rem;
  box-sizing: border-box;
  padding: 1.5rem;
  border-bottom: 1px ${({ theme }) => theme.color.borderDefault} solid;

  ${FONT_SIZE.LARGE}
  ${FONT_WEIGHT.MEDIUM}
  color: ${({ theme }) => theme.color.textAccent};
`;

export default H3;
