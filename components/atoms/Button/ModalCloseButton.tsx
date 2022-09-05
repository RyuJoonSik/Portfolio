import styled, { css } from "styled-components";
import elementColor from "../../_styles/elementColor";

import spaceSize from "../../_styles/spaceSize";

const modalCloseButtonStyle = css`
  ${elementColor.white};
  padding: ${spaceSize.smaller} ${spaceSize.medium};
  border-radius: ${spaceSize.smaller};
  border: ${spaceSize.smallest} solid
    ${({ theme }) => theme.color.borderDefault};
`;

const ModalCloseButton = styled.button`
  ${modalCloseButtonStyle};
`;

export default ModalCloseButton;
