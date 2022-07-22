import styled from "styled-components";

import CONTENT_DIRECTION from "../../../styles/contentDirection";
import BORDER_RADIUS from "../../../styles/borderRadius";

const InputContainer = styled.div`
  position: relative;

  ${CONTENT_DIRECTION.HORIZONTAL};
  ${BORDER_RADIUS.DEFAULT};
  width: 100%;
  height: 3.2rem;
  border: 1px solid ${({ theme }) => theme.color.borderDefault};

  color: ${({ theme }) => theme.color.textPlaceholder};
`;

export default InputContainer;
