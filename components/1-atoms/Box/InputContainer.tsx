import styled from "styled-components";

import contentDirection from "../../../styles/contentDirection";
import fontWeight from "../../../styles/fontWeight";
import spaceSize from "../../../styles/spaceSize";

const InputContainer = styled.div`
  ${contentDirection.vertical};
  gap: ${spaceSize.smaller};

  &:focus-within {
    ${fontWeight.medium};
    color: ${({ theme }) => theme.color.borderFocus};
  }
`;

export default InputContainer;
