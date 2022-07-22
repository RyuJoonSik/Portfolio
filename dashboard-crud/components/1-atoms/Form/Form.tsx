import styled from "styled-components";

import CONTENT_DIRECTION from "../../../styles/contentDirection";

const Form = styled.form`
  ${CONTENT_DIRECTION.VERTICAL}
  gap: 1rem;
  box-sizing: border-box;
  padding: 1.5rem;

  color: ${({ theme }) => theme.color.textDefault};
`;

export default Form;
