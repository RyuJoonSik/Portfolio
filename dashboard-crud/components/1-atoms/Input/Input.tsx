import styled from "styled-components";

import FONT_SIZE from "../../../styles/fontSize";

const Input = styled.input`
  width: 100%;
  padding: 1rem;

  ${FONT_SIZE.DEFAULT};
  color: ${({ theme }) => theme.color.textDefault};

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.color.textPlaceholder};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.color.textPlaceholder};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.color.textPlaceholder};
  }
`;

export default Input;
