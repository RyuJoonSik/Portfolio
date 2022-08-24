import styled, { css } from "styled-components";

import spaceSize from "../../_styles/spaceSize";
import { whiteButtonStyle } from "../../atoms/Button/WhiteButton";

const modalCloseButtonStyle = css`
  ${whiteButtonStyle};
  padding: ${spaceSize.smaller} ${spaceSize.medium};
  border-radius: ${spaceSize.smaller};
  border: ${spaceSize.smallest} solid
    ${({ theme }) => theme.color.borderDefault};
`;

const ModalCloseButton = styled.button`
  ${modalCloseButtonStyle};
`;

export default ModalCloseButton;
