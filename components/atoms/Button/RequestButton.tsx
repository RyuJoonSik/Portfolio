import styled, { css } from "styled-components";

import spaceSize from "../../_styles/spaceSize";
import fontSize from "../../_styles/fontSize";
import elementColor from "../../_styles/elementColor";
import hoverEffect from "../../_styles/hoverEffect";

export const requestButtonStyle = css`
  ${elementColor.blue};
  ${hoverEffect.blue};
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
