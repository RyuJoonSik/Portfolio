import styled from "styled-components";

import CONTENT_DIRECTION from "../../../styles/contentDirection";
import SPACE_SIZE from "../../../styles/spaceSize";

const Form = styled.form`
  ${CONTENT_DIRECTION.VERTICAL}
  gap: ${SPACE_SIZE.LARGER};
  padding: ${SPACE_SIZE.LARGER};

  color: ${({ theme }) => theme.color.textDefault};
`;

export default Form;
