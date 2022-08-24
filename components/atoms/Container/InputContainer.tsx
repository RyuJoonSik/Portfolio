import styled from "styled-components";

import contentDirection from "../../_styles/contentDirection";
import fontWeight from "../../_styles/fontWeight";
import spaceSize from "../../_styles/spaceSize";

const InputContainer = styled.div`
  ${contentDirection.vertical};
  gap: ${spaceSize.smaller};

  &:focus-within {
    ${fontWeight.medium};
    color: ${({ theme }) => theme.color.borderFocus};
  }
`;

export default InputContainer;
