import styled from "styled-components";

import CONTENT_ALIGN from "../../../styles/contentAlign";
import CONTENT_DIRECTION from "../../../styles/contentDirection";
import SPACE_SIZE from "../../../styles/spaceSize";

const InputContainer = styled.div`
  ${CONTENT_DIRECTION.HORIZONTAL};
  ${CONTENT_ALIGN.CENTER};
  border-radius: ${SPACE_SIZE.SMALLER};
  gap: ${SPACE_SIZE.SMALL};
  padding-left: ${SPACE_SIZE.SMALL};
  border: ${SPACE_SIZE.SMALLEST} solid
    ${({ theme }) => theme.color.borderDefault};

  color: ${({ theme }) => theme.color.borderDefault};

  &:focus-within {
    border-color: ${({ theme }) => theme.color.borderAccent};

    color: ${({ theme }) => theme.color.borderAccent};
  }
`;

export default InputContainer;
