import styled, { css } from "styled-components";

import spaceSize from "../../_styles/spaceSize";
import fontSize from "../../_styles/fontSize";
import elementColor from "../../_styles/elementColor";

export const requestButtonStyle = css`
  ${elementColor.blue}
  width: 100%;
  padding: ${spaceSize.small} 0;
  border-radius: ${spaceSize.smaller};

  ${fontSize.large};
  text-align: center;
`;

const RequestButton = styled.button`
  ${requestButtonStyle};
`;

export default RequestButton;
