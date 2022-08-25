import styled, { css } from "styled-components";

import { blueButtonStyle } from "./BlueButton";
import contentAlign from "../../_styles/contentAlign";
import spaceSize from "../../_styles/spaceSize";
import contentDirection from "../../_styles/contentDirection";

const formOpenButtonStyle = css`
  ${blueButtonStyle};
  ${contentDirection.horizontal};
  ${contentAlign.center};
  gap: ${spaceSize.smaller};
  padding: ${spaceSize.small} ${spaceSize.small};
  border-radius: ${spaceSize.smaller};
`;

const FormOpenButton = styled.button`
  ${formOpenButtonStyle};
`;

export default FormOpenButton;
